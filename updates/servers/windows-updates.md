---
description: Windows Updates best practices report by SPDocKit determines whether all the servers in the environment are running the latest operating system patches.
---

# Windows Updates

## Issue description

This check determines whether all the servers in the environment are running the latest operating system patches.

## Explanation

A SharePoint farm can be scaled to contain one or more SharePoint servers, hosting one or more SharePoint components per server. This model provides scalability and high availability. Environments supporting many users and hosting a large amount of content are usually scaled in such way that various SharePoint components have dedicated hardware or sets of resources allocated to them.

All the components in a SharePoint environment should be on the same patch level to provide maximum compatibility, stability, and supportability. This also applies to the Windows Updates because those patches often provide bug fixes and security improvements to the underlying components on which SharePoint functionality relies.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check all the SharePoint servers in the environment. Ensure that all the SharePoint servers are running on the same SharePoint and Windows patch level.

To verify installed Windows and SharePoint Server updates, start **Control Panel**, go to **Programs** &gt; **Programs and Features** and click **View installed updates.** Note that the Control Panel will only show installed binaries. Installing SharePoint binaries is only one part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the **Central Administration**, and in the **Upgrade and Migration** section, click **Check upgrade status** \(SharePoint 2010 and 2013\).

## Additional information

Additional information can be found in the following TechNet articles:

* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update \(SharePoint Foundation 2010\)](https://technet.microsoft.com/en-us/library/ff806325%28v=office.14%29.aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff806338.aspx)

