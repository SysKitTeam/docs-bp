---
description: Web Application Features Duplicate IDs best practices report by SPDocKit determines whether there are multiple web application features that have the same feature IDs.
---

# Web Application Features Duplicate IDs

## Issue description

This check determines whether there are multiple web application features that have the same feature IDs. This can result in improper SharePoint functionality or break third-party code.

## Explanation

SharePoint features provide additional functionality to SharePoint out of the box \(OOTB\) experience. Web application features have functionality that affects the complete web application where they are activated. Each SharePoint feature has a unique identifier \(ID\). SharePoint uses these IDs to find the information that defines the feature itself. As an example, the ID can be used to activate and deactivate the feature. Therefore, it is very important that features in a SharePoint farm have unique IDs.

SharePoint uses globally unique identifiers \(GUIDs\) as the feature IDs. These IDs are assigned to the feature during development. Usually, a feature GUID is created and assigned via Visual Studio; however, they can be manually assigned by a developer with any value. In this case, there is a possibility that several features within the WSP package or SharePoint farm share the same ID.

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that all features in a SharePoint farm have unique IDs. Please contact the software vendor that created the features with duplicate IDs to solve this issue.

## Additional information

Additional information can be found in the following article:

* [Finding Duplicate GUIDs in Your SharePoint Site Collection](https://sharepointinterface.com/2011/04/03/finding-duplicate-guids-in-your-sharepoint-site-collection/)

