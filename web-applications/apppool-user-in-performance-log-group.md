---
title: AppPool User in Performance Log Group
description: >-
  AppPool User in Performance Log Group best practice report by SPDocKit
  determines whether the application pool user accounts have the required
  permissions on the system.
author: Aleksandar Draskovic
date: 19/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# apppool-user-in-performance-log-group

## Issue description

This check determines whether the application pool user accounts have the required permissions on the system.

## Explanation

To gather required performance counter metrics, an application pool account needs to be a member of the local Performance Log Users group.

## Solution

Verify that the application pool account is a member of the local Performance Log Users group on all SharePoint servers. To do so, open **Computer Management** &gt; **System Tools** &gt; **Local Users and Groups** &gt; **Groups** and double click the group **Performance Log Users**. If the application pool account is not a member of this group, add it to the group.

The following script checks the application pool accounts group memberships and reports accounts which are not members of required groups:  
[Download this script](../_assets/Get-BPAppPoolGroupMembership.zip)

```text
param()

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

function Get-SPApplicationPoolUser
{
    $appPoolUsers = @()

    $svcAppPools = Get-SPServiceApplicationPool
    foreach ($svcAppPool in $svcAppPools)
    {
        if ($appPoolUsers.IndexOf($svcAppPool.ProcessAccountName) -eq -1)
        {
            $appPoolUsers += $svcAppPool.ProcessAccountName
        }
    }

    $spWebApps = Get-SPWebApplication -IncludeCentralAdministration
    foreach ($spWebApp in $spWebApps)
    {
        if ($appPoolUsers.IndexOf($spWebApp.ApplicationPool.UserName) -eq -1)
        {
            $appPoolUsers += $spWebApp.ApplicationPool.UserName
        }
    }
    return $appPoolUsers
}

function IsMemberOfGroup([string]$serverName,[string]$groupName,[string]$userName)
{
    $userNameAdsPath = "WinNT://" + $userName.Replace("\","/")
    $server = [ADSI]("WinNT://$serverName,computer")
    $group = $server.psbase.children.find($groupName)

    $members = $group.psbase.invoke("Members") | %{$_.GetType().InvokeMember("Adspath", "GetProperty", $null, $_, $null)}
    return $members.IndexOf($userNameAdsPath) -gt -1

}

$spServerList = Get-SPServerList
$spUserList = Get-SPApplicationPoolUser

Write-Host "Checking Performance Log Users group membership for SharePoint Application Pool accounts..." -ForegroundColor Yellow

foreach ($server in $spServerList)
{
    Write-Host "Server: $server" -ForegroundColor Green
    foreach ($user in $spUserList)
    {
        Write-Host "`t User: $user - " -NoNewLine
        if (!(IsMemberOfGroup $server "Performance Log Users" $user))
        {
            Write-Host "Missing" -ForegroundColor Red
        }
        else
        {
            Write-Host "OK" -ForegroundColor Green
        }
    }
    Write-Host ""
}
```

## Additional information

Additional information can be found in the following articles:

* [Monitoring and maintaining SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ff758658.aspx)
* [Plan for administrative and service accounts in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc263445.aspx)

