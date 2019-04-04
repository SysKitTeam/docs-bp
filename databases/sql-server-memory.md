---
title: SQL Server Memory
description: >-
  SQL Server Memory best practices report by SPDocKit determines whether the min
  server memory and max server memory settings have been changed in your SQL
  Server configuration options.
author: Toni Frankola
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# SQL Server Memory

## Issue description

This check determines whether the **min server memory** and **max server memory** settings have been changed in your SQL Server configuration options.

## Explanation

The **min server memory** configuration option can be used to ensure that SQL Server does not release memory below the configured minimum server memory once that threshold is reached. This configuration option can be set to a specific value based on the size and activity of your SQL Server. If you choose to set this value, set it to a reasonable value to ensure that the operating system does not request too much memory from SQL Server, which can affect SQL Server’s performance.

The **max server memory** configuration option can be used to specify the maximum amount of memory SQL Server can allocate when it starts and while it runs. This configuration option can be set to a specific value if you know multiple applications are running at the same time as SQL Server and you want to guarantee that these applications have sufficient memory to run. You should also reserve at least 1 GB of RAM for the OS. If you are running other SQL Server components, such as SQL Server Integration Services, you should also take that into account and set a lower max server memory limit.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

To configure the **min server memory** and **max server memory** settings using the SQL Server Management Studio, take the following steps: 

1. In **Object Explorer**, right-click a server and select **Properties**. 
2. Click the **Memory node**.
3. Under **Server Memory Options**, enter the amount you want to use for **Minimum** server memory and **Maximum** server memory.

## Additional information

Additional information can be found in the [Optimizing Server Performance Using Memory Configuration Options](https://technet.microsoft.com/en-us/library/ms177455%28v=sql.105%29.aspx) TechNet article.

