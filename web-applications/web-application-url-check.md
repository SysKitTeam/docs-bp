---
description: Web Application URL Check best practices report by SPDocKit checks if the server name was used a URL for the SharePoint web application.
---

# Web Application URL Check

## Issue description

A server name should not be used as a URL for your SharePoint web application. This can cause problems if a second machine is added to this farm.

## Explanation

Server names can be cryptic because they usually follow some type of naming convention. Naming conventions provide an easy way for administrators to identify the purpose of the server and the environment in which it is used. For that reason, they are not easy for end users to remember. Thus, you should never use the server name as a URL for the SharePoint web application.

The technical implication is that if you introduce additional web servers to the SharePoint farm, they will not be used to process server requests because the DNS record will point to only one server with the name used in the URL.

[![Download SPDocKit](../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Use a dedicated name for a SharePoint web application. As a best practice, do the following:

* Use an URL that’s easy to remember. For example, intranet.domain.local or portal.domain.local are easier to be remembered as proj13ext.domain.local
* Use Full Qualified Domain Names \(FQDN\) for URLs for SharePoint web applications.

If you have already created a web application and used the server name for the SharePoint web application URL, you can easily change it in a few steps:

* Create a DNS record. You will have to create a DNS record pointing to either SharePoint server or a load balancer.
* Change the alternate access mapping configuration for the web application. To do so, go to **Central Administration** &gt; **Application Management** &gt; **Web Applications** &gt; **Configure alternate access mappings**.
* Check the bindings and SSL certificates and change them, if needed. To do so, open the **Internet Information Services Manager**, open the server branch in the tree view on the left side and then open **Sites** branch. Find the affected web application, right-click its name in the tree view and click **Edit Bindings**. This must be performed on all SharePoint servers which have the affected IIS web application.

## Additional information

Additional information can be found in the following article:

* [Update a web application URL and IIS bindings for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262366.aspx)

