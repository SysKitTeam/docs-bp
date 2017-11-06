---
title: My Site Configured
author: Aleksandar Draskovic
description: My Site Configured best practices report by SPDocKit determines whether the My Site URL is configured in the User Profile Service Application.
date: 20/6/17
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description

This check determines whether the My Site URL is configured in the User Profile Service Application.

### Explanation

In SharePoint Server 2010/2013, a My Site is a personal site for individual users in an organization. By default, it provides access to the Newsfeed, OneDrive/personal site collection, personal blog, About me page, etc. My Sites give users rich social networking and collaboration features, that enable users to explore and share interests, projects, business relationships, content, and other data with people in the organization.

To benefit from the My Site functionality, a site collection must be created with the My Site Host template, and an absolute URL must be specified in the User Profile Service Application.

### Solution

Verify that the My Site URL is configured for the User Profile Service Application. To do so, go to __Central Administration__ > __Application Management__ > __Manage service applications__. Check if the URL is present in the configuration by clicking on the __User Profile Service Application__ and clicking on __Manage__ button in the ribbon. On the __Manage Profile Service__ page, in the __My Site Settings__ section, click __Setup My Sites__. If the URL is not configured, please follow the steps from the article in the __Additional information__ section.

### Additional information

Additional information can be found in the following article:

* [Configure My Sites in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee624362.aspx)
