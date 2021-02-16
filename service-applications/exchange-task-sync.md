---
title: Exchange Task Sync
author: Aleksandar Draskovic
description: >-
  Exchange Task Sync best practices report by SPDocKit determines whether all
  services related to the task synchronization between Exchange and SharePoint
  Server are configured properly.
date: 21/6/17
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Exchange Task Sync

## Issue description

This check determines whether all services related to the task synchronization between Exchange and SharePoint Server are configured properly.

## Explanation

SharePoint Server 2013 and Exchange Server 2013 introduced task synchronization functionality, allowing users to synchronize tasks over different platforms and with their mobile devices.

Task synchronization provides following features:

* You can sync tasks from a SharePoint Server 2013 task list to the Outlook desktop application only if those tasks are assigned to you.
* Because SharePoint Server 2013 task lists use the Exchange Server to sync, tasks are updated in real time, and they can be seen on any device you use to access Microsoft Outlook.
* When SharePoint Server is connected to the Microsoft Exchange Server and all client computers are connected to the Exchange Server, client computers receive information from the task lists directly from the Exchange Server.
* You must opt in before SharePoint Server 2013 task lists will sync to Microsoft Outlook. The easiest way to do this is to click the “Sync to Outlook” button on a SharePoint Server task list.

Following are the prerequisites for the task synchronization:

* SharePoint Server 2013 and Exchange Server 2013 must both installed in the same environment.
* SharePoint Server and Exchange Server must both be on the premises or online.
* SharePoint task list items are synced to Outlook accounts only if they are assigned to a specific user.
* For SharePoint, User profile synchronization needs to be up and running.
* Work Management service application must be up and running for your SharePoint farm.
* To discover task additions and changes, you must also have the Search Service Application running and set for incremental or continuous crawling.
* It is very important that you have Secure Sockets Layer \(SSL\) running for your SharePoint web application for security reasons.
* MySites should be enabled for SharePoint, to see tasks in one place in SharePoint. You can also view them in Outlook.
* Task Synchronization requires Exchange Server 2013, with end-user mailboxes.

[![Download SPDocKit](../.gitbook/assets/spdockit_download.png)](http://bit.ly/2US0Zna)

## Solution

Verify if the services mentioned in the Explanation section are configured and up and running. To verify that service applications are started and configured properly, go to **Central Administration** &gt; **Application Management** &gt; **Manage service applications**. For detailed instructions, please visit the article referenced in the **Additional information** section.

## Additional information

Additional information can be found in the following article:

* [Configure Exchange task synchronization in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj554516.aspx)

