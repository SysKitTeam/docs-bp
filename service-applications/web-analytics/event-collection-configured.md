---
description: Event Collection Configured best practices report by SPDocKit determines whether everything is properly configured for SharePoint 2010 Web Analytics to work with all features.
---

# Event Collection Configured

## Issue description

This check determines whether everything is properly configured for SharePoint 2010 Web Analytics to work with all features.

## Explanation

The Web Analytics feature was introduced in SharePoint 2010, and it was subsequently merged with Search Service Application in SharePoint 2013. To use its range of features, i.e. usage logging, you need to enable Usage and Health data collection.

[![Download SPDocKit](../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

You can verify that usage logging is enabled for desired event using Central Administration:

* Verify that the user account that is performing this procedure is a member of the Farm Administrators SharePoint group.
* In Central Administration, on the Home page, click Monitoring.
* On the Monitoring page in the Reporting section, click Configure usage and health data collection.
* In the Event Selection section, click all the check boxes to select them and then click OK.

## Additional information

Additional information can be found in the following articles:

* [Introducing Web Analytics in SharePoint 2010](https://blogs.msdn.microsoft.com/ecm/2010/03/20/introducing-web-analytics-in-sharepoint-2010/)
* [Configure Web Analytics service application \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/gg266382%28v=office.14%29.aspx#section2)

