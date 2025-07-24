---
description: Search Running best practices report by SPDocKit determines whether Search Service Applications are configured properly.
---

# Search Running

## Issue description

This check determines whether Search Service Applications are configured properly. The SharePoint Search Service should be running, and each Search Service Application should have at least one crawl schedule configured.

## Explanation

A Search Service Application provides the enterprise search functionality to one or more SharePoint farms. It provides mechanisms to index SharePoint and non-SharePoint content sources, query the indexed data, and provide search results, where required. The search architecture contains search components and databases.

SharePoint Search uses the list of the content sources to provide information about the targets to the crawl component. The information contained within a content source consists of a list of URLs, target type \(e.g. SharePoint, Exchange, file share, etc.\), crawl schedules, and other information. Each Search Service Application should have at least one content source with a crawl schedule configured. Crawl schedules can be configured as Incremental Crawl, Full Crawl or Continuous Crawl.

For Search Service Applications to work, the SharePoint Search Service must be running.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Before you create new Search Service Applications, please ensure that the SharePoint Search Service is running and keep in mind that you should add at least one content source with a crawl schedule configured for each application you create.

To configure content sources, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search service application**. On the Quick Launch, click Content Sources.

## Additional information

Addition information can be found in the following articles:

* [Manage services on the server \(SharePoint Server 2010\)](https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-server-2010/ee704549%28v=office.14%29)
* [Start or stop a service in SharePoint Server](https://docs.microsoft.com/en-us/SharePoint/administration/start-or-stop-a-service)
* [Add, edit, or delete a content source in SharePoint Server](https://docs.microsoft.com/en-us/SharePoint/search/add-edit-or-delete-a-content-source)

