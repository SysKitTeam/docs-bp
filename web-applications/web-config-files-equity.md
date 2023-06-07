---
description: Web.config Files Equality best practices report by SPDocKit determines whether web.config files on all servers in the farm are identical.
---

# Web.config Files Equality

## Issue description

This check determines whether web.config files on all servers in the farm are identical.

## Explanation

Web.config files contain configuration parameters for an Internet Information Services \(IIS\) web application. They should be the same on all SharePoint servers for specific web applications and zones. If they are not the same, you may experience various issues.

SharePoint usually maintains the web.config files. When you perform a configuration change that requires a modification to the web.config file, SharePoint stores the change in the configuration database and triggers the timer job responsible for propagating the configuration change. The timer job\(s\) then run on all SharePoint servers and write the required changes in the web.config files.

However, some changes must be performed manually. A good example of this is activating the debug mode for web applications. No configuration option is available in the Central Administration or PowerShell cmdlet to handle this. Hence, we must implement the change manually. However, the change must be implemented on all SharePoint servers hosting a particular web application.

[![Download SPDocKit](../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the web.config files are the same on all servers for the reported web application. To do so, open the **Internet Information Services Manager**, open the server branch in the tree view on the left side and then open **Sites** branch. Find the affected web application, right-click its name in the tree view and click **Explore**. Open **web.config** file with Notepad. Repeat this on all servers and find which elements are changed.

When possible, use a 3rd party, XML comparison tool to compare these files.

## Additional information

Additional information can be found in the following article:

* [Web.config files are not identical on all machines in the farm \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/hh564131.aspx)

