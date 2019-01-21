---
title: BLOB Caching Enabled
description: >-
  BLOB Caching Enabled best practices report by SPDocKit determines whether
  there are servers in the environment with binary large object (BLOB) caching
  enabled.
author: Aleksandar Draskovic
date: 19/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Blob Caching Enabled

## Issue description

This check determines whether there are servers in the environment with binary large object \(BLOB\) caching enabled.

## Explanation

A disk-based BLOB cache is used for caching various image, audio and video files, together with cascading style sheets \(CSS\) and JavaScript \(JS\) files. A BLOB cache improves performance by retrieving BLOB files from the database and storing them in a directory on the front-end web server where they are served to the users. This reduces the network traffic too and the load on the database server. BLOB caching is disabled by default.

## Solution

BLOB caching can be enabled on web servers that accept and process end-user requests. Before you enable BLOB caching, carefully consider how you plan to use it. In some scenarios, like in a heavy collaboration, a BLOB cache can even lower performance due to the intensive caching operations. A BLOB cache has a high benefit in the following scenarios:

* Publishing sites hosting a lot of static content and image renditions,
* Sites with a large number of read-only media files or where only a small percentage of the media assets are updated.

There is one BLOB cache per web application. Consider choosing a dedicated drive as the cache location. Storing cache files on the same drive as SharePoint binaries, page files or ULS and IIS logs can have a negative impact on the performance of the system.

BLOB caching is enabled by editing the web.config file for the web application and changing the following line:

```scheme
BlobCache location="C:BlobCache14"
path=".(gif|jpg|jpeg|jpe|jfif|bmp|dib|tif|tiff|themedbmp|themedcss|themedg if|themedjpg|themedpng|ico|png|wdp|hdp|css|js|asf|avi|flv|m4v|mov|mp3|mp4|m|mpg|rm|rmvb|wma|wmv|ogg|ogv|oga|webm|xap)$" maxSize="10"
enabled="false"
```

You can find extensive information about the configuration of and planning for BLOB caching in the article specified under **Additional information**.

## Additional information

Additional information can be found in the following TechNet article:

* [Plan for caching and performance in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee424404.aspx#Section1)

