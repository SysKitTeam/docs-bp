---
description: Site Collection Upgrade best practices report by SPDocKit determines whether there are site collections that are not upgraded to the latest version of the product.
sidebar_position: 3
---

# Site Collection Upgrade

## Issue description

This check determines whether there are site collections that are not upgraded to the latest version of the product. Having an older version results in reduced functionality and a non-optimal user experience. Sites within site collections that are not upgraded to the new version of the product will also use the old user interface.

## Explanation

SharePoint 2013 offers a gradual approach to the upgrade from SharePoint 2010. When you attach a SharePoint 2010 content database, SharePoint 2013 upgrades the database schema only, leaving the content intact. Site collections run in SharePoint 2010 mode until they are upgraded to SharePoint 2013 mode. This always happens manually, leaving administrators time to check if all features are running properly in the 2013 mode. It also provides the opportunity to handle possible branding issues. Upgrade is always triggered manually, by either the site collection administrator or the farm administrator. Once triggered, SharePoint will schedule the upgrade in a timer job and notify the site collection administrator once the upgrade is complete.

[![Download SPDocKit](../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Upgrade site collections to the latest version of the product. To upgrade a site collection, site collection administrators must complete the following steps:

1. Run the site collection health checks to verify that the site is ready to upgrade.
2. Create an upgrade evaluation site to preview the differences between versions \(optional\). To do this, go to **Site Settings** &gt; **Site Collection Administration** &gt; **Site collection upgrade**. On the **Step up to SharePoint 2013** page, click **Try a demo upgrade**. Please note that this procedure will create a copy of the site collection, so make sure that you have enough free space on the database server disks where the database storing the site collection is stored.
3. Upgrade the site collection. To do so, go to **Site Settings** &gt; **Site Collection Administration** &gt; **Site collection upgrade**. On the Step up to SharePoint 2013 page, click Upgrade this site collection.
4. Verify that the upgrade was successful and that the site works as expected.

## Additional information

Additional information can be found in the following TechNet articles:

* [Upgrade site collections to SharePoint 2013](https://technet.microsoft.com/en-us/library/jj219474.aspx)
* [Upgrade a site collection to SharePoint 2013](https://technet.microsoft.com/en-us/library/jj219650.aspx)


