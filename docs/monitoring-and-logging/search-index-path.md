---
description: >-
  Search Index Path best practices report by SPDocKit determines whether the
  search index location is configured to be on the primary drive.
sidebar_position: 5
---

# Search Index Path

## Issue description

This check determines whether the search index location is configured to be on the primary drive. If the index location is marked as Default, then it is configured to be on the system drive (e.g. C:/Program Files/Microsoft Office Servers/15.0/Data/Office Server/Applications).

## Explanation

The search index should not be stored on the system drive for a variety of reasons. It will have a negative impact on the performance of the system. Also, as the amount of content in SharePoint grows, the search index will grow too. This can cause the system drive to fill up, which can cause a number of issues, effectively rendering the server unusable.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Add an additional drive for the search index (ideally on a different physical drive). Move the search index location to the newly added drive. You will have to rebuild the search topology in order to accomplish this task. For more details, visit articles listed in the **Additional information** section.

## Additional information

Additional information can be found in the following articles:

* [Manage the index component in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/jj862355.aspx)
