---
title: ULS Active
author: Aleksandar Draskovic
description: >-
  ULS Active best practices report by SPDocKit determines whether there is an
  issue with the Unified Logging Service (ULS) configuration.
date: 20/6/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# ULS Active

## Issue description

This check determines whether there is an issue with the Unified Logging Service \(ULS\) configuration. If the log file growth is not restricted, it may lead to issues.

## Explanation

SharePoint utilizes Unified Logging Service \(ULS\) logs to log events within SharePoint. These logs can be used to troubleshoot configuration and infrastructure issues and to find issues in the custom code by exposing debugging information.

The ULS logs the information to two locations: the Windows Application Log and the Trace Log. By default, the Windows Application Log will contain a much less information than the trace log. The Windows Application Log is also usually configured to overwrite the log file once it reaches a certain size.

On the other hand, the trace log is written to the text file on the file system, and it contains much more information than the Windows Application Log. Default location is C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions//LOGS. Depending on the number of users accessing the system and the logging level configured, writing to the trace log can have a massive performance effect on the file system. In addition, the log files can take up a lot of disk space.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

When the ULS is working correctly, the diagnostic logging directory should be regularly updated with new data at least every 24 hours. If this is not the case, verify that the **SharePoint Tracing Service** account is a member of the local **Performance Log Users** group. You can use Services and Local Users and Groups MMC snap in. Also, check for the correct trace log location under **Central Administration** &gt; **Monitoring** &gt; **Reporting** &gt; **Configure diagnostic logging**. It is available under **Trace Log** &gt; **Path**.

## Additional information

Additional information can be found in the following article:

* [Configure diagnostic logging in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee748656.aspx)

