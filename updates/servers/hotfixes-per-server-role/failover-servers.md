---
description: Failover Servers Hotfixes best practices report by SPDocKit determines whether all failover servers in the environment are running on the same patch level as the rest of the environment.
---

# Failover Servers Hotfixes

## Issue description

This check determines whether all failover servers in the environment are running on the same patch level as the rest of the environment.

## Explanation

A SharePoint farm can be scaled to contain one or more SharePoint servers, hosting one or more SharePoint components per server. This model provides scalability and it can also provide high availability. Environments supporting a high number of users and hosting a large amount of content are usually scaled in such a way that various SharePoint components have dedicated hardware or a set of resources allocated to them. A failover server is a server which will take over a specific task or function if the active server providing the function experiences hardware or software failure.

All components in a SharePoint environment should have the same patch level to provide maximum compatibility, stability and supportability.

[![Download SPDocKit](../../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check all the failover servers in the environment. Make sure that all of them have the same SQL, SharePoint and Windows patch level, where applicable.

To see the installed Windows, SQL and SharePoint Server updates, start Control Panel, go to Programs &gt; Programs and Features and click View installed updates. Control Panel, however, will only show which binaries are installed. Installing SharePoint binaries is only a part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the Central Administration, and in the Upgrade and Migration section, click Check upgrade status \(SharePoint 2010 and 2013\).

## Additional information

Additional information can be found in the following TechNet articles:

* [List of SharePoint Updates \(SharePoint 2010 and 2013\)](https://technet.microsoft.com/en-us/library/dn789211%28v=office.14%29.aspx)
* [SharePoint 2013 Build Numbers](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=346)
* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/ff806325%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff806338.aspx)

