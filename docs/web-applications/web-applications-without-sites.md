---
description: Web Applications Without Sites best practices report by SPDocKit determines whether there are one or more dummy web applications in the farm.
sidebar_position: 6
---

# Web Applications Without Sites

## Issue description

This check determines whether there are one or more dummy web applications in the farm.

## Explanation

Web applications are top-level containers for content in a SharePoint farm, and they are typically the interface through which a user interacts with SharePoint. As a best practice, web applications should be independent of each other, have their own application pools, running under their own application pool accounts, and have the capability to be restarted independently in Internet Information Services. This ensures a high level of integrity and isolation.

Each web application consumes resources on all SharePoint servers where it is available. Therefore, if there are web applications that do not host any content and are not panned to do so, they should be removed to reduce resource consumption and improve security by reducing the attack surface.

[![Download SPDocKit](../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check all web applications in the farm and remove the unused ones. To do so, go to the **Central Administration** &gt; **Application Management** &gt; **Web Applications** &gt; **Manage Web Applications**. To get a list of the site collections for the particular web application, go to **Central Administration** &gt; **Application Management** &gt; **Site Collections** &gt; **View All Site Collections**.

## Additional information

Additional information can be found in the following TechNet articles:

* [Web applications management in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/cc261978.aspx)
* [Manage Web applications](https://technet.microsoft.com/en-us/library/cc261978%28v=office.12%29.aspx)


