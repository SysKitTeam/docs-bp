---
description: Database Files best practices report by SPDocKit determines whether the database and transaction log files on the SQL Server are configured properly.
---

# Database Files

## Issue description

This check determines whether the database and transaction log files on the SQL Server are configured properly. Storing all files in the same location and on the system drive can lead to severe performance issues in the SQL Server.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. SQL Server stores data over various file types:

* **Primary data files \(.mdf\)** – The primary data file is the starting point of the database; it points to the other files in the database. Every database has one primary data file. Primary data files are read intensive.
* **Secondary data files \(.ndf\)** – Secondary data files make up all the data files other than the primary data file. Some databases may not have any secondary data files, while others have several secondary data files. Secondary data files are read intensive.
* **\(Transaction\) Log files \(.ldf\)** – Log files hold all the log information used to recover the database. They are write intensive. SQL Server will first write the data to the transaction log file and then merge the changes later with primary \(or secondary\) data files.

In addition to the configuration and user data, we often mention tempdb database as an important factor for the performance. Ideally, you should place the tempdb database, content databases, usage database, search databases, and SQL Server 2008 R2 with SP1 and SQL Server 2012 transaction logs on separate physical hard disks. In addition, no database or transaction log files should be stored on the system drive because this can lead to negative performance in the system.

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Check the database file distribution. To do so, open the **SQL Server Manager** on the database server and check properties for every database. The page **File** in the **Properties** window contains the information about physical location of the database files. In case you need to move the database files to another drive or server, please read the articles referenced in the **Additional information** section.

## Additional information

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Storage and SQL Server capacity planning and configuration \(SharePoint Server 2013\)](https://technet.microsoft.com/en-us/library/a96075c6-d315-40a8-a739-49b91c61978f#Section6_5)
* [How to: View or Change the Default Locations for Data and Log Files \(SQL Server Management Studio\)](https://technet.microsoft.com/en-us/library/dd206993%28v=sql.105%29.aspx)
* [Move all databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc512725.aspx)
* [Move System Databases](https://docs.microsoft.com/en-us/sql/relational-databases/databases/move-system-databases)

