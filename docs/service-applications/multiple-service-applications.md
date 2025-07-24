---
description: Multiple Service Applications best practices report by SPDocKit determines whether you have multiple service applications of the same type created in a single proxy group.
---

# Multiple Service Applications

## Issue description

This check determines whether you have multiple service applications of the same type created in a single proxy group. This will render all but one of these service applications obsolete. It can also prevent service applications from working properly.

## Explanation

Service application proxy groups organize service applications into logical units. These units are then assigned to a web application. This way, SharePoint “knows” which service applications to speak to when processing a request coming from a web application.

A good example would be implementing the requirement for data separation. You could have two web applications, one for the intranet and one for the extranet, and have a requirement that the search index be stored separately for both web applications. In this case you could implement two Search Service Applications, one for the intranet and one for the extranet. To assign them properly, you would need to create two proxy groups and add the service applications to the appropriate proxy group. You would then assign proxy groups to the appropriate web applications.

Depending on the scenario, this means that it is permissible to have multiple service applications of the same type in the farm. However, it does not make any sense to have multiple service application proxies of the same type in one proxy group. One exception would be having multiple Managed Metadata Service Application instances for different purposes, but this is a rare scenario, and the Managed Metadata Service Application knows how to handle such situations.

[![Download SPDocKit](/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure that you do not have multiple service application proxies of the same type within a single proxy group.

To verify the service application associations and assignments to the proxy groups please go to the **Central Administration** &gt; **Application Management** &gt; **Configure service application associations**.

## Additional information

Additional information can be found in the following TechNet article:

* [Add or remove service application connections from a web application in SharePoint 2013](https://technet.microsoft.com/en-us/library/ff607588.aspx)

