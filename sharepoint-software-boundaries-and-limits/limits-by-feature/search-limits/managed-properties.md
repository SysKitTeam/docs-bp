---
title: Managed Properties
description: Managed Properties best practices report by SPDocKit determines whether the number of managed properties within the Search Service Application is exceeding the supported limit.
author: Aleksandar Draskovic 
date: 23/6/2017
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description
This check determines whether the number of managed properties within the Search Service Application is exceeding the supported limit.
### Explanation
A *crawled property* is content and metadata that is extracted from an item, such as a document or an URL, during a crawl. A crawled property can be an author, title, or subject. The content and metadata of crawled properties is included in the search index by mapping crawled properties to managed properties. Managed properties can have a large number of settings, or attributes. These attributes determine how the contents are shown in search results. The search schema contains the attributes on managed properties and the mapping between crawled properties and managed properties. The supported limit is 50,000 managed properties per Search Service Application.
### Solution
Make sure that the number of components within your search topology is within the supported boundaries. To check your search topology, go to the **Central Administration** > **Application Management** > **Manage service applications** > **Search Service Application**.
### Additional information 
Additional information can be found in the following articles:
* [Overview of crawled and managed properties in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj219630.aspx)
* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc678868.aspx)