---
title: Property Databases
description: Property Databases best practices report by SPDocKit determines whether the SharePoint 2010 Search Service application has been properly configured.
author: Toni Frankola
date: 23/6/2017
---
### Issue Description
This check determines whether the SharePoint 2010 Search Service application has been properly configured.
### Explanation
The recommended number of property databases is no more than 10 per Search Service application. The property database stores the metadata for items in each index partition associated with it. An index partition can only be associated with one property store.
### Solution
Make sure you do not go over the limit; if you do, reduce the number of partitions to remain compliant.
### Additional information 
Additional information can be found in the following article:
* [SharePoint Server 2010 capacity management: Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787(v=office.14).aspx)