---
description: Batch Compilation Disabled best practices report by SPDocKit determines whether the web.config file for the identified web application contains an unsupported configuration.
sidebar_position: 3
---

# Batch Compilation Disabled

## Issue description

This check determines whether the web.config file for the identified web application contains an unsupported configuration.

## Explanation

When batch compilation is enabled, ASP.NET will batch compile all pages in the virtual directory. SharePoint supports batch compilation of pages within the layouts folder; however it does not support the batch compilation of pages in SharePoint document libraries.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the batch mode is disabled in the web.config file for the web application. To do so, open the **Internet Information Services Manager**, open the server branch in the tree view on the left side and then open **Sites** branch. Find the affected web application, right-click its name in the tree view and click **Explore**. Open **web.config** file with Notepad and make sure that following is configured:

```markup
<compilation batch="false" debug="false">
```

## Additional information

Additional information can be found in the following articles:

* [SharePoint memory leak caused by incorrect web.config settings](https://blogs.technet.microsoft.com/stefan_gossner/2012/07/20/sharepoint-memory-leak-caused-by-incorrect-web-config-settings/)


