---
description: Disk Allocation Size best practices report by SPDocKit determines whether the Block Size on the partitions holding data and log files is set correctly.
---

# Disk Allocation Size

## Issue description

This check determines whether the Block Size on the partitions holding data and log files is set correctly.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as optimized as possible. As SQL server performance depends heavily on the performance of the underlying I/O subsystem, storage design must be carefully planned.

Block Size should equal 64K and the calculation **Partition Offset / Block Size** should result in an integer value. In most cases this is a best practice for storage, but please refer to your storage documentation and check to see if this rule applies to your storage.

[![Download SPDocKit](../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

This is a general guidance on setting the block size on the partitions holding data and log files. Please refer to your storage documentation and check if the guidance applies. If so, please create and format the partitions by using the correct **Partition Offset** and **Block Size** settings.

## Additional information

Additional information can be found in the following articles:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Disk Partition Alignment Best Practices for SQL Server](https://technet.microsoft.com/en-us/library/dd758814%28v=sql.100%29.aspx)

