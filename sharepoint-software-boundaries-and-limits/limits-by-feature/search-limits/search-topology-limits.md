---
title: Search Topology Limits
description: Search Topology Limits best practices report by SPDocKit shows whether the search topology component count is within the official Microsoft guidelines.
author: Matija Hanzic
date: 23/6/2017
tags: SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016, 
---
### Issue description
This series of Best Practices shows whether the search topology component count is within the official Microsoft guidelines.
### Explanation
Exceeding these limits slows down the communication between search components, which can result in longer query latencies and the search not functioning properly.

| SPDocKit Best Practice                                         | Maximum Supported Value           | Description                                                                                                                                                                                                                                                |
|----------------------------------------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analytics Processing Components per Search Service Application |                 6                 |                                                                                                                                                                                                                                                            |
| Analytics Processing Components per Server                     |                 1                 |                                                                                                                                                                                                                                                            |
| Analytics Reporting Databases                                  | 4 per Search service application  | This limit is a threshold and can be exceeded to accommodate specific requirements. Create a new database when the size of any of the existing analytics report databases reaches 250 GB or 20 million rows in total.                                      |
| Content Processing Components                                  | 1 per server                      | Although a specific physical host or virtual machine does support multiple content processing components, you achieve better usage of the CPU capacity by using one content processing component.                                                          |
| Crawl Components per Search Service Application                |                 16                |                                                                                                                                                                                                                                                            |
| Crawl Components per Server                                    |                 1                 |                                                                                                                                                                                                                                                            |
| Index Components per Search Service Application                |                 60                | The number of index components is equal to the number of index partitions multiplied by the number of index replicas.                                                                                                                                      |
| Index Components per Server                                    |                 4                 | The number of index components is equal to the number of index partitions multiplied by the number of index replicas.                                                                                                                                      |
| Index Partitions                                               | 25 per Search service application | An index partition is a subset of the search index. Increasing the number of index partitions results in each partition holding a smaller subset of the index, reducing the RAM and disk space that is needed on the servers hosting the index components. |
| Index Replicas                                                 | 3 per index partition             | Each index partition can have a set of replicas. Replicas have a positive effect on query performance and it provides better fault tolerance. However, too many replicas per partition can affect indexing performance.                                    |
| Link Databases                                                 | 4 per Search service application  | The highest tested number of items a link database can contain is 100 million.                                                                                                                                                                             |
| Query Processing Components                                    | 1 per server                      |                                                                                                                                                                                                                                                            |
| Search Components                                              | 64 per Search service application | This limit does not include crawl components. The sum of all the other search components must stay within this limit.                                                                                                                                      |

### Solution
Make sure that the number of components in your search topology is within the supported boundaries. To check your search topology, go to **Central Administration** > **Application Management** > **Manage service applications** > **Search Service Application**.
### Additional information 
Additional information can be found in the following article:
* [Software boundaries and limits](https://technet.microsoft.com/en-us/library/cc262787%28v=office.15%29.aspx#Search)
