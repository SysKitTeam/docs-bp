---
description: State Service best practices report by SPDocKit determines whether the State Service Application is created or started in the farm.
---

# State Service

## Issue description

This check determines whether the State Service Application is created or started in the farm.

## Explanation

The State Service Application is used by various SharePoint components to store temporary data across HTTP requests. The following SharePoint components use State Service Application:

* InfoPath Forms Services
* SharePoint Server Chart Web Part
* Microsoft Visio
* Search Administration Crawl And Query Health Reports

[![Download SPDocKit](../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the State Service Application is running in the farm. To verify that the service application is started and configured properly, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications**.

## Additional information

Additional information can be found in the following article:

* [Manage the State Service \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/ee704548%28v=office.14%29.aspx)

