---
title: Crawl Components
description: Crawl Components best practices report by SPDocKit determines whether the SharePoint 2010 Search Service Application has been properly configured.  
author: Toni Frankola
date: 23/6/2017
---
### Issue Description
This check determines whether the SharePoint 2010 Search Service Application has been properly configured.  
### Explanation
The recommended limit is 16 total crawl components per application, with two per crawl database and two per server, assuming the server has at least eight processors (cores).
### Solution
Make sure you do not go over the limit; if you do, reduce the number of components to remain compliant.
### Additional information 
Additional information can be found in the following article:
* [SharePoint Server 2010 capacity management: Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787(v=office.14).aspx)