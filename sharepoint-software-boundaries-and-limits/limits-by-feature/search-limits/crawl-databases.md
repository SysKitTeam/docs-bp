---
title: Crawl Databases
description: >-
  Crawl Databases best practices report by SPDocKit determines whether the
  number of crawl databases within the Search Service Application is exceeding
  the supported limit.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Crawl Databases

## Issue description

This check determines whether the number of crawl databases within the Search Service Application is exceeding the supported limit.

## Explanation

In SharePoint Server, a crawl database contains data related to the location of content sources, crawl schedules, crawl history and other information specific to crawl operations for a specific Search Service Application. You can distribute the database load by adding crawl databases to different computers that are running SQL Server. The supported limit is 15 crawl databases per Search Service Application.

## Solution

Make sure that number of components within your search topology is within the supported boundaries. To check your search topology, go to the **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search Service Application**.

## Additional information

Additional information can be found in the following articles:

* [Add or remove a crawl database \(Search Server 2010\)](https://technet.microsoft.com/en-us/library/ff428106%28v=office.14%29.aspx)
* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc678868.aspx)

