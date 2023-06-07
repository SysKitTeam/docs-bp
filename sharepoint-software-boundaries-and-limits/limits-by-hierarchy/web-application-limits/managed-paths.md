---
description: >-
  Managed Paths best practices report by SPDocKit determines whether the web
  applications have a large number of managed paths configured.
---

# Managed Paths

## Issue description

This check determines whether the web applications have a large number of managed paths configured.

## Explanation

Managed paths are there for a number of reasons. First, they define what the URL of a SharePoint resource will look like. By properly defining managed paths, you can create URLs which will be more easily remembered by the users. For example, poorly defined managed paths will result in such URLs as these:

```http
http://webapp/sites/projA
http://webapp/sites/it
http://webapp/sites/hr
http://webapp/sites/download
```

However, by using and configuring managed paths properly, you could define links which will look like this:

```http
http://webapp/projects/projectA
http://webapp/departments/it
http://webapp/departments/hr
http://webapp/download
```

Maybe a more important aspect of managed paths is that what happens in the background, without users even noticing it. SharePoint is built on top of an Internet Information Services (IIS) server and runs as an Internet Server API (ISAPI) filter. Which URLs SharePoint will process and which will “fall through” the ISAPI filter is controlled by the list of managed paths. This means that the higher the number of managed paths is, the more checks must be done for each HTTP request (even for resources such as images, JavaScript files, CSS, etc.), which can introduce performance issues in an environment serving a large number of requests.

Exceeding 20 managed paths per web application adds more load to the web server for each request. If you plan to exceed twenty managed paths in a given web application, we recommend that you test for acceptable system performance.

[![Download SPDocKit](../../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

This is a general guidance. Exceeding 20 managed paths per web application adds more load to the web server for each request. If you plan to exceed twenty managed paths in a given web application, we recommend that you test for acceptable system performance.

## Additional information

Additional information can be found in the following article:

* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
