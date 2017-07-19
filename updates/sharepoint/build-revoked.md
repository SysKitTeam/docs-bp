---
title: Build Revoked
description: Build Revoked best practices report from SPDocKit determines whether one or more servers in the environment is running the SharePoint binaries that are revoked due to a critical issue.
author: Aleksandar Draskovic
date: 19/6/2017
---
### Issue description
This check determines whether one or more servers in the environment is running the SharePoint binaries that are revoked due to a critical issue.

### Explanation
A SharePoint farm can be scaled to contain one or more SharePoint servers, hosting one or more SharePoint components per server. This model provides scalability and it can also provide high availability. Environments supporting a high number of users and hosting large amounts of content are usually scaled in such a way that various SharePoint components have dedicated hardware or a set of resources allocated to them.

All components in a SharePoint environment should be on the same patch level in order to provide maximum compatibility, stability, and supportability. Also, SharePoint should run on the latest Service Pack level in order to get the latest stable bug fixes and new features.

There are numerous examples, however, where Microsoft has issued a faulty service pack containing a critical issue. Such packages and builds are then revoked and new packages are reissued shortly after the bug gets fixed.
### Solution
Check all SharePoint servers in the environment. Make sure that SharePoint servers are not running the revoked build. If so, please consult the SharePoint Updates page (listed under Additional information section) to get the information about particular build and how to solve the issue. In some cases, you may need to consult Microsoft Support to resolve the issue.

To verify installed SharePoint Server updates, start **Control Panel**, go to **Programs** > **Programs and Features** and click **View installed updates**. Control Panel, however, will only show installed binaries. Installing SharePoint binaries is only a part of the patching process. To verify the upgrade status of the SharePoint Farm and servers in the farm, open the **Central Administration**, and in the Upgrade and Migration section, **click Check upgrade status**.

### Additional information 
Additional information can be found in the following TechNet articles:
* [SharePoint Foundation 2010 and SharePoint Server 2010: Install a software update (SharePoint Foundation 2010)](https://technet.microsoft.com/en-us/library/ff806325(v=office.14).aspx)
* [SharePoint Foundation 2013 and SharePoint Server 2013: Install a software update (SharePoint 2013)](https://technet.microsoft.com/en-us/library/ff806338.aspx)
* [SharePoint Updates](https://technet.microsoft.com/library/4b32dfba-1af6-4077-9a92-7cec8f220f20)
* [SharePoint 2013 Build Numbers](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=346)