---
Title: Crawl Account Search Permission
Author: Aleksandar Draskovic
Description: Crawl Account Search Permission best practices report by SPDocKit determines whether the Search Crawl Account has “Retrieve People Data for Search Crawlers” permission
Date: 20/6/17
---
### Issue description

This check determines whether the Search Crawl Account has “Retrieve People Data for Search Crawlers” permission. Without this permission assigned to the Search Crawl Account, the crawl component won’t be able to fetch the people data from the User Profile Service Application.

### Explanation

Search Crawl Account needs to have “Retrieve People Data for Search Crawlers” permission. Without this permission, crawl component won’t be able to get the people data, which will have a negative impact on the people search: the people search result set may contain either old information or no information at all.

### Solution

Verify that the search crawl account has required permissions. To do so, go to the __Central Administration__ > __Application Management__ > __Manage service applications__. On the Manage service applications page, click the row that contains the User Profile service application, and then click __Administrators__ in the ribbon. In the newly opened dialog box, if the search crawl account is not present or does not have “Retrieve People Data for Search Crawlers” permission, grant the account the permission.

### Additional information

Additional information can be found in the following article:

* [Deploy people search in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/hh582311.aspx)
