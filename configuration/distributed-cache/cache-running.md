---
title: Cache Running
description: Cache Running best practices report by SPDocKit determines whether the Distributed Cache service is enabled in the SharePoint farm.
author: Aleksandar Draskovic 
date: 21/6/2017
---
### Issue description
This check determines whether the Distributed Cache service is enabled in the SharePoint farm.
### Explanation
Distributed Cache is a customized version of the Windows App Fabric deployed in SharePoint 2013. 

The Distributed Cache service is either required for or improves the performance of the following:
* Authentication
* Newsfeeds
* OneNote client access
* Security Trimming
* Page load performance

Distributed Cache Cluster must be in a healthy state and running for SharePoint to work properly.
### Solution
Verify that the Distributed Cache service is started. To do this, in the SharePoint Central Administration website, click **Application Management**. In the **Service Applications** section, click **Manage services on server**. On the **Services on server** page, make sure that the Distributed Cache service is listed, and the status is **Started**.
### Additional information 
Additional information can be found in the following article:
* [Distributed cache service is not enabled in this deployment](https://technet.microsoft.com/en-us/library/jj891121.aspx)