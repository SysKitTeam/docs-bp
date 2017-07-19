---
title: Solution Assembly Deployment Valid
description: Solution Assembly Deployment Valid best practices report by SPDocKit checks if the solution is properly deployed to each server in a SharePoint farm.
author: Aleksandar Draskovic 
date: 21/6/2017
---
### Issue description
In a multi server farm environment you need to ensure a solution is properly deployed to each server in a SharePoint farm.
### Explanation
SharePoint Server core functionality can be extended by using various development models. One of them extends SharePoint functionality by using server side code. For that purpose solution deployment packages (WSPs) are deployed on the SharePoint server and the features contained within the solution packages are activated, where appropriate. During the deployment, the solution package will be stored in the configuration database and deployed physically by SharePoint itself on all servers in the farm.

Features contain custom code that runs on the server. This custom code is contained within the solution assembly (.dll) and usually deployed to the Global Assembly Cache (GAC) or Web Application bin folders. In some cases, these solution assembly files can be updated manually, for example, as a quick fix for a catastrophic issue. However, this is a bad practice and can introduce a lot of issues.

Consider the following example: a SharePoint farm consists of 3 SharePoint servers, 2 web servers (WFE1 and WFE2), and an application server (APP1). A custom solution is deployed and a quick fix is created. A developer deploys an updated .dll file in the GAC on all SharePoint servers in the farm and the issue is resolved. Now, suppose we add a new SharePoint server to the farm (WFE3), due to the increased load on the web servers. During the provisioning, SharePoint will take the version of the solution stored within the configuration database. Effectively, this means that the server WFE3 is going to run an older version of the solution then servers WFE1, WFE2 and APP1.
### Solution
You need to verify that all the DLLs deployed by custom solutions are equal on all the servers in your farm. If there is a new version of the solution assembly, please contact the vendor to obtain the new version of the solution package and provide guidance on updating the solution in your SharePoint farm.
### Additional information 
Additional information can be found in the following articles:
* [Deploying developed site element customizations](https://technet.microsoft.com/en-us/library/cc262995(v=office.12).aspx)
* [Deploy solution packages (SharePoint Server 2010)](https://technet.microsoft.com/en-us/library/cc262995(v=office.14).aspx)