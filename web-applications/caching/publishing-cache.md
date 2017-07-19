---
title: Publishing Cache
description: Publishing Cache best practices report by SPDocKit determines whether there are publishing sites in the farm that could benefit from the output cache.
author: Aleksandar Draskovic
date: 19/6/2017
---
### Issue description
This check determines whether there are publishing sites in the farm that could benefit from the output cache.

### Explanation
The page output cache stores the rendered output of a page. It also stores different versions of the cached page based on the permissions of the users who are requesting the page. Page output cache settings can be configured at the site collection level, at the site level, and for page layouts. By default, the page output cache is turned off. It also can be configured on the web application level by editing web.config file. The cache profile settings that you configure at the web application level will be used for all cache profiles in the site collections for that web application.

The page output cache uses cache profiles that specify how long items should be held in the cache. You can specify different cache profiles to be used for anonymous and authenticated users, which optimizes the use of the cache based on the authentication methods that are allowed on the site.

Please note that activating the output cache can also introduce some side effects:
* Output caching consumes additional memory. Each version of a page consumes memory on the web client.

* When used with two or more front-end web servers, output caching may affect consistency. You can configure a cache profile not to check for updates for each request and, for example, instruct it to ignore changes to the version of the web page in the output cache until 60 seconds after the original page is updated. If you have two front-end web servers in your topology, depending on the load balancer used to route the user’s request, a reader of site content could see inconsistency if the page is rendered by one server and then a subsequent request is routed to a second server within that 60-second window.

### Solution
Ensure that the page output cache is configured and turned on for the affected sites. To do so, navigate to the site, click **Site Actions** > **Site Settings** > **Manage All Site Settings**. In the **Site Collection Administration** column, click **Site collection output cache**. In the **Default Page Output Cache Profile** section, select the appropriate profile from the drop down lists and click **OK**.

### Additional Information
Additional information can be found in the following TechNet articles:
* [Plan for caching and performance in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee424404.aspx)
* [Cache settings operations in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/cc261797.aspx)
* <a href="https://msdn.microsoft.com/en-us/library/office/aa661294(v=office.14).aspx">Output Caching and Cache Profiles in SharePoint Server 2010 (ECM)</a>