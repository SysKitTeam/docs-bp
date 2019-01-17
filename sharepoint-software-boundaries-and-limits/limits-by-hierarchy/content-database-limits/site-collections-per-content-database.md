---
title: Site Collections per Content Database
description: >-
  Site Collections per Content Database best practices report by SPDocKit
  determines whether content databases are growing beyond the recommended
  boundaries.
author: Aleksandar Draskovic
date: 23/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# Site Collections per Content Database

## Issue description

This check determines whether content databases are growing beyond the recommended boundaries.

## Explanation

SharePoint Server uses SQL Server to store configuration and user data. Therefore it is very important that SQL Server be as fast and optimized as possible. The size of a Content Database and the number of logical units, such as site collections, sites, and items, within the database can affect the performance of the system.

For SharePoint 2010 and SharePoint 2013, we strongly recommended limiting the number of site collections in a content database to 5,000. However, up to 10,000 site collections in a database are supported. Note that in a content database with up to 10,000 total site collections, a maximum of 2,500 of these can be non-personal site collections. It is possible to support 10,000 personal site collections if they are the only site collections within the content database. For Windows SharePoint Services 3.0 and SharePoint Server 2007, the recommendation is to keep the number of site collections per content database under 50,000.

Please note that the patching and upgrade processes are directly affected by the number of site collections within the content database. Content databases containing a large number of site collections will take much longer to upgrade.

## Solution

Please check the number of site collections within the affected content database. Consider creating new content databases, and moving site collections to the new content databases.

To create a new content database, start **SharePoint 2013 Management Shell** and run the following cmdlet:

```text
New-SPContentDatabase "<database name>" -DatabaseServer "<database server / alias>" -WebApplication http://sitename
```

To move a site collection to the new content database, start **SharePoint 2013 Management Shell** as an Administrator and run the following cmdlet:

```text
Move-SPSite http://webapp/sites/sitename -DestinationDatabase ContentDb2
```

To achieve the same result in Windows SharePoint Services 3.0 and SharePoint Server 2007, follow the procedure described in the following articles:

* [Addcontentdb: Stsadm operation \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc263422%28v=office.12%29.aspx)
* [Move site collections to a new database \(split a content database\) \(Windows SharePoint Services 3.0\)](https://technet.microsoft.com/en-us/library/cc825327%28v=office.12%29.aspx)

This script checks the configuration all database servers hosting SharePoint databases. It checks the following:

* MAXDOP setting
* RAM configuration
* Content databases settings - initial and maximum file sizes and auto growth settings

{% file src="../../../.gitbook/assets/get-bpdbstatus.7z" caption="Download this script" %}

```text
param(
    [int64]$MinDBAutoGrowth = 500MB,
    [int64]$MinLogAutoGrowth = 500MB,
    [int64]$MinDBSize = 1GB,
    [int64]$MinLogSize = 500MB,
    [int]$MaxSiteCount=2500,
    [int]$MaxSiteCountPersonal=10000
)

function Get-TSQLValue ([string]$DBServer, [string]$Database, [string]$TSQL, [string]$VarName)
{ 
    $SqlConnection = New-Object System.Data.SqlClient.SqlConnection
    $SqlConnection.ConnectionString = "Server = $DBServer; Database = $Database; Integrated Security = True"

    $SqlCmd = New-Object System.Data.SqlClient.SqlCommand
    $SqlCmd.CommandText = $TSQL
    $SqlCmd.Connection = $SqlConnection

    $SqlAdapter = New-Object System.Data.SqlClient.SqlDataAdapter
    $SqlAdapter.SelectCommand = $SqlCmd

    $DataSet = New-Object System.Data.DataSet
    $SqlAdapter.Fill($DataSet) | Out-Null

    $SqlConnection.Close() | Out-Null

    if (![string]::IsNullOrEmpty($DataSet))
    {
        if ($DataSet.Tables.Count -gt 0)
        {
            return $DataSet.Tables[0].$VarName
        }
        else
        {
            return $null
        }
        $DataSet.Dispose() | Out-Null
    }
    else
    {
        return $null
    }
}

function Get-TSQLValues ([string]$DBServer, [string]$Database, [string]$TSQL, [int]$Timeout=60)
{ 
    $SqlConnection = New-Object System.Data.SqlClient.SqlConnection
    $SqlConnection.ConnectionString = "Server = $DBServer; Database = $Database; Integrated Security = True; Timeout = $Timeout"

    $SqlCmd = New-Object System.Data.SqlClient.SqlCommand
    $SqlCmd.CommandText = $TSQL
    $SqlCmd.Connection = $SqlConnection

    $SqlAdapter = New-Object System.Data.SqlClient.SqlDataAdapter
    $SqlAdapter.SelectCommand = $SqlCmd

    $DataSet = New-Object System.Data.DataSet
    $SqlAdapter.Fill($DataSet) | Out-Null

    $SqlConnection.Close() | Out-Null

    if (![string]::IsNullOrEmpty($DataSet))
    {
        if ($DataSet.Tables.Count -gt 0)
        {
            return $DataSet.Tables
        }
        else
        {
            return $null
        }
        $DataSet.Dispose() | Out-Null
    }
    else
    {
        return $null
    }
}

function Get-TSQLValuesConnString ([string]$ConnectionString, [string]$TSQL)
{ 
    $SqlConnection = New-Object System.Data.SqlClient.SqlConnection
    $SqlConnection.ConnectionString = $ConnectionString

    $SqlCmd = New-Object System.Data.SqlClient.SqlCommand
    $SqlCmd.CommandText = $TSQL
    $SqlCmd.Connection = $SqlConnection

    $SqlAdapter = New-Object System.Data.SqlClient.SqlDataAdapter
    $SqlAdapter.SelectCommand = $SqlCmd

    $DataSet = New-Object System.Data.DataSet
    $SqlAdapter.Fill($DataSet) | Out-Null

    $SqlConnection.Close() | Out-Null

    if (![string]::IsNullOrEmpty($DataSet))
    {
        if ($DataSet.Tables.Count -gt 0)
        {
            return $DataSet.Tables
        }
        else
        {
            return $null
        }
        $DataSet.Dispose() | Out-Null
    }
    else
    {
        return $null
    }
}

function Check-SQLMemoryAllocation ([string]$DBInstance=$null, [string]$DBServer)
{
    if ([string]::IsNullOrEmpty($DBInstance))
    {
        $DBInstance = $DBServer
    }

    try
    {
        $MaxServerMemory = Get-TSQLValue -DBServer $DBInstance -Database master -TSQL "SELECT value_in_use FROM sys.configurations WHERE name = 'max server memory (MB)'" -VarName "value_in_use"

        $DBServerRAM = (Get-WMIObject -class Win32_PhysicalMemory -computer $DBServer | Measure-Object -Property capacity -Sum | select @{N="Ram"; E={[math]::round(($_.Sum / 1GB),2)}}).Ram

        $totalRAM = $DBServerRAM

        $OSReserved = 1

        if ($totalRAM -gt 4)
        {
            if ($totalRAM -gt 16)
            {
                $OSReserved += [math]::Floor((16-4)/4)
            }
            else
            {
                $OSReserved += [math]::Floor(($totalRAM-4)/4)
            }
        }

        if ($totalRAM -gt 16)
        {
            $OSReserved += [math]::Floor(($totalRAM-16)/8)
        }

        $dbServerRAMConfig = @{
            DBServerRAM = $DBServerRAM;
            OSReserved = $OSReserved;
            MaxServerMemory = [math]::Round($MaxServerMemory/1024,0);
            RAMConfigOK = ($DBServerRam-$MaxServerMemory/1024) -ge $OSReserved;
        }
        return $dbServerRAMConfig
    }
    catch
    {
        return $null
    }
}

function Get-SQLMAXDOP ([string]$DBInstance)
{
    try
    {
        $MAXDOP = Get-TSQLValue -DBServer $DBInstance -Database master -TSQL "SELECT value_in_use FROM sys.configurations WHERE name = 'max degree of parallelism'" -VarName "value_in_use"
        return $MAXDOP
    }
    catch
    {
        return $null
    }
}

function Check-SQLAutoSizePercent ([string]$DBInstance, [string]$database)
{
    try
    {
        $DBSettings = Get-TSQLValues -DBServer $DBInstance -Database $database -TSQL "SELECT * FROM sys.database_files"
        return ($DBSettings | where { $_.is_percent_growth }) -eq $null
    }
    catch
    {
        return $null
    }
}

Function Get-DBFilesSettings ([string]$DBInstance, [string]$Database)
{
    try
    {
        $DBSettings = Get-TSQLValues -DBServer $DBInstance -Database $Database -TSQL "SELECT * FROM sys.database_files"

        $dbFilesList = @()

        foreach ($dbFile in $DBSettings)
        {   
            $maxFileSize = $dbFile.max_size

            if ($maxFileSize -gt -1)
            {
                $maxFileSize = $maxFileSize * 8KB
            }

            $dbFileSettings = New-Object PSObject -Property @{
                PhysicalName = $dbFile.physical_name;
                PercentGrowth = $dbFile.is_percent_growth;
                FileSize = $dbFile.Size*8KB;
                FileType = $dbFile.type_desc;
                MaxFileSize = $maxFileSize;
                Growth = $dbFile.growth*8KB;
            }

            $dbFilesList += $dbFileSettings;
        }

        return $dbFilesList

    }
    catch
    {
        return $null
    }
}

Function Get-DBSettings ([string]$DBInstance, [string]$Database)
{
    try
    {
        $dbFileList = Get-DBFilesSettings -DBInstance $DBInstance -Database $Database

        $dbPercentGrowth = ($dbFileList | where { $_.FileType -eq "ROWS" -and $_.PercentGrowth }) -ne $null
        $logPercentGrowth = ($dbFileList | where { $_.FileType -eq "LOG" -and $_.PercentGrowth }) -ne $null
        $dbSize = ($dbFileList | where { $_.FileType -eq "ROWS" } | Measure-Object FileSize -sum).Sum
        $logSize = ($dbFileList | where { $_.FileType -eq "LOG" } | Measure-Object FileSize -sum).Sum
        $dbFiles = ($dbFileList | group FileType | where { $_.Name -eq "ROWS" } ).Count
        $logFiles = ($dbFileList | group FileType | where { $_.Name -eq "LOG" } ).Count

        $dbMaxFileSize = $dbFileList | where { $_.FileType -eq "ROWS" -and $_.MaxFileSize -eq -1}

        if ($dbMaxFileSize -eq $null)
        {
            # incorrect configuration, max file size for at least one file should be set to -1, otherwise there is a danger that the database will get full and SharePoint won't be able to write new data.
            $dbMaxFileSize = ($dbFileList | where { $_.FileType -eq "ROWS" } | Measure-Object MaxFileSize -sum).Sum
        }
        else
        {
            $dbMaxFileSize = -1
        }

        $logMaxFileSize = $dbFileList | where { $_.FileType -eq "LOG" -and $_.MaxFileSize -eq -1}

        if ($logMaxFileSize -eq $null)
        {
            # incorrect configuration, max file size for at least one file should be set to -1, otherwise there is a danger that the database will get full and SharePoint won't be able to write new data.
            $logMaxFileSize = ($dbFileList | where { $_.FileType -eq "LOG" } | Measure-Object MaxFileSize -sum).Sum
        }
        else
        {
            $logMaxFileSize = -1
        }

        $dbAutoGrowthConfigValid = ($dbFileList | where { $_.FileType -eq "ROWS" -and $_.Growth -lt $MinDBAutoGrowth} ) -eq $null
        $logAutoGrowthConfigValid = ($dbFileList | where { $_.FileType -eq "Log" -and $_.Growth -lt $MinLogAutoGrowth} ) -eq $null

        $dbSettings = New-Object PSObject -Property @{
            DBPercentGrowth = $dbPercentGrowth;
            LOGPercentGrowth = $logPercentGrowth;
            DBSize = $dbSize;
            LOGSize = $logSize;
            DBFilesCount = $dbFiles;
            LOGFilesCount = $logFiles;
            DBMaxFileSize = $dbMaxFileSize;
            LOGMaxFileSize = $logMaxFileSize;
            DBAutoGrowthConfigValid = $dbAutoGrowthConfigValid;
            LOGAutoGrowthConfigValid = $logAutoGrowthConfigValid;
        }

        return $dbSettings;

    }
    catch
    {
        return $null
    }
}

function Check-SharePointContentDatabases
{
    $spDatabases = Get-SPContentDatabase
    foreach ($spDatabase in $spDatabases)
    {
        $dbSettings = Get-DBSettings -DBInstance $spDatabase.NormalizedDataSource -Database $spDatabase.Name
        Write-Host "==========================================================================================="
        Write-Host "Content database: $($spDatabase.Name)"
        if ($dbSettings -ne $null)
        {
            Write-Host "Site collections count: " -NoNewLine
            if ($spDatabase.CurrentSiteCount -gt $MaxSiteCount)
            {
                if ($spDatabase.CurrentSiteCount -gt $MaxSiteCountPersonal)
                {
                    Write-Host "$($spDatabase.CurrentSiteCount). You should store max. $MaxSiteCount general use site collections in a content database (max. $MaxSiteCountPersonal site collections if you also store personal sites)" -ForegroundColor Red
                }
                else
                {
                    Write-Host "$($spDatabase.CurrentSiteCount). You should store max. $MaxSiteCount general use site collections in a content database (max. $MaxSiteCountPersonal site collections if you also store personal sites)" -ForegroundColor Yellow
                }
            }
            else
            {
                Write-Host "$($spDatabase.CurrentSiteCount)." -ForegroundColor Green
            }

            Write-Host "Database size: " -NoNewLine
            if ($dbSettings.DBSize -lt $MinDBSize)
            {
                Write-Host "$([Math]::Round($dbSettings.DBSize/1MB,0))MB. Consider increasing database size to $([Math]::Round($MinDBSize/1MB,0))MB" -ForegroundColor Yellow
            }
            else
            {
                Write-Host "$([Math]::Round($dbSettings.DBSize/1MB,0))MB." -ForegroundColor Green
            }

            Write-Host "Log size: " -NoNewLine
            if ($dbSettings.LogSize -lt $MinLogSize)
            {
                Write-Host "$([Math]::Round($dbSettings.LogSize/1MB,0))MB. Consider increasing log size to $([Math]::Round($MinLogSize/1MB,0))MB" -ForegroundColor Yellow
            }
            else
            {
                Write-Host "$([Math]::Round($dbSettings.LogSize/1MB,0))MB." -ForegroundColor Green
            }

            Write-Host "Database max file size: " -NoNewLine
            if ($dbSettings.DBMaxFileSize -ne -1)
            {
                Write-Host "$([Math]::Round($dbSettings.DBMaxFileSize/1MB,0))MB. Consider setting one database file size to unlimited or closely monitor database growth." -ForegroundColor Yellow
            }
            else
            {
                Write-Host "unlimited." -ForegroundColor Green
            }

            Write-Host "Log max file size: " -NoNewLine
            if ($dbSettings.LOGMaxFileSize -ne -1)
            {
                Write-Host "$([Math]::Round($dbSettings.LOGMaxFileSize/1MB,0))MB. Consider setting one log file size to unlimited or closely monitor database growth." -ForegroundColor Yellow
            }
            else
            {
                Write-Host "unlimited." -ForegroundColor Green
            }

            Write-Host "Database autogrowth settings: " -NoNewLine
            if ($dbSettings.DBAutoGrowthConfigValid -and !$dbSettings.DBPercentGrowth)
            {
                Write-Host "OK." -ForegroundColor Green
            }
            else
            {
                if (!$dbSettings.DBAutoGrowthConfigValid)
                {
                    Write-Host "One of the database files has the autogrowth value set below $([Math]::Round($MinDBAutoGrowth/1MB,0))MB. " -NoNewLine -ForegroundColor Yellow
                }

                if ($dbSettings.DBPercentGrowth)
                {
                    Write-Host "One of the database files has the autogrowth value set to a percent value. " -NoNewLine -ForegroundColor Red
                }
                Write-Host "Please check the database configuration." -ForegroundColor Yellow
            }

            Write-Host "Log autogrowth settings: " -NoNewLine
            if ($dbSettings.LOGAutoGrowthConfigValid -and !$dbSettings.LOGPercentGrowth)
            {
                Write-Host "OK." -ForegroundColor Green
            }
            else
            {
                if (!$dbSettings.LOGAutoGrowthConfigValid)
                {
                    Write-Host "One of the log files has the autogrowth value set below $([Math]::Round($MinLogAutoGrowth/1MB,0))MB. " -NoNewLine -ForegroundColor Yellow
                }

                if ($dbSettings.LOGPercentGrowth)
                {
                    Write-Host "One of the log files has the autogrowth value set to a percent value. " -NoNewLine -ForegroundColor Red
                }
                Write-Host "Please check the database configuration." -ForegroundColor Yellow
            }
        }
        else
        {
            Write-Host "Couldn't connect to the content database!" -ForegroundColor Red
        }

        Write-Host "==========================================================================================="
        Write-Host ""
    }

}

function Main
{
    Write-Host "Checking database server and database settings."
    Write-Host ""
    Write-Host "==========================================================================================="
    $dbSources = Get-SPDatabase | Group NormalizedDataSource | Select Name
    foreach ($dbInstance in $dbSources)
    {
        Write-Host "Database server: $($dbInstance.Name)"
        Write-Host "MAXDOP configuration: " -NoNewLine
        $maxdop = Get-SQLMAXDOP -DBInstance $dbInstance.Name
        if ($maxdop -eq 1)
        {
            Write-Host "$maxdop" -ForegroundColor Green
        }
        else
        {
            Write-Host "$maxdop. MAXDOP should be set to 1 on the database instances used for SharePoint databases." -ForegroundColor Red
        }

        $dbRAMSettings = Check-SQLMemoryAllocation -DBServer $dbInstance.Name
        if ([string]::IsNullOrEmpty($dbRAMSettings))
        {
            Write-Host "Couldn't retrieve database server and SQL server instance RAM settings." -ForegroundColor Red
        }
        else
        {
            $dbRAMSettings
        }
        Write-Host "-------------------------------------------------------------------------------------------"
        Write-Host ""
    }
    Write-Host "==========================================================================================="
    Write-Host ""
    Check-SharePointContentDatabases
}

Main
```

## Additional information

Additional information can be found in the following articles:

* [Software boundaries and limits for SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262787.aspx)
* [New-SPContentDatabase](https://technet.microsoft.com/en-us/library/ff607572.aspx)
* [Move-SPSite](https://technet.microsoft.com/en-us/library/ff607915.aspx)
* [Move site collections between databases in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc825328.aspx)
* [Addcontentdb: Stsadm operation \(Office SharePoint Server\)](https://technet.microsoft.com/en-us/library/cc263422%28v=office.12%29.aspx)
* [Move site collections to a new database \(split a content database\) \(Windows SharePoint Services 3.0\)](https://technet.microsoft.com/en-us/library/cc825327%28v=office.12%29.aspx)

