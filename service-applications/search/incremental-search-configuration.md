---
Title: Incremental Search Configuration
Author: Aleksandar Draskovic
Description: Incremental Search Configuration best practices report by SPDocKit determines if you have improperly scheduled incremental crawl.
Date: 20/6/17
---
### Issue description

An improperly scheduled incremental crawl can have a negative performance effect on the farm or can increase the time required for the document to show as a search result.

### Explanation

Improperly setting the incremental crawl interval can cause a high load on the server, which can result in longer times taken for documents to show as search results. The crawl schedule depends on the amount of uploaded documents, the frequency of the content change, and the hardware configuration, which influences the crawl throughput.

SharePoint 2013 introduced the continuous crawl that ensures a higher degree of content freshness.

### Solution

You should monitor the duration of incremental crawls and adjust them accordingly. To achieve the best results with SharePoint 2007 and 2010, you should begin with an incremental crawl every 30–60 minutes and adjust the incremental crawl interval as required.

For SharePoint content sources in SharePoint 2013, you can use continuous crawl.

For SharePoint 2010 and 2013, go to __Central Administration__ > __Application Management__ > __Manage Service Applications__ to configure the crawl schedule. On the __Manage Service Applications__ page, select the Search Service Applications and click __Manage__. On the __Search Administration__ page, click __Content Sources__. Edit the appropriate content source.

For SharePoint 2007, go to the __Central Administration__. On the __Quick Launch__, in the __Shared Services Administration__ group, click a shared service. On the Shared Services Administration page, in the __Search__ section, click __Search Administration__. On the Search Administration page, on the __Quick Launch__, in the Queries and Results section, click __Content sources__. Edit the appropriate content source.

###
Additional information

Additional information can be found in the following articles:

* [Plan for crawling and federation (SharePoint Server 2010)](https://technet.microsoft.com/en-us/library/cc262926.aspx)
* [How can I achieve the best freshness of search results? Introducing Continuous Crawls for SharePoint](https://blogs.technet.microsoft.com/tothesharepoint/2012/09/14/how-can-i-achieve-the-best-freshness-of-search-results-introducing-continuous-crawls-for-sharepoint/)
* [Schedule an incremental crawl (Office SharePoint Server 2007)](https://technet.microsoft.com/en-us/library/cc263373%28v=office.12%29.aspx)
