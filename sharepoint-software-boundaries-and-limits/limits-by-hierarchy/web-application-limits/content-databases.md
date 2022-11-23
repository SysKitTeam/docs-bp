---
description: >-
  Content Databases best practices report by SPDocKit determines whether the web
  applications have a large number of content databases.
---

# Content Databases

## Issue description

This check determines whether the web applications have a large number of content databases.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is extremely important for SQL Server to be as fast and optimized as possible. The size of a content database and a number of logical units within the database like site collections, sites, and items can have an impact on the performance of the system. Also, the number of content databases associated with a single web application can introduce some manageability issues.

The maximum number of content databases per farm is 500. With 500 content databases per web application, end user operations, such as opening the site or site collections are not affected. But administrative operations, such as creating a new site collection, will experience a decrease in performance. We recommend that you use Windows PowerShell to manage the web application when a large number of content databases are present, because the management interface might become slow and difficult to navigate.

[![Download SPDocKit](../../../.gitbook/assets/spdockit\_download.png)](http://bit.ly/2US0Zna)

## Solution

If you are experiencing an issue, try moving site collections to some less used content databases and delete content databases you managed to free up. Consider also that, with 200 GB per content database and a maximum of 500 content databases per farm, SharePoint will support up to 100 TB of data.

To move a site collection to a different content database, start **SharePoint 2013 Management Shell** as an Administrator and run the following cmdlet:

```bash
Move-SPSite http://webapp/sites/sitename -DestinationDatabase ContentDb2
```

To achieve the same result in Windows SharePoint Services 3.0 and SharePoint Server 2007, follow the procedure described in the following articles:

* [Addcontentdb: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc263422\(v=office.12\).aspx)
* [Move site collections to a new database (split a content database) (Windows SharePoint Services 3.0)](https://technet.microsoft.com/en-us/library/cc825327\(v=office.12\).aspx)

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
* [New-SPContentDatabase](https://technet.microsoft.com/en-us/library/ff607572.aspx)
* [Move-SPSite](https://technet.microsoft.com/en-us/library/ff607915.aspx)
* [Move site collections between databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc825328.aspx)
* [Addcontentdb: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc263422\(v=office.12\).aspx)
* [Move site collections to a new database (split a content database) (Windows SharePoint Services 3.0)](https://technet.microsoft.com/en-us/library/cc825327\(v=office.12\).aspx)
