---
title: Batch Compilation Disabled
description: Batch Compilation Disabled best practices report by SPDocKit determines whether the web.config file for the identified web application contains an unsupported configuration.
author: Aleksandar Draskovic
date: 19/6/2017
---
## Issue Description
This check determines whether the web.config file for the identified web application contains an unsupported configuration.
## Explanation
When batch compilation is enabled, ASP.NET will batch compile all pages in the virtual directory. SharePoint supports batch compilation of pages within the _layouts folder; however it does not support the batch compilation of pages in SharePoint document libraries.
## Solution
Verify that the batch mode is disabled in the web.config file for the web application. To do so, open the **Internet Information Services Manager**, open the server branch in the tree view on the left side and then open **Sites** branch. Find the affected web application, right-click its name in the tree view and click **Explore**. Open **web.config** file with Notepad and make sure that following is configured:
```
<compilation batch="false" debug="false">
```
## Additional information 
Additional information can be found in the following articles:
* [How to use the “batch” attribute of the Web.config file compilation element in SharePoint Server 2007 and in Windows SharePoint Services 3.0](https://support.microsoft.com/en-us/help/953459/how-to-use-the-batch-attribute-of-the-web.config-file-compilation-element-in-sharepoint-server-2007-and-in-windows-sharepoint-services-3.0)
* [SharePoint memory leak caused by incorrect web.config settings](https://blogs.technet.microsoft.com/stefan_gossner/2012/07/20/sharepoint-memory-leak-caused-by-incorrect-web-config-settings/)