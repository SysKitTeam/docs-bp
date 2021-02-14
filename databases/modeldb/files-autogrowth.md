---
title: ModelDB Files Autogrowth
description: >-
  ModelDB Files Autogrowth best practices report by SPDocKit determines whether
  the model database is set up correctly.
author: Aleksandar Draskovic
date: 21/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# ModelDB Files Autogrowth

## Issue description

This check determines whether the **model** database is set up correctly.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as optimized as possible. The **model** database can be set up so as to reduce administrative overhead significantly.

The **model** database is used as the template for all databases created on an instance of SQL Server. The entire contents of the **model** database, including database options, are copied to the new database. Changing the settings on the **model** database will affect all databases created afterwards.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

This is general guidance on setting the **model** database autogrowth settings. The **model** database autogrowth should be in megabytes, and set to a value larger than the default. You should not use the default settings. These values should be set in accordance with your environment. Consider, for example, a scenario where content is gradually increased, say at 100MB increments, and autogrowth is set at 10MB. Then suddenly a new document management site requires a very large amount of data storage, perhaps with initial size of 50 GB. For this large addition, growth at 500 MB increments is more appropriate than 10MB increments.

## Additional information

Additional information can be found in the following articles:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Model Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/model-database)

