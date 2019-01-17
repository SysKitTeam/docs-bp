---
title: Visio Web Drawing Recalculation Time-out
description: >-
  Visio Web Drawing Recalculation Time-out best practices report by SPDocKit
  determines whether the Visio Web Drawings recalculation time out exceeds the
  recommended limit.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Visio Web Drawing Recalculation Timeout

## Issue description

This check determines whether the Visio Web Drawings recalculation time out exceeds the recommended limit.

## Explanation

The Visio Graphics Service has a **Maximum Recalc Duration** setting that will adversely affect performance. If the **Maximum Recalc Duration** setting is larger than 60 seconds, it might result in large processor load of the Visio Graphics Service and SharePoint 2013, decreasing the expected performance of both.

A shorter duration increases performance by only allowing simple data-connected diagrams to be recalculated by the server, minimizing CPU and memory usage. A longer duration allows the recalculation of more complex data-connected diagrams while using more CPU cycles and memory. The default duration is 60 seconds.

## Solution

Please decrease the value of the Maximum Recalc Duration setting.

To do so, open **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Visio Graphics service application**. On the **Manage Visio Graphics Service** page, click **Global Settings**.

Ensure that the settings have the values that are listed in the following table. If they do not, type the value in the corresponding text box. Before performing administration tasks, verify that the user account that is performing the procedure is an administrator of the Visio Graphics Service service application.

| Setting | Value |
| :--- | :--- |
| Maximum Web Drawing Size | &lt;= 25 \(Megabytes\) |
| Minimum Cache Age | &gt;= 5 \(Minutes\) |
| Maximum Cache Age | &lt;= 60 \(Minutes\) |
| Maximum Recalc Duration | &lt;= 60 \(Seconds\) |
| Maximum Cache Size | &gt;= 1024 \(Megabytes\) |

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [The Visio Graphics Service has a maximum recalculation duration setting that will adversely impact performance \(SharePoint Server 2013\)](https://technet.microsoft.com/en-us/library/ff805064.aspx)

