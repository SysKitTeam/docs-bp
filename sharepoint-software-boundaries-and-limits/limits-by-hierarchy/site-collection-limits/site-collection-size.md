---
title: Site Collection Size
description: Site Collection Size best practices report by SPDocKit determines whether site collections are growing beyond the recommended boundaries.
author: Aleksandar Draskovic 
date: 23/6/2017
---
### Issue Description
This check determines whether site collections are growing beyond the recommended boundaries.
### Explanation
contains one top site, document libraries, lists, and other items stored within SharePoint. It can contain one or more subsites. A site collection is stored within one content database, and it cannot be split over multiple content databases. It is an isolated unit containing its own structure and permission matrix.

A site collection can be as large as the content database size limit for the applicable usage scenario:
* General usage – 200 GB
* All usage scenarios (appropriate I/O subsystem design) – 4 TB
* Document archive – no limits

However, we strongly recommend limiting the size of the site collections to 100 GB for the following reasons:
* Certain site collection actions, such as site collection backup/restore or the Windows PowerShell cmdlet Move-SPSite, cause large SQL Server operations that can affect performance or fail if other site collections are active in the same database.
* SharePoint site collection backup and restore is only supported for a maximum site collection size of 100 GB. For larger site collections, the complete content database must be backed up. If multiple site collections larger than 100 GB are contained in a single content database, backup and restore operations can take a long time and are at risk of failure.
### Solution
Please check the size of the site collections in the content database. If you have a site collection larger than 100 GB, consider creating new content databases and moving all other site collections to the new content databases.

To create a new content database, start **SharePoint 2013 Management Shell** and run the following cmdlet:
```powershell
New-SPContentDatabase "<database name>" -DatabaseServer "<database server / alias>" -WebApplication http://sitename
```
To move a site collection to the new content database, start SharePoint 2013 Management Shell as an Administrator and run the following cmdlet:
```powershell
Move-SPSite http://webapp/sites/sitename -DestinationDatabase ContentDb2
```
To achieve the same result in Windows SharePoint Services 3.0 and SharePoint Server 2007, follow the procedure described in the following articles:
* [Addcontentdb: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc263422(v=office.12).aspx)
* [Move site collections to a new database (split a content database) (Windows SharePoint Services 3.0)](https://technet.microsoft.com/en-us/library/cc825327(v=office.12).aspx)

This script extracts the web application and site collection metrics. 

It also checks if the site collection is within 100GB boundaries and contains less than 250.000 site collections. It extracts the following information:

– web application name, URL, site collections count and a list of site collections

– site collection URL, site count, database name and storage used.
```powershell
param(
[string]$OutputFile = "$(split-path -parent $MyInvocation.MyCommand.Definition)SiteMetrics.xml"
)
 
Write-Host "Extracting structure information to $OutputFile..."
"<Metrics>" | Out-File -FilePath $OutputFile -Append:$false
 
$spWebApps = Get-SPWebApplication
$spWAcount = 1
foreach ($spWebApp in $spWebApps)
{
    $percentComplete = [int](($spWAcount*100)/$spWebApps.Count)
    Write-Progress -Activity "Reading SharePoint farm structure..." -Status "Enumerating Web Applications, $percentComplete% completed..." -Id 0 -PercentComplete $percentComplete -CurrentOperation "Web Application: $($spWebApp.DisplayName) [Url: $($spWebApp.Url)]"
    "`t<WebApplication DisplayName='$($spWebApp.DisplayName)' Url='$($spWebApp.Url)' SiteCount='$($spWebApp.Sites.Count)'>" | Out-File -FilePath $OutputFile -Append:$true
    # export $spWebApp.DisplayName
    # export $spWebApp.Url
    # export $spWebApp.Sites.Count, check if bigger than ?
    $spSiteCount = 1
     
    foreach ($spSite in $spWebApp.Sites)
    {
        $sitePercentComplete = [int](($spSiteCount*100)/$spWebApp.Sites.Count)
        Write-Progress -Activity "Enumerating site collections, $sitePercentComplete% completed..." -Id 1 -PercentComplete $sitePercentComplete -CurrentOperation "Site collection: $($spSite.Url)" -ParentId 0
        # export $spSite.Url
        # export $spSite.Usage.Storage, check if bigger than 100GB
        # export $spSite.AllWebs.Count, check if bigger than 250.000    
        "`t`t<SiteCollection Url='$($spSite.Url)' Database='$($spSite.ContentDatabase.Name)' Storage='$($spSite.Usage.Storage)' WebCount='$($spSite.AllWebs.Count)'/>" | Out-File -FilePath $OutputFile -Append:$true
        if ($spSite.Usage.Storage -gt 100GB)
        {
            Write-Host "Warning: site collection $($spSite.Url) is larger than 100GB. Site collection size: $([int]($spSite.Usage.Storage/1GB))GB" -ForegroundColor Yellow
        }
         
        if ($spSite.AllWebs.Count -gt 250000)
        {
            Write-Host "Warning: site collection $($spSite.Url) has more than 250.000 sites. Number of sites: $($spSite.AllWebs.Count)" -ForegroundColor Yellow
        }
         
        $spSiteCount++
    }
    "`t</WebApplication>" | Out-File -FilePath $OutputFile -Append:$true
    $spWAcount++
}
"</Metrics>" | Out-File -FilePath $OutputFile -Append:$true
```
### Additional information 
Additional information can be found in the following articles:
* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [New-SPContentDatabase](https://technet.microsoft.com/en-us/library/ff607572.aspx)
* [Move-SPSite](https://technet.microsoft.com/en-us/library/ff607915.aspx)
* [Move site collections between databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc825328.aspx)
* [Addcontentdb: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc263422(v=office.12).aspx)
* [Move site collections to a new database (split a content database) (Windows SharePoint Services 3.0)](https://technet.microsoft.com/en-us/library/cc825327(v=office.12).aspx)