---
description: Cache Size best practices report by SPDocKit determines whether the Distributed Cache size is configured properly on all servers.
---

# Cache Size

## Issue description

This check determines whether the Distributed Cache service is enabled in the SharePoint farm.

## Explanation

Distributed Cache is a customized version of the Windows App Fabric deployed in SharePoint 2013. The Distributed Cache service is either required for or improves the performance of the following:

* Authentication
* Newsfeeds
* OneNote client access
* Security Trimming
* Page load performance

Microsoft recommends that the cache size for the Distributed Cache service is set at 10% for servers in collocated mode or is set using the following formula for dedicated servers: \(total physical memory on server – 2 GB for other processes and services that are running on the cache host\)/2. Deviation of 10% is acceptable. Maximum memory allocation is 16 GB. You must ensure that the memory allocation assigned to the Distributed Cache service is the same on all servers running the Distributed Cache service.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Verify the memory allocation size for Distributed Cache on all servers which are running the service. To do so, start **SharePoint 2013 Management Shell** as Administrator. Run the following Windows PowerShell cmdlets:

```powershell
Use-CacheCluster 
Get-AFCacheHostConfiguration -ComputerName $env:COMPUTERNAME -CachePort "22233"
```

To change the memory allocation, run the following cmdlet:

```powershell
Update-SPDistributedCacheSize -CacheSizeInMB <i>CacheSize</i>
```

## Additional information

Additional information can be found in the following article:

* [Manage the Distributed Cache service in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj219613.aspx)
* [SharePoint 2013: AppFabric and Distributed Cache Service](https://social.technet.microsoft.com/wiki/contents/articles/20348.sharepoint-2013-appfabric-and-distributed-cache-service.aspx)
* [Guest Post: Distributed Cache Service in SharePoint 2013](https://blogs.technet.microsoft.com/uktechnet/2013/05/07/guest-post-distributed-cache-service-in-sharepoint-2013/)

