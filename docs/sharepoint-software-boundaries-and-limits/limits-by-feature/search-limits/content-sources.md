---
description: Content Sources best practices report by SPDocKit determines whether the number of the content sources within the Search Service Application is exceeding the recommended limit.
---

# Content Sources

## Issue description

This check determines whether the number of the content sources within the Search Service Application is exceeding the recommended limit.

## Explanation

SharePoint Search uses the list of the content sources to provide information about the targets to the crawl component. The information contained within a content source consists of a list of URLs, target type \(e.g. SharePoint, Exchange, file share, etc\), crawl schedules, and other information.

You can create multiple content sources to include different types of crawl targets or to fine tune search to index diverse crawl targets according to the content importance. For example, if you had a collaboration space and an archive, you could set the collaboration space to be indexed by using Continuous Crawl and archive by using Incremental Crawl once a day, at midnight. For that purpose you would use different crawl sources and different schedules.

The limit is 500 content sources per Search Service Application; this cannot be exceeded by design. However, we advise you to keep the number of the content sources well below this number.

[![Download SPDocKit](../../../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

There is overhead associated with each content source, so we recommend that you create the smallest number of content sources that will satisfy your other operational requirements, for example differences in crawl priority and scheduling. Make sure to maintain the smallest number of content sources possible.

To configure content sources, go to the **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search service application**. On the Quick Launch click **Content Sources**.

## Additional information

Additional information can be found in the following article:

* [Add, edit, or delete a content source in SharePoint Server 2013](https://technet.microsoft.com/en-IE/library/jj219808.aspx)

