---
title: Crawl Rules
description: Crawl Rules best practices report by SPDocKit determines whether the SharePoint 2010 Search Service application has been properly configured.
author: Toni Frankola
date: 23/6/2017
---
### Issue description
This check determines whether the SharePoint 2010 Search Service application has been properly configured.
### Explanation
The recommended limit is 100 crawl rules per application. Although this limit can be exceeded, the display of rules in Central Administration could be seriously degraded.
### Solution
Make sure you do not go over the limit; if you do, reduce the number of rules to remain compliant.
### Additional information 
Additional information can be found in the following article:
* [SharePoint Server 2010 capacity management: Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787(v=office.14).aspx)