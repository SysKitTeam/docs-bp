---
description: Enable Usage and Health Data Collection best practices report by SPDocKit determines whether the SharePoint Usage and Health Log data collection is enabled.
---

# Enable Usage and Health Data Collection

## Issue description

This check determines whether the SharePoint Usage and Health Log data collection is enabled. This can provide an insight into the functioning of the system itself; however, it can also introduce additional load to the system and fill the hard drive on which the log files are stored.

## Explanation

SharePoint writes usage and health data to the logging folder and logging database. Usage and Health logs can be used to trace various events, like File I/O, SQL I/O usage, Page Requests, SQL Latency usage and many more. Default location of the logging folder is C:/Program Files/Common Files/Microsoft Shared/Web Server Extensions//LOGS. Depending on the number of users accessing the system and the logging events configured, writing to a log can have a massive impact on the file system’s performance.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that only required events are selected for the data collection. To do so, go to the **Central Administration** &gt; **Monitoring** &gt; **Reporting** &gt; **Configure usage and health data collection**. You can use this page to configure logging level and log settings. In the case you want to turn off the Usage and **Health data collection**, under Health Data Collection clear the check box near **Enable Health Data Collection** and click **OK**.

## Additional information

Additional information can be found in the following article:

* [Configure usage and health data collection in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee663480.aspx)

