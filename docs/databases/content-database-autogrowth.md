---
description: Content Database Autogrowth best practices report by SPDocKit determines whether the content databases are configured to ensure the best performance of the system.
---

# Content Database Autogrowth

## Issue description

This check determines whether the content databases are configured to ensure the best performance of the system.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as fast and optimized as possible. The size and the configuration of a Content Database can have an impact to the performance of the system.

As a general “rule of thumb”, **you should not allow content databases to grow beyond 200 GB**. If you are using Remote BLOB Storage \(RBS\), the total volume of remote BLOB storage and metadata in the content database should not exceed this limit. To support Content Databases of **up to 4 TB**, disk sub-system performance of 0.25 IOPS per GB is required. 2 IOPS per GB is recommended for optimal performance. You also have to develop plans for high availability, disaster recovery, future capacity and performance testing.

Content databases with **no explicit size limit** are also supported but under strict requirements. Site templates used to create site collections in a content database bigger than 4 TB must be either **Document Center** or **Records Center**. Less than 5% of the content in the content database is accessed each month on average, and less than 1% of content is modified or written each month on average. Alerts, workflows or item-level security should also not be used.

In addition, you should proactively monitor your databases and tweak some settings when required. It is advisable to pre-size content database files, if possible to the expected size. This way you can avoid the overhead of auto-growth which can take some resources and have negative performance impacts. There is no universal recipe for the values you can use for the initial size and auto-growth settings as this will heavily depend on your environment and usage.

Important factor to consider when scaling the environment and setting the limits are defined Service Level Agreements \(SLAs\), especially Recovery Point Objective \(RPO\) and Recovery Time Objective \(RTO\). Having large content databases means longer backup and restore times, which directly affect RPO and RTO.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

These are general guidance on setting the content database’s initial size. The content database’s initial size should be set to a value larger than the default. These values should be set in accordance with your environment and expected amount of data. Considering your SharePoint farm will host a small amount of data, you could go with 500 MB or 1 GB as the initial size. This is merely an example, and the exact value depends heavily on the expected amount of data, available disk space, \(expected\) number of content databases, and other factors. Monitor your content database on a regular basis and change those settings if required.

To set the database initial size and auto-growth size, start **SQL Server Management Studio** and connect to the SQL server instance which hosts your content databases. In the **Object Explorer** tree, select a content database and right-click on it and click **Properties**. In the **Database Properties** window, select **Files** page.

On this page you can set initial size and auto-growth size for both MDF \(data\) and LDF \(transaction log\) files. For auto-growth, avoid setting it to a percentage number. For example, if you set auto-growth to 10% on a content database of 100 GB size, when auto growth operation occurs, SQL server is going to extend the file by allocating additional 10 GB which may take a bit and slow down the system during the operation. If you set it to 1% and you have a content database of 1 GB, SQL Server will perform the auto-growth operation every 10 MB. If you upload a 50 MB file to the SharePoint, auto-growth will occur 4-5 times during one single upload which is also sub-optimal. Therefore, set auto-growth to a fixed number of megabytes instead of percentage.

## Additional information

Additional information can be found in the following article:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)

