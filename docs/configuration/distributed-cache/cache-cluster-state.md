---
description: Cache Cluster State best practices report by SPDocKit determines whether the Distributed Cache Cluster is in a healthy state.
---

# Cache Cluster State

## Issue description

This check determines whether the Distributed Cache Cluster is in a healthy state.

## Explanation

Distributed Cache is a customized version of the Windows AppFabric deployed in SharePoint 2013.

The Distributed Cache service is either required or improves the performance of:

* Authentication
* Newsfeeds
* OneNote client access
* Security Trimming
* Page load performance

The Distributed Cache Cluster must be in a healthy state for SharePoint to work properly.

[![Download SPDocKit](../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Verify the Distributed Cache Cluster state. To do so, start **SharePoint 2013 Management Shell** as Administrator. Run the following Windows PowerShell cmdlets:

```powershell
Use-CacheCluster 
Get-AfCacheClusterHealth
```

To fix issues, please refer to the articles referenced in the **Additional information** section.

## Additional information

Additional information can be found in the following articles:

* [Manage the Distributed Cache service in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj219613.aspx)
* [SharePoint 2013: AppFabric and Distributed Cache Service](http://social.technet.microsoft.com/wiki/contents/articles/20348.sharepoint-2013-appfabric-and-distributed-cache-service.aspx)
* [Guest Post: Distributed Cache Service in SharePoint 2013](https://blogs.technet.microsoft.com/uktechnet/2013/05/07/guest-post-distributed-cache-service-in-sharepoint-2013/)

