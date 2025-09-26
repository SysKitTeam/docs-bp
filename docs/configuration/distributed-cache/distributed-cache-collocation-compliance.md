---
description: Distributed Cache Collocation Compliance best practice report by SPDocKit determines whether collocated Distributed Cache service is running alongside any memory-intensive and non-essential services.
---

# Distributed Cache Collocation Compliance

## Issue description

Determine whether collocated Distributed Cache service is running alongside any memory-intensive and non-essential services.

## Explanation

The Distributed Cache is a memory-intensive service. Running it alongside other **memory-intensive services** on the same server might result in degraded performance of the Distributed Cache.

If you are using the Distributed Cache service in the collocated mode, it is advisable to run the service on a server that is not running the following services as well:

* Search Service
* Excel Services in SharePoint
* Project Server services

[![Download SPDocKit](../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Any non-essential services **should be stopped** on servers running the Distributed Cache service.

## Additional information

Additional information can be found in the following TechNet articles:

* [Plan for feeds and the Distributed Cache service](https://technet.microsoft.com/en-us/library/jj219572%28v=office.15%29.aspx)

