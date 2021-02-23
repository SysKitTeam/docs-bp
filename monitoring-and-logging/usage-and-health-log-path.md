---
description: Usage and Health Log Path best practices report by SPDocKit determines whether the SharePoint Usage and Health Log Files are stored on the primary drive.
---

# Usage and Health Log Path

## Issue description

This check determines whether the SharePoint Usage and Health Log Files are stored on the primary drive.

## Explanation

SharePoint writes usage and health data to the logging folder and logging database. Usage and Health logs can be used to trace various events, like File I/O, SQL I/O usage, Page Requests, SQL Latency usage and many more. Default location of the logging folder is C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions//LOGS. Depending on the number of users accessing the system and the logging events configured, writing to a log can have a massive impact on the file system’s performance. Therefore, it is highly recommended that trace logs be stored on a dedicated drive.

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that the trace log files are not stored on the same drive as the primary \(system\) drive or the paging file. To do so, go to the **Central Administration** &gt; **Monitoring** &gt; **Reporting** &gt; **Configure usage and health data collection**. You can use this page to configure logging level and trace log settings. Specify a new location under **Usage Data Collection Settings** &gt; **Log file location** and click **OK**.

Please note that this is a farm wide setting. This means that the path you specify here must be physically available and accessible on each SharePoint server in your farm.

## Additional information

Additional information can be found in the following article:

* [Configure usage and health data collection in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee663480.aspx)

