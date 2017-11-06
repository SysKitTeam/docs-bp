---
title: Restrict Trace Log Disk Space Usage
author: Aleksandar Draskovic
description: Restrict Trace Log Disk Space Usage best practices report by SPDocKit determines whether the maximum amount of disk space allocated for the SharePoint log files is defined.
date: 20/6/17
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description

This check determines whether the maximum amount of disk space allocated for the SharePoint log files is defined. SharePoint log files could fill the drive containing ULS log files.

### Explanation

SharePoint utilizes Unified Logging Service (ULS) logs to log events within SharePoint. These logs can be used to troubleshoot configuration and infrastructure issues, and to find issues in the custom code by exposing debugging information.

ULS logs the information to two locations: Windows Application Log and Trace Log. By default, a Windows Application Log will contain much less information than a trace log. Windows Application Log is also usually configured in such manner that it overwrites the log file once it reaches a certain size.

A trace log, on the other hand, is written to the text file on the file system and contains much more information than the Windows Application Log. Default location is C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions/<HIVE number, e.g. 12, 14 or 15>/LOGS. Depending on the number of users accessing the system and the logging level configured, writing to trace log can have a massive impact on the file system’s performance. Also, log files can consume a lot of disk space.

### Solution

Make sure that ULS trace log files are restricted in growth. To do so, go to the __Central Administration__ > __Monitoring__ > __Reporting__ > __Configure diagnostic logging__. You can use this page to configure logging level and trace log settings. Activate the check box and specify a new value under __Trace Log__ > __Restrict Trace Log disk space__ usage and click __OK__.

Please note that this is a farm wide setting. This means that the path you specify here must be physically available and accessible on each SharePoint server in farm and that the drives holding log files on all servers have enough free space to support the specified configuration.

### Additional information

Additional information can be found in the following article:

* [Configure diagnostic logging in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee748656.aspx)
