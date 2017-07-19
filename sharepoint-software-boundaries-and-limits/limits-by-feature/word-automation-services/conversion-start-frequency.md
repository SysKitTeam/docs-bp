---
title: Conversion Start Frequency
description: Conversion Start Frequency best practices report by SPDocKit determines whether the Word Automation Services Conversion Start Frequency is within the recommended boundaries.
author: Aleksandar Draskovic 
date: 23/6/2017
---
### Issue description
This check determines whether the Word Automation Services Conversion Start Frequency is within the recommended boundaries.
### Explanation
Word Automation Services is a SharePoint Server service application that enables unattended, server-side conversion of documents that are supported by the Microsoft Word client application. The throughput of Word Automation Services is limited by system resources on the application server. If the values for conversion processes and conversion throughput are set too high, the overall health of the application server can degrade, and other services on the computer can be affected. Additionally, Word Automation Services can experience decreased throughput and more conversion failures.

This setting determines how often the Word Automation Services timer job executes. A lower number leads to the documents being converted faster. However, setting the timer job to execute too often in environments which heavily use this service could potentially lead to high performance impacts.

Values: 1 minute (recommended), 15 minutes (default), 59 minutes (boundary).
### Solution
Please check if the values for the Word Automation Services timer job are incorrect. To do so, open **Central Administration** > **Application Management** > **Manage Service Applications** > **Word Automation Services**. Under **Conversion Throughput**, in the **Frequency with which to start conversions (minutes)** setting, type the value appropriate to your environment and needs.
### Additional information 
Additional information can be found in the following articles:
* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [The settings for Word Automation Services are not within the recommended limits (SharePoint 2013)](https://technet.microsoft.com/en-us/library/hh487292.aspx)
* <a href="https://msdn.microsoft.com/en-us/library/ee558278(v=office.14).aspx">Word Automation Services in SharePoint Server 2010</a>