---
title: Number of Site Collections
description: >-
  Number of Site Collections best practices report by SPDocKit  determines
  whether the number of site collections in the farm is in accordance with
  Microsoft recommendations.
author: Matija Hanzic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Number of Site Collections

## Issue description

This check determines whether the number of site collections in the farm is in accordance with Microsoft recommendations.

## Explanation

SharePoint site collections contain at least one top-level site and can contain additional sites below the top level. Site collections are associated with parent web applications and are in those applications’ content databases. Site collections cannot be stored across multiple content databases.

The number of site collections that can be present in web applications or in the farm depends heavily on the capacity of server infrastructure, but Microsoft provides tested limits for each SharePoint version. For SharePoint 2013 and 2016, the maximum recommended number of site collections in a farm is **500,000** with a Personal Site template and an additional **250,000** with different templates. This means the theoretical limit of site collections in a SharePoint farm is **750,000**.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Keep the number of site collections below the recommended limit. If the number goes over, SharePoint’s performance can degrade.

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787%28v=office.15%29.aspx?f=255&MSPPError=-2147217396#SiteCollection)

