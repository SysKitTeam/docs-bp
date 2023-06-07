---
description: MinRole Compliance best practices report by SPDocKit determines whether all servers in the environment are compliant with their assigned MinRoles.
---

# Minrole Compliance

## Issue description

This check determines whether all servers in the environment are compliant with their assigned MinRoles.

## Explanation

When you create a new farm or add a machine to an existing farm, SharePoint starts a base set of service instances that are required for the server’s role. It also detects which additional services have been created, enabled, disabled, or deleted in the farm and starts or stops those service instances as appropriate based on the server’s role. This ensures that each server in your SharePoint farm runs the exact services it needs.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

If a server is marked as not compliant, the easiest way to fix the problem is through the Central Administration, Server in Farm page. On this page, you will see a fix link next to a server that is experiencing problems.

If the problem persists, you will have to resolve any issues the service instances are experiencing manually.

## Additional information

Additional information can be found in the following TechNet articles:

* [MinRole Overview](https://docs.microsoft.com/en-us/sharepoint/install/overview-of-minrole-server-roles-in-sharepoint-server)
* [Description of MinRole and associated services in SharePoint Server 2016](https://technet.microsoft.com/en-us/library/mt667910%28v=office.16%29.aspx)

