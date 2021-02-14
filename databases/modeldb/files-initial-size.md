---
title: ModelDB Files Initial Size
description: >-
  ModelDB Files Initial Size best practices report by SPDocKit determines
  whether the model database is set up correctly.
author: Aleksandar Draskovic
date: 21/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# ModelDB Files Initial Size

## Issue description

This check determines whether the **model** database is set up correctly.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important that SQL Server be as optimized as possible. The **model** database can be set up as to reduce administrative overhead significantly.

The **model** database is used as the template for all databases created on an instance of SQL Server. The entire contents of the **model** database, including database options, are copied to the new database. Changing the settings on the **model** database will affect all databases created afterwards.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

This is a general guidance on setting the **model** database initial size. The **model** database initial size should be set to a value larger than the default. These values should be set in accordance with your environment and expected amount of data. If your SharePoint farm will host a small amount of data, you could go with 500 MB or 1 GB as an initial size. This is merely an example and the exact value heavily depends on the expected amount of data, available disk space, \(expected\) number of content databases and other factors.

## Additional information

Additional information can be found in the following articles:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)
* [Model Database](https://docs.microsoft.com/en-us/sql/relational-databases/databases/model-database)

