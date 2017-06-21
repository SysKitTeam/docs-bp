---
title: Expired Certificates
description: Expired Certificates best practices report by SPDocKit determines whether there are any certificates past their expiry date installed on servers in the farm.
author: Matija Hanzic
date: 21/6/2017
---
### Issue Description
This check determines whether there are any certificates past their expiry date installed on servers in the farm.
### Explanation
Certificates are used in the public key infrastructure (PKI) to secure communication over the network or Internet. Many applications and services use them. If the certificate is not valid, such applications and services will stop working. It is imperative to keep certificates up to date and valid.

Certificates are **valid only for the specified time frame**. After the ‘valid to’ date, **they must be renewed**. Many SharePoint and Windows features will stop working if the certificates they use are invalid. Common problems are:
* Remote Desktop Connection may stop working if the certificate is not valid
* Web pages served over HTTPS may be flagged as insecure if the SSL certificate is not valid
* Some SharePoint features such as User Profile Synchronization Service may stop working
### Solution
Expired **certificates should be renewed**. If the certificate was issued by the third party Central Authority, that third party will need to issue a new and renewed certificate. If the certificate was self-signed, it should be renewed by signing it anew.