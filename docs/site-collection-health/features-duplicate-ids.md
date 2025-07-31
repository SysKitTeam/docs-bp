---
description: Features Duplicate IDs best practices report by SPDocKit determines whether there are deployed SharePoint features that share the same ID.
sidebar_position: 2
---

# Features Duplicate IDs

## Issue description

This check determines whether there are deployed SharePoint features that share the same ID. This can result in improper SharePoint functionality or break third-party code.

## Explanation

SharePoint features provide additional functionality to SharePoint out of the box \(OOTB\) experience. Each SharePoint feature has a unique identifier \(ID\). SharePoint uses these IDs to find the information that defines the feature itself. As an example, the ID can be used to activate and deactivate the feature. Therefore, it is very important that features in a SharePoint farm have unique IDs.

SharePoint uses globally unique identifiers \(GUIDs\) as the feature IDs. These IDs are assigned to the feature during development. Usually, a feature GUID is created and assigned via Visual Studio; however, they can be manually assigned by a developer with any value. In this case, there is a possibility that several features within the WSP package or SharePoint farm share the same ID.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that all features in a SharePoint farm have unique IDs. Please contact the software vendor that created the features with duplicate IDs to solve this issue.

## Additional information

* [Finding Duplicate GUIDs in Your SharePoint Site Collection](https://sharepointinterface.com/2011/04/03/finding-duplicate-guids-in-your-sharepoint-site-collection/)


