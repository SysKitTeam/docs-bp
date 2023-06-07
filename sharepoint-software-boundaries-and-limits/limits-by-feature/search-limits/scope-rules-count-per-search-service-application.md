---
description: Scope Rules Count per Search Service Application best practices report by SPDocKit determines whether the number of the scope rules within the Search Service Application is exceeding the supported limit.
---

# Scope Rules Count per Search Service Application

## Issue description

This check determines whether the number of the scope rules within the Search Service Application is exceeding the supported limit.

## Explanation

A search scope defines a subset of information in the search index. Users can select a search scope when performing a search to restrict search results to the subset of information that they want. Typically, search scopes encompass specific topics and content sources that are important and common to users in the organization. For example, you can create a search scope for all items related to a specific project or for all items related to a specific group in the organization, such as finance or marketing. You can also create a search scope that encompasses several other scopes. Scope rules define what content is associated with the scope by specifying locations, properties, or sources of content that are either included in the scope or excluded from the scope.

There is a software limit of 600 scope rules count per Search Service Application. Exceeding this limit will reduce crawl freshness, and delay potential results from scoped queries.

[![Download SPDocKit](../../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

You have to make sure that the number of components within your search topology is within the supported boundaries. To check your search topology, go to the **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search Service Application**.

## Additional information

Additional information can be found in the following article:

* [Manage search scopes \(SharePoint Server 2010\)](https://technet.microsoft.com/en-us/library/ee792872%28v=office.14%29.aspx)

