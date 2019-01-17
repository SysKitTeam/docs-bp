---
title: Distributed Cache Servers Hotfixes
description: >-
  Distributed Cache Servers Hotfixes best practices report by SPDocKit
  determines whether all distributed cache servers in the environment are
  running on the same patch level as the rest of the environment.
author: Toni Frankola
date: 16/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# distributed-cache-servers

## Issue description

This check determines whether all distributed cache servers in the environment are running on the same patch level as the rest of the environment.

## Explanation

A SharePoint farm can be scaled to contain one or more SharePoint servers, hosting one or more SharePoint components per server. This model provides scalability and it can also provide high availability. Environments supporting a high number of users and hosting a large amount of content are usually scaled in such a way that various SharePoint components have dedicated hardware or a set of resources allocated to them.

All components in a SharePoint environment should have the same patch level to provide maximum compatibility, stability, and supportability. This also applies to the SharePoint distributed cache servers.

## Solution

Check all the SharePoint distributed cache servers in the environment. Make sure that all of them are running on the same SharePoint patch level and Windows patch level.

To see installed Windows and SharePoint Server updates, start **Control Panel**, go to **Programs** &gt; **Programs and Features** and click **View installed updates**. Control Panel, however, will only show installed binaries. Installing SharePoint binaries is only a part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the **Central Administration**, and in the **Upgrade and Migration** section, click **Check upgrade status** \(SharePoint 2010 and 2013\).

## Additional information

Additional information can be found in the following TechNet articles:

* [List of SharePoint Updates \(SharePoint 2010 and 2013\)](https://technet.microsoft.com/library/4b32dfba-1af6-4077-9a92-7cec8f220f20)
* [SharePoint 2013 Build Numbers](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=346)
* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/ff806325%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff806338.aspx)

