---
title: My Site Configured
author: Aleksandar Draskovic
description: >-
  My Site Configured best practices report by SPDocKit determines whether the My
  Site URL is configured in the User Profile Service Application.
date: 20/6/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# My Site Configured

## Issue description

This check determines whether the My Site URL is configured in the User Profile Service Application.

## Explanation

In SharePoint Server 2010/2013, a My Site is a personal site for individual users in an organization. By default, it provides access to the Newsfeed, OneDrive/personal site collection, personal blog, About me page, etc. My Sites give users rich social networking and collaboration features, that enable users to explore and share interests, projects, business relationships, content, and other data with people in the organization.

To benefit from the My Site functionality, a site collection must be created with the My Site Host template, and an absolute URL must be specified in the User Profile Service Application.

[![Download SPDocKit](../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the My Site URL is configured for the User Profile Service Application. To do so, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications**. Check if the URL is present in the configuration by clicking on the **User Profile Service Application** and clicking on **Manage** button in the ribbon. On the **Manage Profile Service** page, in the **My Site Settings** section, click **Setup My Sites**. If the URL is not configured, please follow the steps from the article in the **Additional information** section.

## Additional information

Additional information can be found in the following article:

* [Configure My Sites in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee624362.aspx)

