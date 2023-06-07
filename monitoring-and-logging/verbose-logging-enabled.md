---
description: Verbose Logging Enabled best practices report by SPDocKit determines whether the SharePoint logging level is set to verbose.
---

# Verbose Logging Enabled

## Issue description

This check determines whether the SharePoint logging level is set to verbose. Turning on Verbose Logging for one or more event categories can result in large log files, and the increased disk I/O could have a negative impact on the performance.

## Explanation

SharePoint utilizes Unified Logging Service \(ULS\) logs to log events within SharePoint. These logs can be used for troubleshooting configuration and infrastructure issues, and to find issues in the custom code by exposing debugging information.

ULS logs the information to two locations: Windows Application Log and Trace Log. By default, Windows Application Log will contain much less information than a trace log. Windows Application Log is also usually configured in such a manner that it overwrites the log file once it reaches a certain size.

A trace log, on the other hand, is written to the text file on the file system and contains much more information than the Windows Application Log. Default location is C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions//LOGS. Depending on the number of users accessing the system and the logging level configured, writing to a trace log can have a massive impact on the file system’s performance.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that ULS trace categories are configured to appropriate logging levels. To do so, go to the **Central Administration** &gt; **Monitoring** &gt; **Reporting** &gt; **Configure diagnostic logging**. You can use this page to configure logging level and trace log settings. If you are not debugging custom code or troubleshooting a specific issue, use Event Throttling to turn off the verbose logging for the affected categories.

To set all categories back to default levels, at the SharePoint Management shell \(PowerShell\) command prompt, type the following command, and then press ENTER:

```bash
Clear-SPLogLevel
```

## Additional information

Additional information can be found in the following article:

* [Configure diagnostic logging in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee748656.aspx)

