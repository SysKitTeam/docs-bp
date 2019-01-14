---
title: Application Proxies
author: Aleksandar Draskovic
description: >-
  Application Proxies best practices report by SPDocKit determines whether all
  deployed service application proxies are started.
date: 21/6/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# application-proxies

## Issue description

This check determines whether all deployed service application proxies are started. If a service application proxy is not started, it will render the service application inaccessible for the SharePoint farm, depending on service applications and web applications.

## Explanation

Service application proxies \(or service connections\) offer endpoints for accessing a particular service application. This is basically a virtual link between service applications and consumers \(like web applications or other service applications\). If a service application proxy is not started, that particular service application won’t be available for consumers to use.

## Solution

Verify that all service application proxies are up and running. To do so, go to the **Central Administration** &gt; **Application Management** &gt; **Service Applications** &gt; **Manage Service Applications**.

To start a service application proxy, start the **SharePoint 2013 Management Shell** as an administrator and run the following script. Remember to change the State Service Proxy to the name the service application proxy you wish to start.

```text
$saProxy = Get-SPServiceApplicationProxy | where {$_.TypeName -eq "State Service Proxy"} 
$saProxy.Provision()
```

You can also filter by other Application Proxy attributes or use the following script to list all the Service proxies that are not online:

```text
Get-SPServiceApplicationProxy | where {$_.Status -ne "Online"}
```

## Additional information

Additional information can be found in the following articles:

* [In a Nutshell: SharePoint 2010 Service Applications](http://www.harbar.net/articles/sp2010sa2.aspx)
* [Service application and service management \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ee704547.aspx)

