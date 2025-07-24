---
description: >-
  Number of Application Pools best practices report by SPDocKit determines
  whether you have more than 10 IIS application pools per web front end server.
---

# Number of Application Pools

## Issue description

This check determines whether you have more than 10 IIS application pools per web front end server.

## Explanation

Each SharePoint site collection is part of a SharePoint web application. Each web application has an equivalent IIS web site that is automatically managed by SharePoint Central Administration. When provisioning a new site collection, a SharePoint admin can choose whether a new web application will be provisioned for a new site collection or whether this site collection will be hosted as part of an existing web application. In addition, administrators can choose if a new IIS application pool will be spun up for the new web application.

An application is a group of one or more worker processes configured with common settings that serve requests to one or more applications assigned to that application pool. Because application pools allow a set of web applications to share one or more similarly configured worker processes, they provide a convenient way to isolate a set of web applications from other web applications on the server computer. However, since every IIS app pool that serves a SharePoint web applications consumes a lot of memory, we recommend that you keep the number of pools at 10 (this amount can be different depending on hardware setup).

Traditionally, SharePoint admins have created a new web application and new app pool for each new site collection that required a separate URL based on the business’s needs or technical requirements. With the release of SharePoint 2010 and the rise of SharePoint Online, a new feature was introduced known as host-named site collections. This new approach allows SharePoint administrators to host multiple site collections with unique URLs within a single web application.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Optimize the number of app pools per web server. If site collections can be hosted within existing web applications, it’s always best to take that approach. If you are using SharePoint 2013 or better, host-named site collections are also an option.

Consider your business requirements, security, pool configuration, and site collection growth predictions when deciding which site collections can share a web application or an application pool.

## Additional information

Additional information can be found in the following articles:

* [Application Pools](https://www.iis.net/configreference/system.applicationhost/applicationpools)
* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
* [What Every SharePoint Admin Needs to Know About Host Named Site Collections](https://blogs.msdn.microsoft.com/kaevans/2012/03/27/what-every-sharepoint-admin-needs-to-know-about-host-named-site-collections/)
