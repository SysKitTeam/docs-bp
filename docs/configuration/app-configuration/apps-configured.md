---
description: Apps Configured best practices report by SPDocKit determines whether the SharePoint farm is configured to support SharePoint apps.
---

# Apps Configured

## Issue description

This check determines whether the SharePoint farm is configured to support SharePoint apps.

## Explanation

To address issues caused by old full-trust and sandboxed solution models, Microsoft introduced a SharePoint app model with version 2013. In SharePoint apps, custom code doesn’t have to be executed on the SharePoint server itself. Some of the benefits brought by the app model are:

* Upgrade to the newer version of the product is much easier.
* Security and stability improvements. Custom code is not running on the SharePoint server.
* Easier discovery and deployment.
* Centralized distribution and licensing via SharePoint Store.

However, the SharePoint environment and the infrastructure must be configured for SharePoint apps to work.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

SharePoint apps require following components to be configured:

* Buying a domain from the domain provider. You need to buy a public domain from the domain provider if you intend to publish your SharePoint environments and make them accessible on the Internet.
* Configure DNS records. SharePoint apps require a wildcard domain name \(CNAME record\).
* Issue a wildcard SSL certificate.
* Configure the Subscription Settings service application.
* Configure the App Management service application.
* Configure the App URLs.

The exact configuration procedure can be found under links in the **Additional information** section.

## Additional information

Additional information can be found in the following articles:

* [Plan for apps for SharePoint 2013](https://technet.microsoft.com/en-us/library/fp161237.aspx)
* [Configure an environment for apps for SharePoint \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/fp161236.aspx)

