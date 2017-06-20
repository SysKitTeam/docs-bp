---
Title: ULS Active
Author: Aleksandar Draskovic
Description: This article descibes how this check determines whether there is an issue with the Unified Logging Service (ULS) configuration
Date: 20/6/17
---
### Issue description

This check determines whether there is an issue with the Unified Logging Service (ULS) configuration. If the log file growth is not restricted, it may lead to issues.

### Explanation

SharePoint utilizes Unified Logging Service (ULS) logs to log events within SharePoint. These logs can be used to troubleshoot configuration and infrastructure issues and to find issues in the custom code by exposing debugging information.

The ULS logs the information to two locations: the Windows Application Log and the Trace Log. By default, the Windows Application Log will contain a much less information than the trace log. The Windows Application Log is also usually configured to overwrite the log file once it reaches a certain size.

On the other hand, the trace log is written to the text file on the file system, and it contains much more information than the Windows Application Log. Default location is C:Program FilesCommon FilesMicrosoft SharedWeb Server Extensions<HIVE number, e.g. 12, 14 or 15>/LOGS. Depending on the number of users accessing the system and the logging level configured, writing to the trace log can have a massive performance effect on the file system. In addition, the log files can take up a lot of disk space.

### Solution

When the ULS is working correctly, the diagnostic logging directory should be regularly updated with new data at least every 24 hours. If this is not the case, verify that the __SharePoint Tracing Service__ account is a member of the local __Performance Log Users__ group. You can use Services and Local Users and Groups MMC snap in. Also, check for the correct trace log location under __Central Administration__ > __Monitoring__ > __Reporting__ > __Configure diagnostic logging__. It is available under __Trace Log__ > __Path__.

### Additional information

Additional information can be found in the following article:

* [Configure diagnostic logging in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee748656.aspx)
