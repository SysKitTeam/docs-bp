---
description: >-
  Web Site best practices report by SPDocKit determines whether the number of
  subsites within a site collection is growing beyond the recommended
  boundaries.
---

# Web Site

## Issue description

This check determines whether the number of subsites within a site collection is growing beyond the recommended boundaries.

## Explanation

A site collection can be seen as the smallest independent container within SharePoint. It contains one top site, document libraries, lists and other items stored within SharePoint. It can contain one or more subsites. A site collection is stored within one content database and can’t be split over multiple content databases. It is an isolated unit, containing its own structure and permission matrix.

The maximum recommended number of subsites within a site collection is 250,000.

[![Download SPDocKit](../../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Please check the number of subsites within the affected site collection. If you have a site collection containing more than 250,000 subsites, consider creating new site collections for the purpose or moving some subsites to the new site collections (e.g. for archival). However, feasibility of this process will heavily depend on the structure and processes that are represented by the SharePoint solution you are using.

In order to move the content between the site collections, you have to use Export-SPWeb and Import-SPWeb cmdlets. For Windows SharePoint Services 3.0 and SharePoint 2007, you have to use export and import operations of the stsadm.exe command line tool. Both methods use Content Migration SharePoint API, consequently there are limitations. First of all, the migrated content may look the same, but it isn’t actually, because the elements are newly created in the destination site collection. Therefore, all elements will receive new internal IDs. If you have any functionality that depends on the internal IDs, it may break. A major drawback of this operation is that it does not preserve workflows instances, associations, history and tasks. Every workflow association must be recreated and there is no way to restore the running instances from the original site.

Another option is to develop a custom solution for migrating your data, with respect to the processes and solutions running on your SharePoint farm.

To export a subsite, start **SharePoint 2013 Management Shell** and run the following cmdlet:

```powershell
Export-SPWeb http://site -Path "site export.cmp"
```

To import the subsite to a new location, start SharePoint 2013 Management Shell as an Administrator and run the following cmdlet:

```powershell
Import-SPWeb http://site -Path export.cmp -UpdateVersions Overwrite
```

To achieve the same result in Windows SharePoint Services 3.0 and SharePoint Server 2007, follow the procedure described in the following articles:

* [Export: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc262759\(v=office.12\).aspx)
* [Import: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc261866\(v=office.12\).aspx)

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://learn.microsoft.com/en-us/sharepoint/install/software-boundaries-and-limits)
* [Export-SPWeb](https://technet.microsoft.com/en-us/library/ff607895.aspx)
* [Import-SPWeb](https://technet.microsoft.com/en-us/library/ff607613.aspx)
* [Export: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc262759\(v=office.12\).aspx)
* [Import: Stsadm operation (Office SharePoint Server)](https://technet.microsoft.com/en-us/library/cc261866\(v=office.12\).aspx)
