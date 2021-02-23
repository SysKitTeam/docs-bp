---
description: Upgrade Ready best practices report by SPDocKit check determines whether you are running a version of SharePoint 2007 that can be upgraded to SharePoint 2010 or if you are running a version of SharePoint 2010 that can be upgraded to SharePoint 2013.
---

# Upgrade Ready

## Issue description

This check determines whether you are running a version of SharePoint 2007 that can be upgraded to SharePoint 2010 or if you are running a version of SharePoint 2010 that can be upgraded to SharePoint 2013.

## Explanation

Over the lifespan of each SharePoint edition, numerous cumulative updates and occasional service packs are released. Before an existing SharePoint environment can be upgraded to the next major release, a SharePoint admin must ensure that the existing environment is running a version of SharePoint that can be upgraded to the next one.

During an upgrade, the new version will determine whether the content database being upgraded is eligible for an upgrade. However, with this check baked into SPDocKit, you can check the state of your install months before the actual upgrade project commences so you have enough time to patch the existing installation before you upgrade.

[![Download SPDocKit](../../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

If you are planning to upgrade to the next major release of SharePoint, make sure your existing environment is running a version of SharePoint that can be upgraded to the next one.

Here is a list of the build numbers required to upgrade to the next major version of SharePoint:

* To upgrade from SharePoint 2007 to 2010, minimal build: SharePoint 2007 SP2, build number \(12.0.6421.1000\)
* To upgrade from SharePoint 2010 to 2013, minimal build: SharePoint 2010 SP1, build number \(14.0.6029.1000\)

## Additional information

Additional information can be found in the following articles:

* [Review supported editions and products for upgrading to SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262747.aspx)
* [Review supported and unsupported upgrade paths \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/cc262747%28v=office.14%29.aspx)

