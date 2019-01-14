---
title: ModelDB Recovery Model
description: >-
  ModelDB Recovery Model best practices report by SPDocKit determines whether
  the model database is set up correctly.
author: Aleksandar Draskovic
date: 21/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# recovery-model

## Issue description

This check determines whether the **model** database is set up correctly.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as optimized as possible. The model database can be set up in such a manner to reduce administration overhead significantly.

The model database is used as the template for all databases created on an instance of SQL Server. The entire contents of the model database, including database options, are copied to the new database. Changing the settings on the model database will affect all databases created afterwards.

There are three database recovery models in SQL Server:

* **Simple** – No log backups. The following operations are not supported, as they require transaction log backups: Log shipping, AlwaysOn or Database mirroring, Media recovery without data loss, Point-in-time restores.
* **Full** – Requires log backups. No work is lost because of a lost or damaged data file. Can recover to an arbitrary point in time \(for example, prior to application or user error\).
* **Bulk logged** – Requires log backups. This is an adjunct of the full recovery model that permits high-performance bulk copy operations. If the log is damaged or bulk-logged operations have occurred since the most recent log backup, changes since that last backup must be redone. Can recover to the end of any backup. Point-in-time recovery is not supported.

Because the **model** is small and rarely changes, backing up the log is unnecessary. However, all new databases will use settings from the **model database**. Therefore, it is advisable to set the recovery model on the **model** database to **Full** to reduce the administration overhead.

## Solution

Set recovery model on the model database to **Full**. To do so, start SQL Server Management Studio and connect to the SQL server instance which hosts your content databases. In the **Object Explorer** tree, navigate to **Databases** &gt; **System Databases**, select the **model** database, right-click on it and click **Properties**. In the **Database Properties** window, select **Options** page. Click the **Recovery model** drop down box and select **Full**. Click **OK** to exit and save the changes.

## Additional information

Additional information can be found in the following articles:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Model Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/model-database)
* [Recovery Models \(SQL Server\)](https://docs.microsoft.com/en-us/sql/relational-databases/backup-restore/recovery-models-sql-server)

