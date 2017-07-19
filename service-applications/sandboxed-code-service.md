---
title: Sandboxed Code Service
author: Aleksandar Draskovic
description: Sandboxed Code Service best practices report by SPDocKit determines whether the Microsoft SharePoint Foundation Sandboxed Code Service is started in the farm.
date: 21/6/17
---
### Issue description

This check determines whether the Microsoft SharePoint Foundation Sandboxed Code Service is started in the farm.

### Explanation

A Microsoft SharePoint Foundation solution package can contain custom code, features, branding, and different types of definitions and templates. SharePoint 2010 introduced a concept of the sandbox, which is basically a restricted execution environment in which custom code can run and access only limited resources. Thus, SharePoint prevents the custom code from damaging the rest of the system. Microsoft SharePoint Foundation Sandboxed Code Service is required to run sandbox solutions with the custom code.

Please note that sandbox solutions containing the custom code are deprecated as of SharePoint 2013.

### Solution

Verify that the Microsoft SharePoint Foundation Sandboxed Code Service is running in the farm. To verify that the service instances are started and configured properly, go to __Central Administration__ > __Application Management__ > __Manage services on server__.

### Additional information

Additional information can be found in the following articles:

* [Sandboxed solutions overview (SharePoint Foundation 2010)](https://technet.microsoft.com/en-us/library/ee704543(v=office.14).aspx)
* [Enable sandboxed solutions on the farm (SharePoint Foundation 2010)](https://technet.microsoft.com/en-us/library/ff535775(v=office.14).aspx)