---
title: Office Web Apps HTTPS
description: >-
  Office Web Apps HTTPS best practices report by SPDocKit determines whether the
  Office Web Apps infrastructure is configured to use SSL connections.
author: Aleksandar Draskovic
date: 21/6/2017
tags: 'SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016'
---

# Office Web Apps HTTPS

## Issue description

This check determines whether the Office Web Apps infrastructure is configured to use SSL connections.

## Explanation

Office Web Apps Server delivers browser-based versions of Office apps in an on-premises environment, giving users more flexibility and collaboration opportunities. Starting with Office Web Apps Server 2013, it is decoupled from the SharePoint Server so it can be used independently from it and be used with other products like Lync 2013, Exchange 2013 and even non-Microsoft solutions. This provides a consistent user experience, regardless of the product used. In addition, Microsoft can add new features to Office Web Apps independently from SharePoint.

For Office Web Apps to be used with the SharePoint, Web Application Open Platform Interface \(WOPI\) endpoints must be configured on the Office Web Apps server\(s\) and a WOPI binding must be created between SharePoint and the Office Web Apps infrastructure. In test environments, you may use unsecured HTTP interfaces; however, using SSL-secured HTTPS interfaces is strongly recommended for production environments.

## Solution

Verify that the Office Web Apps WOPI endpoints are SSL secured. Office Web Apps Server uses zones to determine which URL \(internal or external\) and which protocol \(HTTP or HTTPS\) to use when it communicates with the host, which in this case is SharePoint 2013. By default, SharePoint Server 2013 uses the **internal-HTTPS** zone. Verify that this is the current zone by running the following command:

```bash
Get-SPWOPIZone
```

Depending on your environment, you might have to change the WOPI zone. If you have a SharePoint farm that’s both internal and external, specify external. If you have a SharePoint farm that’s internal only, specify internal. If the setting is **internal-HTTPS** and the SharePoint farm is internal only, you can skip the following step. If you have a SharePoint farm that’s internal and external, you need to run the following command to change the zone to **external-HTTPS**:

```bash
Set-SPWOPIZone -zone "external-https"
```

For more information and detailed setup instructions, please read articles from the **Additional information** section.

## Additional information

Additional information can be found in the following articles:

* [Plan Office Web Apps Server](https://technet.microsoft.com/en-us/library/jj219435.aspx)
* [Deploy Office Web Apps Server](https://technet.microsoft.com/en-us/library/jj219455.aspx)
* [Configure Office Web Apps for SharePoint 2013](https://technet.microsoft.com/en-us/library/ff431687.aspx)

