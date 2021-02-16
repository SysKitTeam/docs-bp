---
title: Web Analytics Services Started
author: Aleksandar Draskovic
description: >-
  Web Analytics Services Started best practices report by SPDocKit determines
  whether the Web Analytics Service Application is created and started in the
  farm.
date: 21/06/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Web Analytics Services Started

## Issue description

This check determines whether the Web Analytics Service Application is created and started in the farm.

## Explanation

Web Analytics Service Application instances should be configured and running. A properly configured Web Analytics Service Application allows you to collect, report, and analyze the usage and effectiveness of your SharePoint sites. By using these features, you can understand what users are doing and what information they want from a site.

Please note that the Analytics components moved from the standalone web application to the Search Service Application in SharePoint 2013.

[![Download SPDocKit](../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the Web Analytics Service Application is running in the farm. To verify that the service application is started and configured properly, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications**.

## Additional information

Additional information can be found in the following article:

* [Configure Web Analytics service application \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/gg266382%28v=office.14%29.aspx)

