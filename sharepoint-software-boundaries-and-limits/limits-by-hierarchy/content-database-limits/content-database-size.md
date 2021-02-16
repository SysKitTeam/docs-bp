---
title: Content Database Size
description: >-
  Content Database Size best practices report by SPDocKit indicates that some
  content databases are growing beyond the recommended boundaries.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Content Database Size

## Issue description

When the check reports an issue, it indicates that some content databases are growing beyond the recommended boundaries.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as fast and optimized as possible. The size of a content database can have an impact on the performance of the system.

As a general “rule of thumb”, **you should not allow content databases to grow beyond 200 GB**. If you are using Remote BLOB Storage \(RBS\), the total volume of remote BLOB storage and metadata in the content database should not exceed this limit.

Content databases of **up to 4 TB** are supported when the following requirements are met:

* Disk sub-system performance of 0.25 IOPS per GB. For optimal performance, 2 IOPS per GB is recommended.
* You must have developed plans for high availability, disaster recovery, future capacity, and performance testing.

You should also carefully consider the following factors:

* Requirements for backup and restore may not be met by the native SharePoint Server 2013 backup for content databases larger than 200 GB.
* The complexity of customizations and configurations on SharePoint Server 2013 may necessitate refactoring \(or splitting\) data into multiple content databases.
* Refactoring of site collections allows for scale-out of a SharePoint Server 2013 implementation across multiple content databases. This permits SharePoint Server 2013 implementations to scale indefinitely. This refactoring will be easier and faster when content databases are less than 200 GB.

Content databases with **no explicit size limit** for use in document archive scenarios are supported when the following requirements are met:

* SharePoint Server 2013 sites must be based on **Document Center** or **Records Center** site templates.
* Less than 5% of the content in the content database is accessed each month on average, and less than 1% of content is modified or written each month on average.
* Do not use alerts, workflows, link fix-ups, or item level security on any SharePoint Server 2013 objects in the content database.

Important factor to consider when scaling the environment and setting the limits are defined Service Level Agreements \(SLAs\), especially Recovery Point Objective \(RPO\) and Recovery Time Objective \(RTO\). Having large content databases means longer backup and restore times, which directly affects RPO and RTO.

[![Download SPDocKit](../../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Please check the size of the content databases. Consider creating new content databases and moving site collections to the new content databases.

To create a new content database, start **SharePoint 2013 Management Shell** and run the following cmdlet:

```bash
New-SPContentDatabase "<database name>" -DatabaseServer "<database server / alias>" -WebApplication http://sitename
```

To move a site collection to the new content database, start **SharePoint 2013 Management Shell** as an Administrator and run the following cmdlet:

```bash
Move-SPSite http://webapp/sites/sitename -DestinationDatabase ContentDb2
```

To achieve the same result in Windows SharePoint Services 3.0 and SharePoint Server 2007, follow the procedure described in the following articles:

* [Addcontentdb: Stsadm operation \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc263422%28v=office.12%29.aspx)
* [Move site collections to a new database \(split a content database\) \(Windows SharePoint Services 3.0\)](https://technet.microsoft.com/en-us/library/cc825327%28v=office.12%29.aspx)

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [New-SPContentDatabase](https://technet.microsoft.com/en-us/library/ff607572.aspx)
* [Move-SPSite](https://technet.microsoft.com/en-us/library/ff607915.aspx)
* [Move site collections between databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc825328.aspx)
* [Addcontentdb: Stsadm operation \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc263422%28v=office.12%29.aspx)
* [Move site collections to a new database \(split a content database\) \(Windows SharePoint Services 3.0\)](https://technet.microsoft.com/en-us/library/cc825327%28v=office.12%29.aspx)
* [SQLIO, PowerShell and storage performance: measuring IOPs, throughput and latency for both local disks and SMB file shares](https://blogs.technet.microsoft.com/josebda/2013/03/28/sqlio-powershell-and-storage-performance-measuring-iops-throughput-and-latency-for-both-local-disks-and-smb-file-shares/)

