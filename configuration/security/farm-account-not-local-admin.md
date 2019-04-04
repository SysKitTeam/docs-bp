---
title: Farm Account is not Local Admin
description: >-
  Farm Account is not Local Admin best practices report by SPDocKit determines
  whether the Farm Admin account is a member of the local administrator group.
author: Aleksandar Draskovic
date: 21/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Farm Account is not Local Admin

## Issue description

This check determines whether the Farm Admin account is a member of the local administrator group. Giving the local administrator permissions to the Farm Admin account poses a security issue.

## Explanation

The Farm Admin account has all permissions in a SharePoint farm. Also, the Central Administration application pool runs in the context of the Farm Admin account. If the server is compromised, the attacker can read the username and password of the user running the application pool and use it to get data from SharePoint, install malicious software, and perform other actions that can damage the system and the environment. In order to minimize the impact area, the Farm Admin account should not have local administrator permissions on any SharePoint servers.

Please note that there is a condition where the Farm Admin account must have local administrator permissions, but only temporarily. This is during the provision of the User Profile Synchronization Service instance. Also, when you install a cumulative update or a service pack, User Profile Synchronization Service may be reprovisioned as a part of the patching process. In these cases, the Farm Admin account must also be a local administrator on the server running User Profile Synchronization Service instance, but only until the service is provisioned.

[![Download SPDocKit](/.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Verify that the Farm Admin account is not a member of the local Administrators group on any SharePoint server. To do so, open **Computer Management** &gt; **System Tools** &gt; **Local Users and Groups** &gt; **Groups** and double click the group **Administrators**. If the Farm Admin account is a member of this group, remove it from the group.

## Additional information

Additional information can be found in the following articles:

* [Account permissions and security settings in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc678863.aspx)
* [NO! Your SharePoint Farm Account does NOT need local admin privileges. So don’t give it them!](http://www.harbar.net/archive/2007/06/19/NO-Your-SharePoint-Farm-Account-does-NOT-need-local-admin.aspx)

