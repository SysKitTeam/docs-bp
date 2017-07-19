---
title: Search Running
author: Matija Hanzic
description: Search Running best practices report by SPDocKit determines whether Search Service Applications are configured properly.
date: 20/6/17
---
### Issue description

This check determines whether Search Service Applications are configured properly. The SharePoint Search Service should be running, and each Search Service Application should have at least one crawl schedule configured.

### Explanation

A Search Service Application provides the enterprise search functionality to one or more SharePoint farms. It provides mechanisms to index SharePoint and non-SharePoint content sources, query the indexed data, and provide search results, where required. The search architecture contains search components and databases.

SharePoint Search uses the list of the content sources to provide information about the targets to the crawl component. The information contained within a content source consists of a list of URLs, target type (e.g. SharePoint, Exchange, file share, etc.), crawl schedules, and other information. Each Search Service Application should have at least one content source with a crawl schedule configured. Crawl schedules can be configured as Incremental Crawl, Full Crawl or Continuous Crawl.

For Search Service Applications to work, the SharePoint Search Service must be running.

### Solution

Before you create new Search Service Applications, please ensure that the SharePoint Search Service is running and keep in mind that you should add at least one content source with a crawl schedule configured for each application you create.

To configure content sources, go to __Central Administration__ > __Application Management__ > __Manage service applications__ > __Search service application__. On the Quick Launch, click Content Sources.

### Additional information

Addition information can be found in the following articles:
* <a href="https://technet.microsoft.com/en-us/library/ee704549(v=office.14).aspx">https://technet.microsoft.com/en-us/library/ee704549(v=office.14).aspx</a>
* <a href="https://technet.microsoft.com/en-us/library/ee704549(v=office.15).aspx">https://technet.microsoft.com/en-us/library/ee704549(v=office.15).aspx</a>
* <a href="https://technet.microsoft.com/en-us/library/ee704549(v=office.16).aspx">https://technet.microsoft.com/en-us/library/ee704549(v=office.16).aspx</a>
* <a href="https://technet.microsoft.com/en-us/library/jj219808.aspx">https://technet.microsoft.com/en-us/library/jj219808.aspx</a>
