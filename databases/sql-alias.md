---
title: SQL Alias
description: SQL Alias best practices report by SPDocKit determines whether the SharePoint servers are configured to use SQL aliases. If not, it can introduce some manageability issues.
author: Aleksandar Draskovic 
date: 23/6/2017
---
### Issue description
This check determines whether the SharePoint servers are configured to use SQL aliases. If not, it can introduce some manageability issues.
### Explanation
An alias is an alternate name that can be used to make a connection. The alias encapsulates the required elements of a connection string and exposes them with a name chosen by the user. Aliases can be used with any client application. By creating server aliases, your client computer can connect to multiple servers using different network protocols, without having to specify the protocol and connection details for each one.

Aliases can be very useful for moving databases between different SQL servers and ease scaling out the SharePoint environment. We recommend that you group the databases based on the usage and purpose and define the aliases based on that. The following table can be used as an example of database distribution and grouping:

| Env. | SQL Alias      | Host              | Port     | Instance | description                                  |
|------|----------------|-------------------|----------|----------|----------------------------------------------|
| Prod | DB_P_Config_P  | sql01.contoso.com | TCP/1433 | default  | SharePointConfig (principal)                 |
| Prod | DB_P_Service_P | sql01.contoso.com | TCP/1433 | default  | SharePoint Service App databases (principal) |
| Prod | DB_P_Usage_P   | sql01.contoso.com | TCP/1433 | default  | SharePointUsagedatabase (principal)          |
| Prod | DB_P_Search_P  | sql01.contoso.com | TCP/1433 | default  | SharePoint Search Databases (principal)      |
| Prod | DB_P_Content_P | sql01.contoso.com | TCP/1433 | default  | SharePoint Contentdatabases (principal)      |
| Prod | DB_P_Config_M  | sql02.contoso.com | TCP/1433 | default  | SharePointConfig (mirror)                    |
| Prod | DB_P_Service_M | sql02.contoso.com | TCP/1433 | default  | SharePoint Service App databases (mirror)    |
| Prod | DB_P_Usage_M   | sql02.contoso.com | TCP/1433 | default  | SharePointUsagedatabase (mirror)             |
| Prod | DB_P_Search_M  | sql02.contoso.com | TCP/1433 | default  | SharePoint Search Databases (mirror)         |
| Prod | DB_P_Content_M | sql02.contoso.com | TCP/1433 | default  | SharePoint Contentdatabases (mirror)         |
### Solution
There is no supported way to change connection parameters for some databases, like SharePoint Configuration Database. Therefore, configuring SQL Server aliases before deploying SharePoint is very important. To create a SQL alias, use **SQL Server Client Network Utility** by clicking **Start** > **Run** > **CliConfg.exe**.
### Additional information 
Additional information can be found in the TechNet article:
* [Best practices for SQL Server in a SharePoint Server farm](https://technet.microsoft.com/en-us/library/hh292622.aspx)