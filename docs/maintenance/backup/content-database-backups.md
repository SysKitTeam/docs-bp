---
description: SPDocKit this way checks whether the content databases in the farm are backed up recently.
---

# Content Database Backups

## Issue description

This check determines whether the content databases in the farm are backed up recently.

## Explanation

As SharePoint contains business-critical data, you have to make sure that the complete SharePoint environment is backed up. You can back up SharePoint content databases using the SharePoint Central Administration website, Windows PowerShell, SQL Server tools, Data Protection Manager or a number of third-party tools. The backup tool that you should use depends on the type of environment that you have deployed, your backup schedule requirements, and service level agreements that you have with your organization. You should have a backup and restore plan in place before deploying a SharePoint environment. As the environment grows, backup and restore plans must be adjusted to reflect changes in the environment and data growth.

In addition, make sure that you run restore tests on a regular basis to ensure the integrity of your backup and compliance with defined Service Level Agreements \(SLAs\) and to keep your technical team prepared for a disaster scenario.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Check if your SharePoint content databases are backed up on a regular basis. If you use built-in SharePoint functionality, you can check the status in Central Administration &gt; Backup and Restore &gt; View backup and restore history. If you use any other backup tool, please refer to the product documentation.

## Additional information

Additional information can be found in the following articles:

* [Back up content databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/ee428327.aspx)
* [Back up and restore databases \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc671616%28v=office.12%29.aspx)
* [Plan for backup and recovery in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc261687.aspx)
* [Plan for backup and recovery \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc261687%28v=office.12%29.aspx)

