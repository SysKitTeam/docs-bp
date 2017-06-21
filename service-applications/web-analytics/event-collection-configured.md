---
Title: Event Collection Configured
Author: Toni Frankola
Description: Event Collection Configured best practices report by SPDocKit etermines whether everything is properly configured for SharePoint 2010 Web Analytics to work with all features.
Date: 21/6/17
---
### Issue description

This check determines whether everything is properly configured for SharePoint 2010 Web Analytics to work with all features.

### Explanation

The Web Analytics feature was introduced in SharePoint 2010, and it was subsequently merged with Search Service Application in SharePoint 2013. To use its range of features, i.e. usage logging, you need to enable Usage and Health data collection.

### Solution

You can verify that usage logging is enabled for desired event using Central Administration:

* Verify that the user account that is performing this procedure is a member of the Farm Administrators SharePoint group.
* In Central Administration, on the Home page, click Monitoring.
* On the Monitoring page in the Reporting section, click Configure usage and health data collection.
* In the Event Selection section, click all the check boxes to select them and then click OK.

### Additional information

Additional information can be found in the following articles:

* [Introducing Web Analytics in SharePoint 2010](https://blogs.msdn.microsoft.com/ecm/2010/03/20/introducing-web-analytics-in-sharepoint-2010/)
* [Configure Web Analytics service application (SharePoint Server 2010)](https://technet.microsoft.com/en-us/library/gg266382(v=office.14).aspx#section2)