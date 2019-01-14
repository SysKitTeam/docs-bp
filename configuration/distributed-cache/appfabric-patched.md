---
title: AppFabric Patched
description: >-
  AppFabric Patched best practices report by SPDocKit determines whether all
  servers are running the latest Windows Server AppFabric build.
author: Aleksandar Draskovic
date: 21/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# appfabric-patched

## Issue description

This check determines whether all servers are running the latest Windows Server AppFabric build.

## Explanation

Distributed Cache is a customized version of the Windows Server AppFabric deployed in SharePoint 2013.

The Distributed Cache service is either required or improves the performance of:

* Authentication
* Newsfeeds
* OneNote client access
* Security Trimming
* Page load performance

Windows AppFabric should be patched to the newest build. Microsoft releases new Windows AppFabric builds to fix issues and provide new functionalities. Windows AppFabric must be running the same build on all SharePoint servers, regardless of whether they are in the Distributed Cache Cluster or not.

## Solution

Verify the Windows Server App Fabric build number. To do so, you can check the version number in the Version column in **Control Panel** &gt; **Programs** &gt; **Programs and Features**.

## Additional information

Additional information can be found in the following articles:

* [How to check the version of AppFabric 1.1 aka the Distributed Cache](http://www.wictorwilen.se/how-to-check-the-version-of-appfabric-1.1-aka-the-distributed-cache)
* [How to patch the Distributed Cache in SharePoint 2013](http://www.wictorwilen.se/how-to-patch-the-distributed-cache-in-sharepoint-2013)

