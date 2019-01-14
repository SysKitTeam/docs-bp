---
title: Conversion Job Size
description: >-
  Conversion Job Size best practices report by SPDocKit determines whether the
  Word Automation Services Conversion Job Size exceeds the recommended limit.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# conversion-job-size

## Issue description

This check determines whether the Word Automation Services Conversion Job Size exceeds the recommended limit.

## Explanation

Word Automation Services is a SharePoint server service application that enables unattended, server-side conversions of documents supported by the Microsoft Word client application. The throughput of Word Automation Services is limited by the system resources on the application server. If the values for the conversion processes and the conversion throughput are set too high, the overall health of the application server can degrade, and other services on the computer can be affected. In addition, Word Automation Services can experience decreased throughput and more conversion failures.

A large number of conversion items will increase both the execution time of the start method and the number of bytes transmitted to the application server. The supported limit is 100,000 items per conversion job.

## Solution

Please check to determine whether the values for the Word Automation Services are correct. To do so, open **Central Administration** &gt; **Application Management** &gt; **Manage Service Applications** &gt; **Word Automation Services**.

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [The settings for Word Automation Services are not within the recommended limits \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/hh487292.aspx)
* [Word Automation Services in SharePoint Server 2010](https://msdn.microsoft.com/en-us/library/ee558278%28v=office.14%29.aspx)

