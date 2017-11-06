---
title: Site Collections
description: Site Collections best practices report by SPDocKit determines whether the number of site collections per Web application is growing beyond the recommended boundaries
author: Aleksandar Draskovic 
date: 23/6/2017
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description
This check determines whether the number of site collections per Web application is growing beyond the recommended boundaries.

### Explanation
A site collection can be seen as the smallest independent container within the SharePoint. It contains one top site, document libraries, lists, and other items stored within SharePoint. It can contain one or more subsites. A site collection is stored within one content database and can’t be split over multiple content databases. It is an isolated unit, containing its own structure and permission matrix.

The maximum recommended number of site collections per farm is 500,000 Personal Sites plus 250,000 for all other site templates. The sites can all reside on one web application, or can be distributed across multiple web applications.

Note that this limit is affected by other factors, especially by the content database limitations. Proper planning must be done to support such large number of site collections, such as distributing site collections over different content databases and even database servers.
### Solution
This is a limitation at the farm level, so if you need to provide more site collections than specified by this recommendation, consider deploying additional SharePoint farms and using a centralized resource farm for shared services. The design will depend heavily on the use of processes for which SharePoint is used, and custom solutions, if any.
### Additional information 
Additional information can be found in the following article:
* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)