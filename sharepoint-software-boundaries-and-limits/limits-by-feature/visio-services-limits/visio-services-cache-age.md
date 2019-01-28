---
title: Visio Services Cache Age
description: >-
  Visio Services Cache Age best practices report by SPDocKit determines whether
  Visio Graphic Services cache ages are set so that Visio does not affect
  SharePoint performance.
author: Matija Hanzic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Visio Services Cache Age

## Issue description

This check determines whether Visio Graphic Services cache ages are set so that Visio does not affect SharePoint performance.

## Explanation

Visio Graphics Services caches diagrams to improve performance while viewing Visio diagrams. To govern how long a diagram is in cache, Visio Graphics Services contain two properties, Minimum Cache Age and Maximum Cache Age. It is important to set these properties to adequate values so as not to affect SharePoint performance.

Setting **Minimum Cache Age** to a value less than 5 minutes might result in large processor and network load that can affect SharePoint performance. However, setting this property to a higher value means users will not see their data-connected diagrams refreshing as often.

The **Maximum Cache Age** applies to non-data-connected diagrams. Increasing this property decreases latency for commonly requested drawings. However, if the property is set to a very high value, the latency for items not in cache will increase. The items already in cache consume memory, reducing the memory available to the rest of SharePoint.

## Solution

These Visio Graphics Services properties should be set after testing and assessing their influence on SharePoint performance. However, recommendations are to keep Minimum Cache Age at more than 5 minutes and Maximum Cache Age at less than 60 minutes.

## Additional information

Additional information can be found in the following article:

* [Software Boundaries and Limits](https://technet.microsoft.com/en-us/library/cc262787%28v=office.15%29.aspx?f=255&MSPPError=-2147217396#Visio)
* [Security Advisories and Bulletins](https://technet.microsoft.com/en-us/library/security/ff805058%28v=office.15%29.aspx)

