---
Title: State Service
Author: Aleksandar Draskovic
Description: State Service best practices report by SPDocKit determines whether the State Service Application is created or started in the farm.
Date: 21/6/17
---
### Issue description

This check determines whether the State Service Application is created or started in the farm.

### Explanation

The State Service Application is used by various SharePoint components to store temporary data across HTTP requests. The following SharePoint components use State Service Application:

* InfoPath Forms Services
* SharePoint Server Chart Web Part
* Microsoft Visio
* Search Administration Crawl And Query Health Reports

### Solution

Verify that the State Service Application is running in the farm. To verify that the service application is started and configured properly, go to __Central Administration__ > __Application Management__ > __Manage service applications__.

### Additional information

Additional information can be found in the following article:

* [Manage the State Service (SharePoint Server 2010)](https://technet.microsoft.com/en-us/library/ee704548(v=office.14).aspx)