---
title: Object Cache User Accounts
description: Object Cache User Accounts best practices report by SPDocKit determins whether there are poor performance or Access Denied errors by calling the pages that are a part of the site.
author: Aleksandar Draskovic
date: 19/6/2017
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description
Some users, including site collection administrators, may encounter poor performance or Access Denied errors by calling the pages that are a part of the site, for example with SharePoint Server Publishing Infrastructure enabled, using metadata navigation, or with the Content Query Web Part. Additionally, the Application Log may contain the following errors:

>*Object Cache: The super user account utilized by the cache is not configured. This can increase the number of cache misses, which causes the page requests to consume unnecessary system resources. To configure the account use the following command ‘stsadm -o setproperty -propertyname portalsuperuseraccount -propertyvalue account -url webappurl’. The account should be any account that has Full Control access to the SharePoint databases but is not an application pool account.*
>
>*Additional Data:*
>
>*Current default super user account: SHAREPOINT\system*
>
>*Object Cache: The super reader account utilized by the cache does not have sufficient permissions to SharePoint databases. To configure the account use the following command ‘stsadm -o setproperty -propertyname portalsuperreaderaccount -propertyvalue account -url webappurl’. It should be configured to be an account that has Read access to the SharePoint databases.*
>
>*Additional Data:*
>
>*Current default super reader account: NT AUTHORITY\LOCAL SERVICE*

### Explanation
To reduce the workload on the SQL server and improve overall performance, some SharePoint features use the object cache. Object cache requires two accounts to function properly: the Portal Super User Account and Portal Super Reader Account. By default, for SharePoint 2010 and 2013, System Account is set as a default Portal Super User Account and NT AUTHORITY\LOCAL SERVICE is set as a default Portal Super Reader Account. There are two main issues with using the out-of-box accounts.

1. The first issue is that some items are checked out to System Account, so when a query that includes these items is made, the checked-out version of the item is returned instead of the latest published version. This is a problem because it is not what a user would expect to receive, so the cache has to make a second query to fetch the correct version of the file. This negatively affects server performance for every request that includes these items. The same problem would occur for any user who has items checked out if the user’s account is set as the Portal Super User Account. This is why the accounts configured to be the Portal Super User and the Portal Super Reader should not be user accounts that are used to log into the site. This ensures that the user does not inadvertently check items out and cause problems with performance.

1. The default Portal Super Reader account is NT AUTHORITY\LOCAL SERVICE, which is not correctly resolved in a claims authentication application. As a result, if the Portal Super Reader Account is not explicitly configured for a claims authentication application, browsing to site collections under this application will result in an Access Denied error, even for the site administrator. This error will occur on any site that uses any feature that explicitly uses the object cache, such as the SharePoint Server Publishing Infrastructure, metadata navigation, the Content Query Web Part, or navigation.

### Solution
To solve the issue, you have to first add the user accounts to the Central Administration website, and then add the user accounts to the web applications using Windows PowerShell. Portal Super Reader and Portal Super User Accounts must be set once per web application.

#### To create the user accounts by using Central Administration
1. Verify that the user account that is performing this procedure is a member of the Farm Administrators group on the computer that is running the SharePoint Central Administration website.
1. On the Central Administration website, in the __Application Management__ section, click __Manage Web applications__.
1. Click the name of the web application that you want to configure.
1. On the __Web Applications__ tab, in the __Policy__ group, click __User Policy__.
1. In the Policy for Web Application window, click __Add Users__.
1. From the Zones list, select __All zones__, and then click Next.
1. In the __Users__ box, type the user name for the Portal Super User account.
1. Click the __Check Names__ icon to ensure that the account name can be resolved by the authentication providers on the application server.
1. In the __Choose Permissions__ section, check the __Full Control – Has full control box.__
1. Click Finish.
1. Repeat Steps 5 through 8 for the Portal Super Reader account.
1. In the __Choose Permissions__ section, check the __Full Read – Has full read-only access__ box.
1. Click Finish.
1. Make note of how the names for the Object Cache Super Reader and Object Cache Super User accounts are displayed in the __User Name__ column. The displayed strings will be different depending on whether you are using claims authentication for the web application.

#### To add the user accounts to the web application by using Windows PowerShell

```powershell
$wa = Get-SPWebApplication -Identity "<WebApplication>"
$wa.Properties["portalsuperuseraccount"] = "<SuperUser>"
$wa.Properties["portalsuperreaderaccount"] = "<SuperReader>"
$wa.Update()
```
Replace "WebApplication", "SuperUser" and "SuperReader" with the values appropriate for your environment. Please consider following:

* Portal Super User and Portal Super Reader Accounts must be simple domain accounts which will never be used to log on to the site.
* If the web application is in the claims mode, "SuperUser" and "SuperReader" values must be in the claims format (e.g. i:0#.w|domainuser).

### Additional information 
Additional information can be found in the following TechNet article:
* <a href="https://technet.microsoft.com/en-us/library/ff758656(v=office.15).aspx">Configure object cache user accounts in SharePoint Server 2013</a>