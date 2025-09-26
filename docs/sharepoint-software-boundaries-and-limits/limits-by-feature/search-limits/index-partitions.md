---
description: Index Partitions best practices report by SPDocKit determines whether the SharePoint 2010 Search Service application has been properly configured.
---

# Index Partitions

## Issue description

This check determines whether the SharePoint 2010 Search Service application has been properly configured.

## Explanation

The recommended number of index partitions is less than 20. Index partition holds part of the main index. Having multiple partitions on dedicated disk drives is recommended because it reduces the load on an individual disk. However, having more than 20 partitions could cause additional strain on your CPU and memory during search and indexing.

[![Download SPDocKit](../../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure you do not go over the limit; if you do, reduce the number of partitions to remain compliant.

## Additional information

Additional information can be found in the following article:

* [SharePoint Server 2010 capacity management: Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787%28v=office.14%29.aspx)

