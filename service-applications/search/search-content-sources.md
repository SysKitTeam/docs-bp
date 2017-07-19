---
title: Search Content Sources
author: Aleksandar Draskovic
description: Search Content Sources best practices report by SPDocKit determines whether Content Source Start Addresses are all in the default zone.
date: 20/6/17
---
### Issue description

This check determines whether Content Source Start Addresses are all in the default zone. Otherwise, the search functionality may be limited.

### Explanation

Content Source Start Address must be in the default zone of a web application. If it is in any other zone, the contextual scopes (‘This Site’ and ‘This List’) will not work.

When you crawl the default zone of a SharePoint web application, the query processor automatically maps and returns search result URLs that are relative to the alternate access mapping (AAM) zone from which the queries are performed. This allows users to readily view and open search results. However, if you crawl a web application zone other than the default zone, the query processor does not map search result URLs that are relative to the AAM zone from which the queries are performed. Instead, search result URLS will be relative to the non-default zone that was crawled. Therefore, users might not readily be able to view or open search results.

### Solution

Modify all content sources to include URLs of the default zones of Web applications. To do so, go to __Central Administration__ > __Application Management__ > __Manage Service Applications__ to configure the crawl schedule. On the __Manage Service Applications__ page, select the Search Service Application and click __Manage__. On the __Search Administration__ page, click __Content Sources__. Edit the appropriate content source.

### Additional information

Additional information can be found in the following article:

* [Best practices for crawling in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/dn535606(v=office.15).aspx)
