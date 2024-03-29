---
description: TempDB Files best practices report by SPDocKit determines whether the TempDB database is configured properly and according to the best practices.
---

# TempDB Files

## Issue description

This check determines whether the TempDB database files are located on a separate drive from the SQL Server binaries, database data, and log files.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. SQL Server stores data over the various file types. The TempDB system database is a global resource that is available to all users connected to the instance of SQL Server. It is used to hold the following:

* Temporary user objects that are explicitly created, such as global or local temporary tables, temporary stored procedures, table variables, or cursors.
* Internal objects that are created by the SQL Server Database Engine, for example, work tables to store intermediate results for spools or sorting.
* Row versions that are generated by data modification transactions in a database that uses read-committed row versioning isolation or snapshot isolation transactions.
* Row versions that are generated by data modification transactions for features, such as: online index operations, Multiple Active Result Sets \(MARS\), and AFTER triggers.

Testing and user data show that insufficient disk I/O for TempDB can significantly impede overall farm performance.

To avoid this issue, allocate dedicated disks for the drive that stores TempDB data files. For best performance, use a RAID 10 array for the drive that stores TempDB data files.

If data and log files must share disks due to space limitations, put files that have different usage patterns on the same disk to minimize concurrent access requests.

Each TempDB file should be on a separate drive from the SQL Server binaries, database data, and log files - not just for performance reasons, but also for management reasons. If the TempDB file is located on the same volume as your database and log files, and the drive runs out of space, you could have difficulties restarting the SQL server. If the TempDB file is on its own volume, and it runs out of space, restarting the SQL server instance brings you quickly back on track.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check the database file distribution. To do so, open the **SQL Server Manager** on the database server and check properties for every database. The page **Files** in the **Properties** window contains the information about physical location of the database files.

In case you need to move the database files to another drive or server, please read the articles referenced in the **Additional information** section.

## Additional information

Additional information can be found in the following articles:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Storage and SQL Server capacity planning and configuration \(SharePoint Server 2013\)](https://technet.microsoft.com/en-us/library/a96075c6-d315-40a8-a739-49b91c61978f#Section6_5)
* [Move System Databases](https://docs.microsoft.com/en-us/sql/relational-databases/databases/move-system-databases)

