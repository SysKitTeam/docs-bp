---
description: Application Servers Hotfixes best practices report by SPDocKit determines whether all application servers in the environment are running on the same patch level as the rest of the environment.
---

# Application Servers Hotfixes

## Issue description

This check determines whether all application servers in the environment are running on the same patch level as the rest of the environment.

## Explanation

A SharePoint farm can be scaled to contain one or more SharePoint servers, hosting one or more SharePoint components per server. This model provides scalability and it can also provide high availability. Environments supporting a high number of users and hosting a large amount of content are usually scaled in such way that various SharePoint components have dedicated hardware or set of resources allocated to them.

All components in a SharePoint environment should be on the same patch level in order to provide maximum compatibility, stability, and supportability. This also applies to the SharePoint application servers.

[![Download SPDocKit](../../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Check all SharePoint application servers in the environment. Make sure that all of them are running on the same SharePoint and Windows patch level.

To verify installed Windows and SharePoint Server updates, start **Control Panel**, go to **Programs** &gt; **Programs and Features** and click **View installed updates**. Control Panel, however, will only show installed binaries. Installing SharePoint binaries is only a part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the **Central Administration**, and in the **Upgrade and Migration** section, click **Check upgrade status** \(SharePoint 2010 and 2013\).

## Additional information

Additional information can be found in the following TechNet articles:

* [List of SharePoint Updates \(SharePoint 2010 and 2013\)](https://technet.microsoft.com/en-us/library/dn789211%28v=office.14%29.aspx)
* [SharePoint 2013 Build Numbers](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=346)
* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/ff806325%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff806338.aspx)

