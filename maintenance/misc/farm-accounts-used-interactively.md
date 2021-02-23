---
description: Farm Accounts Used Interactively best practices report by SPDocKit check determines whether SharePoint service accounts are used interactively.
---

# Farm Accounts Used Interactively

## Issue description

This check determines whether SharePoint service accounts are used interactively. Using service accounts interactively can introduce a number of issues and is not recommended. This practice can also have a negative impact on system security.

## Explanation

SharePoint requires a number of service accounts for its proper functioning. In secure environments and by following the best practices, diverse SharePoint components are going to run in the context of different service accounts. This setup ensures that no SharePoint component uses an account that has more rights than the component itself requires. If a SharePoint component is compromised, the setup also insures that the impact on SharePoint and other systems in the local network is limited. Having limited access means that by using some service accounts, an administrator won’t be able to perform required tasks. This could potentially lead to a scenario where an administrator gives more permissions to the service accounts than required, effectively reducing the security of the system.

Also, some operations won’t work properly when using service accounts. An example would be starting a workflow when using a System account \(Farm Admin account\). In this case the workflows would fail to start, as this is out of the box \(OOTB\) behavior and can’t be changed.

Another negative aspect is in auditing and tracking changes made to the system. If a change is made to the system by using service accounts, it is difficult to track who made the change to the system in cases where multiple administrators are maintaining the SharePoint environment.

[![Download SPDocKit](../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Do not use service accounts interactively for SharePoint administration or any kind of operation on SharePoint. Instead, define a named account for the administrators who maintain the system and give them appropriate permissions. Many people can be involved in managing SharePoint. This way permissions can be given granularly, based on the administrator’s specific role and authority. Administration of SharePoint Server occurs at the following levels:

* Server or SharePoint farm
* Shared services
* Web application
* Sites
* Document library or list
* Individual items

## Additional information

Additional information can be found in the following TechNet articles:

* [Choose administrators and owners for the administration hierarchy in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc263291.aspx)
* [Adding Additional Farm Admins to an Existing Farm](http://blogs.devhorizon.com/reza/2012/03/07/adding-additional-farm-admins-to-an-existing-farm/)
* [Plan for administrative and service accounts in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc263445.aspx)
* [Plan for least-privileged administration in SharePoint 2013](https://technet.microsoft.com/en-us/library/hh377944.aspx)

