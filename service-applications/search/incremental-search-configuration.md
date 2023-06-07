---
description: Incremental Search Configuration best practices report by SPDocKit determines if you have improperly scheduled incremental crawl.
---

# Incremental Search Configuration

## Issue description

An improperly scheduled incremental crawl can have a negative performance effect on the farm or can increase the time required for the document to show as a search result.

## Explanation

Improperly setting the incremental crawl interval can cause a high load on the server, which can result in longer times taken for documents to show as search results. The crawl schedule depends on the amount of uploaded documents, the frequency of the content change, and the hardware configuration, which influences the crawl throughput.

SharePoint 2013 introduced the continuous crawl that ensures a higher degree of content freshness.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

You should monitor the duration of incremental crawls and adjust them accordingly. To achieve the best results with SharePoint 2007 and 2010, you should begin with an incremental crawl every 30–60 minutes and adjust the incremental crawl interval as required.

For SharePoint content sources in SharePoint 2013, you can use continuous crawl.

For SharePoint 2010 and 2013, go to **Central Administration** &gt; **Application Management** &gt; **Manage Service Applications** to configure the crawl schedule. On the **Manage Service Applications** page, select the Search Service Applications and click **Manage**. On the **Search Administration** page, click **Content Sources**. Edit the appropriate content source.

For SharePoint 2007, go to the **Central Administration**. On the **Quick Launch**, in the **Shared Services Administration** group, click a shared service. On the Shared Services Administration page, in the **Search** section, click **Search Administration**. On the Search Administration page, on the **Quick Launch**, in the Queries and Results section, click **Content sources**. Edit the appropriate content source.

## Additional information

Additional information can be found in the following articles:

* [Plan for crawling and federation \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/cc262926.aspx)
* [How can I achieve the best freshness of search results? Introducing Continuous Crawls for SharePoint](https://blogs.technet.microsoft.com/tothesharepoint/2012/09/14/how-can-i-achieve-the-best-freshness-of-search-results-introducing-continuous-crawls-for-sharepoint/)
* [Schedule an incremental crawl \(Office SharePoint Server 2007\)](https://technet.microsoft.com/en-us/library/cc263373%28v=office.12%29.aspx)

