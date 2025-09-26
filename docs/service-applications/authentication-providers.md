---
description: Authentication Providers best practices report by SPDocKit determines whether web applications in SharePoint 2010 are utilizing claims-based authentication.
sidebar_position: 5
---

# Authentication Providers

## Issue description

This check determines whether web applications in SharePoint 2010 are utilizing claims-based authentication.

## Explanation

Claims-based authentication is an essential component in SharePoint 2013. Although you can migrate a non-claims web application to SharePoint 2013, many underlying components will not function properly. If you are planning an upgrade, we recommended that you upgrade your existing non-claims SharePoint 2010 application to a claims-based application prior to your upgrade. We also recommend that you perform a couple of test runs before you complete the production upgrade.

[![Download SPDocKit](../../static/img/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Converting from classic authentication to claims-based authentication can be achieved using the following Powershell cmdlet:

```powershell
Convert-SPWebApplication
```

Please consult [Migrate from classic-mode to claims-based authentication in SharePoint 2013](https://technet.microsoft.com/en-us/library/gg251985.aspx) for instructions.

## Additional information

Additional information can be found in the following articles:

* [Plan for upgrade to SharePoint 2013](https://technet.microsoft.com/en-us/library/cc303429.aspx)
* [Checklist for database-attach upgrade \(SharePoint 2013\)](https://technet.microsoft.com/en-us/library/ff607663.aspx)
* [Migrate from classic-mode to claims-based authentication in SharePoint 2013](https://technet.microsoft.com/en-us/library/gg251985.aspx)


