---
description: >-
  Conversion Job Size best practices report by SPDocKit determines whether the
  Word Automation Services Conversion Job Size exceeds the recommended limit.
---

# Conversion Job Size

## Issue description

This check determines whether the Word Automation Services Conversion Job Size exceeds the recommended limit.

## Explanation

Word Automation Services is a SharePoint server service application that enables unattended, server-side conversions of documents supported by the Microsoft Word client application. The throughput of Word Automation Services is limited by the system resources on the application server. If the values for the conversion processes and the conversion throughput are set too high, the overall health of the application server can degrade, and other services on the computer can be affected. In addition, Word Automation Services can experience decreased throughput and more conversion failures.

A large number of conversion items will increase both the execution time of the start method and the number of bytes transmitted to the application server. The supported limit is 100,000 items per conversion job.

[![Download SPDocKit](../../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Please check to determine whether the values for the Word Automation Services are correct. To do so, open **Central Administration** > **Application Management** > **Manage Service Applications** > **Word Automation Services**.

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
* [The settings for Word Automation Services are not within the recommended limits (SharePoint 2013)](https://technet.microsoft.com/en-us/library/hh487292.aspx)
* [Word Automation Services in SharePoint Server 2010](https://msdn.microsoft.com/en-us/library/ee558278\(v=office.14\).aspx)
