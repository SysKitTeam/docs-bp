---
title: Max Degree Of Parallelism
description: >-
  Max Degree Of Parallelism best practices report by SPDocKit determines whether
  the Maximum Degree of Parallelism (MAXDOP) is set to a supported value.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Max Degree of Parallelism

## Issue description

This check determines whether the Maximum Degree of Parallelism \(MAXDOP\) is set to a supported value. If the MAXDOP value has not been set to 1 on the SQL server instance on which you’re attempting to host your SharePoint 2013 databases, you will not be able to create databases on the instance, and you will get the following error message:

> _New-SPConfigurationDatabase: This SQL Server instance does not have the required “max degree of parallelism” setting of 1._ _Database provisioning operations will continue to fail if “max degree of parallelism” is not set 1 or the current account does not havepermissions to change the setting. See documentation for details on manually changing the setting._

## Explanation

Maximum Degree of Parallelism \(MAXDOP\) is a SQL server instance level setting that defines the number of processors used for the execution of a query in a parallel plan. It defines the computing and thread resources used for query plan operators that perform the work in parallel. Although many of the solutions using SQL server as a database backend may profit from the parallelism, SharePoint is one of the solutions that works best when the parallel execution is turned off \(MAXDOP=1\). For SharePoint 2007 and 2010, it is the recommended setting; however, for SharePoint 2013, it is a hard requirement.

## Solution

Set the MAXDOP on the SQL Server instance to 1. This will disable the parallel execution on the instance. To do so, start the SQL Server Management Studio and execute the following T-SQL query on the affected SQL server instance:

```sql
USE master; 
GO 
EXEC sp_configure 'show advanced options', 1; 
GO 
RECONFIGURE WITH OVERRIDE; 
GO 
EXEC sp_configure 'max degree of parallelism', 8; 
GO 
RECONFIGURE WITH OVERRIDE; 
GO
```

To configure the max degree of parallelism option by using the SQL Server Management Studio UI, do the following: 

1. In **Object Explorer**, right-click a server and select **Properties**. 
2. Click the **Advanced node**. 
3. In the **Max Degree of Parallelism** box, select the maximum number of processors to use in parallel plan execution.

## Additional information

Additional information can be found in the TechNet article:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)

