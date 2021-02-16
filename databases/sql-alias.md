---
title: SQL Alias
description: >-
  SQL Alias best practices report by SPDocKit determines whether the SharePoint
  servers are configured to use SQL aliases. If not, it can introduce some
  manageability issues.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# SQL Alias

## Issue description

This check determines whether the SharePoint servers are configured to use SQL aliases. From SPDocKit version 7.3 onwards, this report checks if your service applications and content databases are using a SQL alias in their connection strings.  
If your SQL alias is not configured correctly, it can introduce manageability issues.

## Explanation

An alias is an alternate name that can be used to make a connection. The alias encapsulates the required elements of a connection string and exposes them with a name chosen by the user. Aliases can be used with any client application. By creating server aliases, your client computer can connect to multiple servers using different network protocols, without having to specify the protocol and connection details for each one.

Aliases can be very useful for moving databases between different SQL servers and ease scaling out the SharePoint environment. We recommend that you group the databases based on the usage and purpose and define the aliases based on that. The following table can be used as an example of database distribution and grouping:

| Env. | SQL Alias | Host | Port | Instance | description |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Prod | DB\_P\_Config\_P | sql01.contoso.com | TCP/1433 | default | SharePointConfig \(principal\) |
| Prod | DB\_P\_Service\_P | sql01.contoso.com | TCP/1433 | default | SharePoint Service App databases \(principal\) |
| Prod | DB\_P\_Usage\_P | sql01.contoso.com | TCP/1433 | default | SharePointUsagedatabase \(principal\) |
| Prod | DB\_P\_Search\_P | sql01.contoso.com | TCP/1433 | default | SharePoint Search Databases \(principal\) |
| Prod | DB\_P\_Content\_P | sql01.contoso.com | TCP/1433 | default | SharePoint Contentdatabases \(principal\) |
| Prod | DB\_P\_Config\_M | sql02.contoso.com | TCP/1433 | default | SharePointConfig \(mirror\) |
| Prod | DB\_P\_Service\_M | sql02.contoso.com | TCP/1433 | default | SharePoint Service App databases \(mirror\) |
| Prod | DB\_P\_Usage\_M | sql02.contoso.com | TCP/1433 | default | SharePointUsagedatabase \(mirror\) |
| Prod | DB\_P\_Search\_M | sql02.contoso.com | TCP/1433 | default | SharePoint Search Databases \(mirror\) |
| Prod | DB\_P\_Content\_M | sql02.contoso.com | TCP/1433 | default | SharePoint Contentdatabases \(mirror\) |

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

There is no supported way to change connection parameters for some databases, like SharePoint Configuration Database. Therefore, configuring SQL Server aliases before deploying SharePoint is very important. To create a SQL alias, use **SQL Server Client Network Utility** by clicking **Start** &gt; **Run** &gt; **CliConfg.exe**.

## Additional information

Additional information can be found in the TechNet article:

* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)

