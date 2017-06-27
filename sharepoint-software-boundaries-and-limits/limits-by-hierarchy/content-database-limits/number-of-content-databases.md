---
title: Number of Content Databases
description: Number of Content Databases best practices report by SPDocKit determines whether the number of content databases in the farm is in accordance with Microsoft recommendations.
author: Matija Hanzic
date: 23/6/2017
---
### Issue Description
This check determines whether the number of content databases in the farm is in accordance with Microsoft recommendations.
### Explanation
Content databases are where SharePoint stores site collections, sites and related content. Each content database is associated with the parent web application. The supported number of content databases per farm depends on the SharePoint version. SharePoint 2010 supports up to 300 content databases, while SharePoint 2013 and 2016 support up to 500.

As the number of databases approaches the maximum that can be supported, administrative actions such as creating site collections will experience a decrease in performance. When the number of databases reaches the limit, the recommendation is to use Windows PowerShell to manage web applications because the management interface might become slow and unresponsive.

### Solution
Keep the number of content databases below the recommended limit. If the number goes over, SharePoint’s performance can degrade.
### Additional information 
Additional information can be found in the following article:
* [Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787%28v=office.15%29.aspx?f=255&MSPPError=-2147217396#ContentDB)
