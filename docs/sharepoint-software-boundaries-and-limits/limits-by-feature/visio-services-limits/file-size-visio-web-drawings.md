---
description: >-
  File Size of Visio Web Drawings best practices report by SPDocKit determines
  whether the maximum file size of Visio Web Drawings exceeds the recommended
  limit.
---

# File Size of Visio Web Drawings – Max Web Drawing Size

## Issue description

This check determines whether the maximum file size of Visio Web Drawings exceeds the recommended limit.

## Explanation

The Visio Graphics Service has a Maximum Web Drawing Size setting that will adversely affect performance. If the Maximum Web Drawing Size setting is larger than 25 MB, it might result in increased bandwidth usage, decreasing the expected performance of the Visio Graphics Service.

A web drawing size increases performance by downloading smaller images, which minimizes bandwidth usage.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Please decrease the value of the Maximum Web Drawing Size setting.

To do so, open **Central Administration** > **Application Management** > **Manage Service Applications** > **Visio Graphics service application**. On the **Manage the Visio Graphics Service** page, click **Global Settings**.

Ensure that the settings have the values that are listed in the following table. If they do not, type the value in the corresponding text box. Before performing administration tasks, verify that the user account that is performing the procedure is an administrator of the Visio Graphics Service service application.

| Setting                  | Value               |
| ------------------------ | ------------------- |
| Maximum Web Drawing Size | &lt;= 25 (Megabytes)   |
| Minimum Cache Age        | &gt;=5 (Minutes)       |
| Maximum Cache Age        | &lt;=60 (Minutes)      |
| MaximumRecalc Duration   | &lt;= 60 (Seconds)     |
| Maximum Cache Size       | &gt;= 1024 (Megabytes) |

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
* [The Visio Graphics Service has a maximum Web Drawing Size setting that will adversely impact performance (SharePoint Server 2013)](https://technet.microsoft.com/en-us/library/ff805074.aspx)
