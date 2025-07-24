---
description: DB Servers Hotfixes best practices report by SPDocKit determines whether all SQL servers supporting the SharePoint farm are running on the same patch level.
---

# DB Servers Hotfixes

## Issue description

A SharePoint farm may utilize one or more SQL servers in various configurations to store configuration, content, and service application databases. This check determines whether all SQL servers supporting the SharePoint farm are running on the same patch level.

## Explanation

All components in a SharePoint environment should be on the same patch level in order to provide maximum compatibility, stability, and supportability. This also applies to SQL servers.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check all SQL servers in the SharePoint environment. Make sure that all SQL servers are running on the same patch level and that they are running on the minimum required patch level to support the SharePoint version you are running. In addition, verify that all servers are running the same Windows Server hotfixes.

To verify installed Windows and SQL Server updates, start Control Panel, go to Programs &gt; Programs and Features and click View installed updates.

You can use this script:

[Download this script](/img/get-bpserverupdatestatus.zip)

```bash
param(
    [ValidateSet("Disable","Quick","Detailed")]
    [string]$WindowsUpdateCheck="Quick")

function Get-SPServerList
{
    $spServerList=@()
    $serverList = Get-SPServer
    foreach ($server in $serverList)
    {
        if ($server.Role -ne [Microsoft.SharePoint.Administration.SPServerRole]::Invalid)
        {
            $spServerList += $server.Address
        }
    }
    return $spServerList
}

function Get-WinUpdateLastInstalledHotfixDate([string]$serverName)
{
    $result = Get-HotFix -ComputerName $serverName -ErrorAction SilentlyContinue | Measure-Object InstalledOn -Maximum
    if (![string]::IsNullOrEmpty($result)) { $result = $result.Maximum.ToString("yyyy-MM-dd hh:mm:ss") }
    return $result
}

function Get-WinUpdateLastCheckDate([string]$serverName)
{
    $result = Invoke-Command -ComputerName $serverName -ScriptBlock {Get-ItemProperty -Path 'HKLM:SOFTWAREMicrosoftWindowsCurrentVersionWindowsUpdateAuto UpdateResultsDetect' -Name LastSuccessTime -ErrorAction SilentlyContinue | select -ExpandProperty LastSuccessTime}
    return $result 
}

function Get-WinUpdateLastInstallDate([string]$serverName)
{
    $result = Invoke-Command -ComputerName $serverName -ScriptBlock {Get-ItemProperty -Path 'HKLM:SOFTWAREMicrosoftWindowsCurrentVersionWindowsUpdateAuto UpdateResultsInstall' -Name LastSuccessTime -ErrorAction SilentlyContinue | select -ExpandProperty LastSuccessTime}
    return $result
}

function Get-AvailableWindowsUpdatesCount([string]$serverName)
{
    $numUpdates = Invoke-Command -ComputerName $serverName -ScriptBlock {$Searcher = New-Object -ComObject Microsoft.Update.Searcher; $results = $searcher.search("Type='software' AND IsInstalled = 0 AND IsHidden = 0"); $results.Updates.Count} -ErrorAction SilentlyContinue
    if ([string]::IsNullOrEmpty($numUpdates))
    {
        $numUpdates = -1
    }
    return $numUpdates
}

function Get-SPFarmVersion
{
    return (Get-SPFarm).BuildVersion.ToString()
}

# based on the script by Stefan Goßner
# for more information, please visit http://blogs.technet.com/b/stefan_gossner/archive/2015/04/20/powershell-script-to-display-version-info-for-sharepoint-product-and-language-packs.aspx
function Get-SPProductsBuild([string]$serverName)
{
    $farmVersion = (Get-SPFarm).BuildVersion.ToString()
    # Get SharePoint Products and language packs

    $programs = Invoke-Command -ComputerName $serverName -ScriptBlock {$regLoc = Get-ChildItem "HKLM:SoftwareMicrosoftWindowsCurrentVersionUninstall" ; $RegLoc | where-object { $_.PsPath -like "*Office*" } | foreach {Get-ItemProperty $_.PsPath}}

    $consoleForegroundColor = [console]::ForegroundColor
    $Programs | foreach {  
        $_ | Select  DisplayName, DisplayVersion | foreach { if ( $_.DisplayVersion.Trim() -ne $farmVersion ) { [console]::ForegroundColor="Red"} else {[console]::ForegroundColor=$consoleForegroundColor} $_ }; 
    }

    [console]::ForegroundColor = $consoleForegroundColor
}

function Check-WindowsUpdatesDetailed([string]$serverName)
{
    Write-Host "Available Windows Updates: " -NoNewLine
    $numWU = Get-AvailableWindowsUpdatesCount $serverName
    if ($numWU -gt 0)
    {
        $fc = "Yellow"
    }
    else
    {
        $fc = "Green"
    }
    if ($numWU -eq -1)
    {
        $fc = "Red"
        $numWU = "Failed to connect"
    }
    Write-Host $numWU -ForegroundColor $fc
}

function Check-WindowsUpdatesQuick([string]$serverName)
{
    $wuLastCheck = Get-WinUpdateLastCheckDate $serverName
    $wuLastInstall = Get-WinUpdateLastInstallDate $serverName
    $fcC = $fcI = [console]::ForegroundColor

    if ([string]::IsNullOrEmpty($wuLastCheck))
    {
        $wuLastCheck = "Unknown"
        $fcC = "Red"
    }

    if ([string]::IsNullOrEmpty($wuLastInstall))
    { 
        $wuLastInstall = Get-WinUpdateLastInstalledHotfixDate $serverName
        if ([string]::IsNullOrEmpty($wuLastInstall))
        {
            $fcI = "Red"
            $wuLastInstall = "Unknown"
        }
    }

    Write-Host "`t Last Windows Update check: " -NoNewLine
    Write-Host "$wuLastCheck" -ForegroundColor $fcC
    Write-Host "`t Last Windows Update installation: " -NoNewLine
    Write-Host "$wuLastInstall" -ForegroundColor $fcI

}

function Get-SPServerNeedingUpgrade
{
    $serverList = Get-SPServer | Where{ ($_.NeedsUpgrade -eq $TRUE) -and ($_.Role -ne [Microsoft.SharePoint.Administration.SPServerRole]::Invalid)}
    if ([string]::IsNullOrEmpty($serverList))
    {
        Write-Host "None." -ForegroundColor Green
    }
    else
    {
        $serverList | ft -a
    }
}

### Main

$spServerList = Get-SPServerList

Write-Host "SharePoint farm build $((Get-SPFarm).BuildVersion.ToString())" -ForegroundColor Yellow
Write-Host ""

switch ($WindowsUpdateCheck)
{
    "Disable"       { Write-Host "Skipping Windows Update check" -ForegroundColor Yellow }
    "Quick"         { Write-Host "Last Windows Update check and installation time will be retrieved." -ForegroundColor Yellow }
    "Detailed"      { Write-Host "Detailed Windows Update check will be performed. This may take a long time." -ForegroundColor Yellow }
}

foreach ($server in $spServerList)
{
    Write-Host "=================================================" -ForegroundColor Green
    Write-Host "Server: $server" -ForegroundColor Green
    Write-Host "=================================================" -ForegroundColor Green

    switch ($WindowsUpdateCheck)
    {
        "Disable"       {  }
        "Quick"         { Check-WindowsUpdatesQuick $server }
        "Detailed"      { Check-WindowsUpdatesQuick $server; Check-WindowsUpdatesDetailed $server }
    }

    Write-Host ""
    Write-Host "Installed binaries:"
    Get-SPProductsBuild $server

    Write-Host ""
}

Write-Host "Following SharePoint servers must be upgraded via PSCONFIG: " -ForegroundColor Yellow
Get-SPServerNeedingUpgrade
```

## Additional information

Additional information can be found in the following TechNet articles:

* [Windows SharePoint Services 3.0 and SharePoint Server 2007: Determine hardware and software requirements \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc262485%28v=office.12%29.aspx)
* [SharePoint Foundation 2010 and SharePoint Server 2010: Hardware and software requirements \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/cc288751%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Hardware and software requirements for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262485.aspx)

