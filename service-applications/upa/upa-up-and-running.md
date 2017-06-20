---
Title: UPA Up and Running
Author: Aleksandar Draskovic
Description: UPA Up and Running best practices report by SPDocKit determines whether all user profile services are running in the farm
Date: 20/6/17
---
### Issue description

This check determines whether all user profile services are running in the farm.

### Explanation

The User Profile service is a shared service in SharePoint Server 2013 that enables the creation and administration of user profiles that can be accessed from multiple sites and farms. Using Profile Synchronization, SharePoint Server 2013 enables User Profile service administrators to synchronize user and group profile information stored in the SharePoint Server 2013 profile store with profile information stored in directory services and business systems across the enterprise.

Not running user profile services will result in non-functioning social features and SharePoint apps. It will also affect any third-party code that implements features depending on the SharePoint user profiles or SharePoint social features.

### Solution

Make sure that all user profile services are running on one or more servers. Provisioning User Profile service on more than one server will ensure high service availability. Note that you can provision only one instance of User Profile Synchronization service.

To verify that the service application is created, please go to the __Central Administration__ > __Application Management__ > __Manage service applications__. To verify that the service instances are started and configured properly, go to __Central Administration__ > __Application Management__ > __Manage services on server__.

This script retrieves the health status of all User Profile Service Applications. It checks the following:
– at least one User Profile Service Application is provisioned
– all User Profile Service Applications have an User Profile Synchronization service instance provisioned
– all User Profile Service Applications have at least one User Profile Service instance provisioned
– status of the running profile synchronization jobs. If running longer than a defined threshold, it will display a warning message (default: 24h).

### Additional information

Additional information can be found in the following TechNet articles:

* [Overview of the User Profile service application in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee662538.aspx)
* [Create, edit, or delete User Profile service applications in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee721052.aspx)