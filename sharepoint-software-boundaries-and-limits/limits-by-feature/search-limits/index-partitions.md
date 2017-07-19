---
title: Index Partitions
description: Index Partitions best practices report by SPDocKit determines whether the SharePoint 2010 Search Service application has been properly configured
author: Toni Frankola
date: 23/6/2017
---
### Issue description
This check determines whether the SharePoint 2010 Search Service application has been properly configured.
### Explanation
The recommended number of index partitions is less than 20. Index partition holds part of the main index. Having multiple partitions on dedicated disk drives is recommended because it reduces the load on an individual disk. However, having more than 20 partitions could cause additional strain on your CPU and memory during search and indexing.
### Solution
Make sure you do not go over the limit; if you do, reduce the number of partitions to remain compliant.
### Additional information 
Additional information can be found in the following article:

* <a href="https://technet.microsoft.com/en-us/library/cc262787(v=office.14).aspx">SharePoint Server 2010 capacity management: Software boundaries and limits</a>