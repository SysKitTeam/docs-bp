---
title: App Services Configured
description: >-
  App Services Configured best practices report by SPDocKit determines whether
  the SharePoint farm is configured to support SharePoint apps.
autor: Aleksandar Draskovic
date: 14/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# App Services Configured

## Issue description

This check determines whether the SharePoint farm is configured to support SharePoint apps.

## Explanation

To address issues caused by old full-trust and sandboxed solution models, Microsoft introduced a SharePoint app model with version 2013. In SharePoint apps, custom code does not have to be executed on the SharePoint server itself. Some of the benefits brought by the app model are:

* Upgrade to the newer version of the product is much easier.
* Security and stability improvements. Custom code is not running on the SharePoint server.
* Easier discovery and deployment.
* Centralized distribution and licensing via SharePoint Store.

However, the SharePoint environment and the infrastructure must be configured for SharePoint apps to work.

#### [Analyze if your farm has been configured according to the SharePoint Best practices with SPDocKit!](http://bit.ly/2US0Zna)

![Download SPDocKit](../../.gitbook/assets/spdockit_best_practices.png)

## Solution

Following service applications must be up and running in order for SharePoint farm to support the SharePoint app model:

* Subscription Settings service application
* App Management service application

Verify that the above mentioned service applications are running in the farm. To verify that service applications are started and configured properly, go to **Central Administration &gt; Application Management &gt; Manage service applications**.

## Additional information

Additional information can be found in the following articles:

* [Plan for apps for SharePoint 2013](https://technet.microsoft.com/en-us/library/fp161237.aspx)
* [Configure an environment for apps for SharePoint \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/fp161236.aspx)

