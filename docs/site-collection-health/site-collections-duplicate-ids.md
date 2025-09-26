---
description: Site Collection Duplicate IDs best practices report by SPDocKit determines whether there are site collections in the content database with duplicate IDs.
sidebar_position: 4
---

# Site Collections Duplicate IDs

## Issue description

This check determines whether there are site collections in the content database with duplicate IDs. This can result in orphaned objects and improper SharePoint functionality, or break third-party code that relies on unique IDs.

## Explanation

Each site collection in a SharePoint farm has a unique identifier \(ID\). SharePoint uses these IDs to find the information that defines the site collection itself. As an example, SharePoint uses this information internally to determine which subsites, lists, documents or other information fragments within the content database belong to a particular site collection. Also, third-party code may use these IDs to identify site collections and perform the operations they were designed for. Therefore, it is very important that site collection IDs are unique.

SharePoint uses globally unique identifiers \(GUIDs\) as the site collection IDs. Due to their nature and the mechanisms for using them, it is impossible for SharePoint to generate and assign the same ID to two or more site collections. However, in some scenarios this can occur. One example is when an unsuccessful restore of a site collection is followed by a successful restore. Also, faulty third-party code could create duplicate IDs.

[![Download SPDocKit](../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that there are no site collections in the SharePoint farm that share the same ID. Remove site collections with a duplicate ID and recreate them.

## Additional information

Additional information can be found in the following TechNet articles:

* [Restore site collection within the same farm: SharePoint 2010](http://social.technet.microsoft.com/wiki/contents/articles/21351.restore-site-collection-within-the-same-farm-sharepoint-2010.aspx)
* [Copy-SPSite](https://technet.microsoft.com/en-us/library/fp161280.aspx)
* [Finding Duplicate GUIDs in Your SharePoint Site Collection](https://sharepointinterface.com/2011/04/03/finding-duplicate-guids-in-your-sharepoint-site-collection/)


