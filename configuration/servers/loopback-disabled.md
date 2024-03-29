---
description: >-
  Loopback Disabled best practices report by SPDocKit offers more information
  when the HTTP 401.1 – Unauthorized - Logon Failed occurs.
---

# Loopback Disabled

## Issue description

When you browse a SharePoint site with a host name or Full Qualified Domain Name (FQDN) different than SharePoint server’s, you may receive the following error message:

> HTTP 401.1 – Unauthorized: Logon Failed

Additionally, a message similar to the following event message is logged in the Security Event log. This event message includes some strange characters in the value for the Logon Process entry:

> _Event Type: Failure Audit_\
> _Event Source: Security_\
> _Event Category: Logon/Logoff_\
> _Event ID: 537_\
> _date: date_\
> _Time: Time_\
> _User: NT authorITYSYSTEM_\
> _Computer: Computer\_Name_\
> _description: Logon Failure:_\
> _Reason: An error occurred during logon_\
> _User Name: User\_Name_\
> _Domain: Domain\_Name_\
> _Logon Type: 3_\
> _Logon Process:_\
> _Authentication Package: NTLM_\
> _Workstation Name: Computer\_Name_\
> _Status code: 0xC000006D_\
> _Substatus code: 0x0_\
> _Caller User Name: –_\
> _Caller Domain: –_\
> _Caller Logon ID: –_\
> _Caller Process ID: –_\
> _Transited Services: –_\
> _Source Network Address: IP\_Address_\
> _Source Port: Port\_Number_

You will receive this error message only if you try to browse the website directly on the server. If you browse the website from a client computer, the website works as expected. Also, in some configurations, especially in a single server farm setup, crawl operations may fail.

## Explanation

SharePoint is built on top of Internet Information Services (IIS), which is a Windows Server component. Windows Server 2003 Service Pack 1 introduced a loopback security check designed to prevent reflection attacks on the server. If the FQDN or the custom host header of the SharePoint web application does not match the local computer name, authentication will fail.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

You have to disable the loopback check in order for SharePoint to work properly. There are two methods to disable the loopback check:

**Method 1:** [Specify host names](https://technet.microsoft.com/en-us/library/ff431687.aspx)

The following script retrieves the loopback check configuration:

{% file src="../../.gitbook/assets/get-bploopbackcheckconfig.zip" %}

```bash
param()

function Get-RegistryValue ([string]$path,[string]$valueName)
{
    return (Get-ItemProperty -Path $path -Name $valueName -ErrorAction SilentlyContinue)
}

function Get-LoopbackCheck
{
    Write-Host "Checking method #1 - DisableLoopbackCheck" -ForegroundColor Green
    Write-Host "Reading loopback check configuration... " -ForegroundColor Yellow -NoNewLine

    $dlValue = (Get-RegistryValue "HKLM:SystemCurrentControlSetControlLsa" "DisableLoopbackCheck").DisableLoopbackCheck
    if ($dlValue -eq 1)
    {
        Write-Host "Enabled" -ForegroundColor Green
    }
    else
    {
        Write-Host "Disabled" -ForegroundColor Red
    }
    Write-Host ""
}

function Get-LoopbackCheckForHostNames
{
    Write-Host "Checking method #2 - SpecifyHostNames" -ForegroundColor Green
    Write-Host "Reading loopback check configuration (DisableStrictNameChecking)... " -ForegroundColor Yellow -NoNewLine

    $dlValue = (Get-RegistryValue "HKLM:SystemCurrentControlSetServicesLanmanServerParameters" "DisableStrictNameChecking").DisableStrictNameChecking
    if ($dlValue -eq 1)
    {
        Write-Host "Enabled" -ForegroundColor Green
    }
    else
    {
        Write-Host "Disabled" -ForegroundColor Red
    }

    Write-Host "Reading loopback check configuration (BackConnectionHostNames)... " -ForegroundColor Yellow -NoNewLine
    $registeredURLs = (Get-RegistryValue "HKLM:SystemCurrentControlSetControlLsaMSV1_0" "BackConnectionHostNames").BackConnectionHostNames
    if ([string]::IsNullOrEmpty($registeredURLs))
    {
        Write-Host "Not present" -ForegroundColor Red
    }
    else
    {
        Write-Host "Enabled" -ForegroundColor Green
    }
    Write-Host ""
}
```

**Method 2:** [Disable loopback check completely](http://www.harbar.net/archive/2009/07/02/disableloopbackcheck-amp-sharepoint-what-every-admin-and-developer-should-know.aspx)

The following script manages the loopback check configuration:

{% file src="../../.gitbook/assets/set-bploopbackcheckconfig.zip" %}

```bash
param(
    [Parameter(Mandatory=$true)]
    [ValidateSet("DisableLoopbackCheck","SpecifyHostNames","Enable")]
    [string]$Action
)

function Get-SPWebAppHostNames()
{
    $spWebApps = Get-SPWebApplication
    $urlList = @()
    foreach ($spWebApp in $spWebApps)
    {
        foreach ($url in $spWebApp.AlternateUrls)
        {
            if ($urlList.IndexOf(([System.Uri]$url.IncomingUrl).Host) -eq -1)
            {
                $urlList += ([System.Uri]$url.IncomingUrl).Host
            }
            if ($urlList.IndexOf(([System.Uri]$url.PublicUrl).Host) -eq -1)
            {
                $urlList += ([System.Uri]$url.PublicUrl).Host
            }              
        }
    }
    return $urlList
}

function Get-RegistryValue ([string]$path,[string]$valueName)
{
    return (Get-ItemProperty -Path $path -Name $valueName -ErrorAction SilentlyContinue)
}

function Set-RegistryValueDword([string]$path,[string]$valueName,[uint32]$value)
{
    $loopbackCheck = (Get-ItemProperty -Path $path -Name $valueName -ErrorAction SilentlyContinue)

    if ($loopbackCheck -eq $null)
    {
        $loopbackCheck = New-ItemProperty -Path $path -Name $valueName -PropertyType DWord -Value $value -ErrorAction SilentlyContinue
    }
    else
    {
        $loopbackCheck = Set-ItemProperty -Path $path -Name $valueName -Value $value -ErrorAction SilentlyContinue -PassThru
    }
}

function Set-RegistryValueMultiString([string]$path,[string]$valueName,$value)
{
    $itemProperty = (Get-ItemProperty -Path $path -Name $valueName -ErrorAction SilentlyContinue)

    if ($itemProperty -eq $null)
    {
        $itemProperty = New-ItemProperty -Path $path -Name $valueName -PropertyType MultiString -Value $value -ErrorAction SilentlyContinue
    }
    else
    {
        $itemProperty = Set-ItemProperty -Path $path -Name $valueName -Value $value -ErrorAction SilentlyContinue -PassThru
    }
}

function Restart-IISAdminService()
{
    $title = "Restart IISADMIN service"
    $message = "To apply the changes, we need to restart the IISADMIN service. This can impact the service availability. Do you want to continue?"

    $yes = New-Object System.Management.Automation.Host.Choicedescription "&Yes", `
        "Restarts the IISADMIN service."

    $no = New-Object System.Management.Automation.Host.Choicedescription "&No", `
        "Exits without restarting the IISADMIN service. You will have to restart the service manually."

    $options = [System.Management.Automation.Host.Choicedescription[]]($yes, $no)

    $result = $host.ui.PromptForChoice($title, $message, $options, 0) 

    switch ($result)
    {
        0 { Restart-Service IISADMIN }
        1 { }
    }
}

function Disable-LoopbackCheck([bool]$lcDisable)
{
    $value = [int]$lcDisable
    if ($lcDisable)
    {
        $edString = "Disabling"
    }
    else
    {
        $edString = "Enabling"
    }

    Write-Host "$edString loopback check..." -ForegroundColor Green

    Set-RegistryValueDword "HKLM:SystemCurrentControlSetControlLsa" "DisableLoopbackCheck" $value

    Write-Host "Please restart server to apply changes." -ForegroundColor Red
}

function Disable-LoopbackCheckForHostNames([bool]$lcDisable)
{
    Write-Host "Selectively disabling loopback check by host names is not implemented yet. " -ForegroundColor Yellow 
    $value = [int]$lcDisable
    if ($lcDisable)
    {
        $edString = "Disabling"
    }
    else
    {
        $edString = "Enabling"
    }

    Write-Host "$edString loopback check (set host names method)..." -ForegroundColor Green

    Set-RegistryValueDword "HKLM:SystemCurrentControlSetServicesLanmanServerParameters" "DisableStrictNameChecking" $value
    if ($lcDisable)
    {
        $registeredURLs = (Get-RegistryValue "HKLM:SystemCurrentControlSetControlLsaMSV1_0" "BackConnectionHostNames").BackConnectionHostNames
        if ([string]::IsNullOrEmpty($registeredURLs))
        {
            $registeredURLs = @()
        }
        $spUrls = Get-SPWebAppHostNames
        foreach ($spUrl in $spUrls)
        {
            $spUrl = $spUrl.Trim()
            if ($spUrl -ne "")
            {
                if ($registeredURLs.IndexOf($spUrl) -eq -1)
                {
                    $registeredURLs += $spUrl
                }
            }
        }
        Set-RegistryValueMultiString "HKLM:SystemCurrentControlSetControlLsaMSV1_0" "BackConnectionHostNames" $registeredURLs
        Write-Host "If you configured SharePoint for use with Kerberos, you may need to register the following SPNs:" -ForegroundColor Yellow
        foreach ($url in $spUrls)
        {
            Write-Host "HTTP/$url" -ForegroundColor Yellow
        }

        # Check if DisableLoopbackCheck is set and remove the setting
        if ((Get-RegistryValue "HKLM:SystemCurrentControlSetControlLsa" "DisableLoopbackCheck").DisableLoopbackCheck -eq 1)
        {
            Write-Host "Detected DisableLoopbackCheck. Deactivating..." -ForegroundColor Green
            Disable-LoopbackCheck $false
        }
    }
    else
    {
        Set-RegistryValueMultiString "HKLM:SystemCurrentControlSetControlLsaMSV1_0" "BackConnectionHostNames" @()
    }

    Restart-IISAdminService
}


### Main
switch ($Action)
{
    "Enable"                    { Disable-LoopbackCheck $false; Disable-LoopbackCheckForHostNames $false }
    "DisableLoopbackCheck"      { Disable-LoopbackCheck $true }
    "SpecifyHostNames"          { Disable-LoopbackCheckForHostNames $true}
}
```

## Additional information

Additional information can be found in the following articles:

* [DisableLoopbackCheck & SharePoint: What every admin and developer should know](http://www.harbar.net/archive/2009/07/02/disableloopbackcheck-amp-sharepoint-what-every-admin-and-developer-should-know.aspx)
