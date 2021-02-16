---
title: Secure Store Service Configured
author: Aleksandar Draskovic
description: >-
  Secure Store Service Configured best practices report by SPDocKit determines
  whether the Secure Store Service is configured in the SharePoint farm.
date: 21/6/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Secure Store Service Configured

## Issue description

This check determines whether the Secure Store Service is configured in the SharePoint farm.

## Explanation

Secure Store Service is a shared service that provides storage and mapping of credentials such as account names and passwords. It enables you to securely store data that provides credentials required for connecting to external systems and associating those credentials with a specific identity or group of identities. It is very common for solutions to try to authenticate to an external system in which the current user is known differently or has a different account for authentication. In such cases, Secure Store Service can be used to store and map user credentials required by the external system. You can configure Secure Store Service so that multiple users can access an external system by using a single set of credentials on that external system.

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the Secure Store Service service application is running in the farm. To verify that service applications are started and configured properly, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications**. Check if the encryption key is defined by clicking on the **Secure Store Service Application** and clicking on **Manage** button in the ribbon. If the service application is not created or configured, please follow the steps from the article in the **Additional information** section.

## Additional information

Additional information can be found in the following article:

* [Configure the Secure Store Service in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee806866.aspx)

