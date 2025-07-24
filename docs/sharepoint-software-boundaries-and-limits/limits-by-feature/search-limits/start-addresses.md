---
description: Start Addresses best practices report by SPDocKit determines whether the number of start addresses within a content source is exceeding the supported limit.
---

# Start Addresses

## Issue description

This check determines whether the number of start addresses within a content source is exceeding the supported limit.

## Explanation

SharePoint Search uses the list of the content sources to provide the information about the targets to the crawl component. The information contained within a content source consists of a list of URLs, target type \(e.g. SharePoint, Exchange, file share, etc\), crawl schedules and other information.

You can create multiple content sources to include different types of crawl targets or to fine tune search to index diverse crawl targets according to the content importance. For example, if you had a collaboration space and an archive, you could set the collaboration space to be indexed by using Continuous Crawl and archived by using Incremental Crawl once a day, at midnight. For that purpose you would use different crawl sources and different schedules.

There is a limit of 500 start addresses per content source. However, the more start addresses you have, the fewer content sources should be used.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Please reduce the number of start addresses within the affected content source as much as possible. To configure a content source, go to the **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search Service Application**. On the Quick Launch click **Content Sources**.

## Additional information

Additional information can be found in the following article:

* [Add, edit, or delete a content source in SharePoint Server 2013](https://technet.microsoft.com/en-IE/library/jj219808.aspx)

