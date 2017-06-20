---
Title: Diagnostic Log Path
Author: Aleksandar Draskovic
Description: This article explains how this check determines whether the SharePoint Log Files are stored on the primary drive.
Date: 20/6/17
---
### Issue description

This check determines whether the SharePoint Log Files are stored on the primary drive.

### Explanation

SharePoint utilizes Unified Logging Service (ULS) logs to log events within SharePoint. These logs can be used to troubleshoot configuration and infrastructure issues and to find issues in the custom code by exposing debugging information.

ULS logs the information to two locations: Windows Application Log and Trace Log. By default, a Windows Application Log will contain much less information than a trace log. The Windows Application Log is also usually configured in such a manner that it overwrites the log file once it reaches a certain size.

A trace log, on the other hand, is written to a text file on the file system and contains much more information than the Windows Application Log. Default location is C:Program FilesCommon FilesMicrosoft SharedWeb Server Extensions<HIVE number, e.g. 12, 14 or 15>/LOGS. Depending on the number of users accessing the system and the logging level configured, writing to trace log can have a massive performance impact on the file system. Therefore, it is highly recommended that trace logs be stored on a dedicated drive.

### Solution

Make sure that ULS trace log files are not stored on the same drive as the primary (system) drive or the paging file. To do so, go to the __Central Administration__ > __Monitoring__ > __Reporting__ > __Configure diagnostic logging__. You can use this page to configure logging level and trace log settings. Specify a new location under __Trace Log__ > __Path__ and click __OK__.

Please note that this is a farm-wide setting. This means that the path you specify here must be physically available and accessible to each SharePoint server in your farm.

### Additional information

Additional information can be found in the following article:

* [Configure diagnostic logging in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee748656.aspx)
