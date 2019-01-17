---
title: RAM
description: >-
  RAM Best Practices Report by SPDocKit determines whether all servers are
  having enough available system resources.
author: Aleksandar Draskovic
date: 9/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# RAM

## Issue description

This check determines whether all servers are having enough available system resources.

## Explanation

Minimal memory requirements for the SharePoint servers are:

| Version | Description | RAM |
| :--- | :---: | ---: |
| SharePoint 2013 | Single server with a built-in database or single server that uses SQL Server. Development or evaluation installation of SharePoint Server 2013 or SharePoint Foundation 2013 with the minimum recommended services for development environments. | 8 GB |
| SharePoint 2013 | Single server with a built-in database or single server that uses SQL Server. Development or evaluation installation of SharePoint Server 2013 running all available services. | 24 GB |
| SharePoint 2013 | Web server or application server in a three-tier farm. Pilot, user acceptance test, or production deployment of SharePoint Server 2013 or SharePoint Foundation 2013. | 12 GB |
| SharePoint 2010 | Web servers, application servers and single servers installations | 8 GB |
| SharePoint 2007 | Frontend Web Server    2 GB Application Server | 4 GB |

## Solution

Please check the amount of RAM available to affected SharePoint servers. Add more RAM if required.

## Additional information

Additional information can be found in the following articles:

* [Determine hardware and software requirements \(Office SharePoint Server\)](https://technet.microsoft.com/en-US/library/cc262485%28v=office.12%29.aspx)
* [Hardware and software requirements \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/cc262485%28office.14%29.aspx)
* [Hardware and software requirements for SharePoint 2013](https://technet.microsoft.com/en-US/library/cc262485.aspx)

