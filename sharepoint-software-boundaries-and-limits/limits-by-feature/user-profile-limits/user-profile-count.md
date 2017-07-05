---
title: User Profile Count 
description: User Profile Count best practices report by SPDocKit determines whether the number of user profiles within a User Profile Service Application exceeds the supported limit.
author: Aleksandar Draskovic 
date: 23/6/2017
---
### Issue Description
When the check reports an issue, the number of user profiles within a User Profile Service Application exceeds the supported limit.
### Explanation
The User Profile service is a shared service in SharePoint Server 2013 that enables the creation and administration of user profiles that can be accessed from multiple sites and farms. By using the Profile Synchronization, SharePoint Server 2013 enables User Profile service administrators to synchronize user and group profile information that is stored in the SharePoint Server 2013 profile store with profile information that is stored in directory services and business systems across the enterprise.

User Profile Service Application in SharePoint 2010 and SharePoint 2013 can support up to 2 million user profiles with full social features functionality. This number represents the number of profiles that can be imported into the people profile store from a directory service, and also the number of profiles a User Profile Service Application can support without leading to performance decreases in social features.

User Profile Service Application in SharePoint 2007 can support up to 5 million user profiles.
### Solution
Please implement filters on the synchronization connection to limit the user profile synchronization to import only required profiles. 

As a best practice and the first thing you can look into, exclude disabled accounts unless there is a requirement in the functionality of any solution running on top of the User Profile Service Application for them.

 To configure a content source, go to the **Central Administration** > **Application Management** > **Manage service applications** > **User profile service application** > **Manage synchronization connections**. 
 
 You can configure the synchronization filter in the drop-down menu on the affected synchronization connection.
 ### Additional information 
 Additional information can be found in the following articles:
 * [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
 * [Administer the User Profile service in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee721050.aspx)