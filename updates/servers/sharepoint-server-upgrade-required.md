---
title: SharePoint Server Upgrade Required
description: >-
  SharePoint Server Upgrade Required best practices report by SPDocKit
  determines whether any server in the environment requires you to run the
  Product Configuration Wizard to complete the upgrade process.
author: Aleksandar Draskovic
date: 19/6/2016
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# sharepoint-server-upgrade-required

## Issue description

This check determines whether any server in the environment requires you to run the Product Configuration Wizard to complete the upgrade process.

## Explanation

A SharePoint farm can be scaled to contain one or more SharePoint servers hosting one or more SharePoint components per server. This model provides scalability and high availability. Environments supporting many user and hosting a large amount of content are usually scaled in such way that various SharePoint components have dedicated hardware or sets of resources allocated to them.

All components in a SharePoint environment should be on the same patch level to provide maximum compatibility, stability, and supportability. The patching occurs in two steps: installing SharePoint bits and running Product Configuration Wizard.

## Solution

Check all SharePoint servers in the environment. To verify installed SharePoint Server updates, start **Control Panel**, go to **Programs** &gt; **Programs and Features** and click **View installed updates**. Note that the Control Panel will only show installed binaries. Installing SharePoint binaries is only one part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the **Central Administration**, and in the **Upgrade and Migration** section, click **Check upgrade status**.

This page will provide information about the servers needing upgrades. Run **SharePoint Product Configuration Wizard** on the identified servers to complete the patching process.

## Additional information

Additional information can be found in the following TechNet articles:

* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/ff806325%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff806338.aspx)
* [SharePoint Updates](https://technet.microsoft.com/library/4b32dfba-1af6-4077-9a92-7cec8f220f20)
* [SharePoint 2013 Build Numbers](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=346)

