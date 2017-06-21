---
Title: UPA Up and Running
Author: Aleksandar Draskovic
Description: UPA Up and Running best practices report by SPDocKit determines whether all user profile services are running in the farm.
Date: 20/6/17
---
### Issue description

This check determines whether all user profile services are running in the farm.

### Explanation

The User Profile service is a shared service in SharePoint Server 2013 that enables the creation and administration of user profiles that can be accessed from multiple sites and farms. Using Profile Synchronization, SharePoint Server 2013 enables User Profile service administrators to synchronize user and group profile information stored in the SharePoint Server 2013 profile store with profile information stored in directory services and business systems across the enterprise.

Not running user profile services will result in non-functioning social features and SharePoint apps. It will also affect any third-party code that implements features depending on the SharePoint user profiles or SharePoint social features.

### Solution

Make sure that all user profile services are running on one or more servers. Provisioning User Profile service on more than one server will ensure high service availability. Note that you can provision only one instance of User Profile Synchronization service.

To verify that the service application is created, please go to the __Central Administration__ > __Application Management__ > __Manage service applications__. To verify that the service instances are started and configured properly, go to __Central Administration__ > __Application Management__ > __Manage services on server__.

This script retrieves the health status of all User Profile Service Applications. It checks the following:
* at least one User Profile Service Application is provisioned
* all User Profile Service Applications have an User Profile Synchronization service instance provisioned
* all User Profile Service Applications have at least one User Profile Service instance provisioned
* status of the running profile synchronization jobs. If running longer than a defined threshold, it will display a warning message (default: 24h).

[Download this script](https://bp.spdockit.com/wp-content/uploads/2016/01/Get-BPUPAStatus.7z)

```PowerShell
param(
    [int]$UPASyncRunningThreshold=24
)
 
Write-Host ""
Write-Host "Checking User Profile Service Applications... " -NoNewLine
 
$upaCol = Get-SPServiceApplication | where {$_.TypeName -eq "User Profile Service Application" }
$upasync = Get-SPServiceInstance | where {$_.TypeName -eq "User Profile Synchronization Service" -and $_.Status -eq "Online"}
 
if ($upaCol -ne $null)
{
    Write-Host "$($upaCol.Count) found!" -ForegroundColor Green
    Write-Host ""
    Write-Host "========================================================================="
    foreach ($upa in $upaCol)
    {
        Write-Host "User Profile Service Application: $($upa.DisplayName)"
        Write-Host "UPA Sync: " -NoNewLine
        if (($upasync | where {$_.UserProfileApplicationGuid -eq $upa.Id}) -eq $null)
        {
            Write-Host "not provisioned" -ForegroundColor Red
        }
        else
        {
            Write-Host "provisioned, healthy" -ForegroundColor Green
        }
         
        Write-Host "User Profile Service instances: " -NoNewLine
         
        $upasvcCount = [int]$($upa.ServiceInstances | where {$_.Status -eq "Online"}).Count
        switch ($upaSvcCount)
        {
            0 {Write-Host "none found" -ForegroundColor Red}
            1 {Write-Host "1 found. Consider deploying additional instance for high availability." -ForegroundColor Yellow}
            default {Write-Host "$upaSvcCount" -ForegroundColor Green}
        }
 
        Write-Host "Checking profile synchronization status: " -NoNewLine
        if ($upa.IsSynchronizationRunning)
        {
            # check if running for more hours than specified in the threshold
            Write-Host ""
            $upaTimerJob = Get-SPTimerJob | Where {$_.DisplayName -eq "$($upa.DisplayName) - User Profile Incremental Synchronization"}
            if ($upaTimerJob -eq $null)
            {
                Write-Host "Profile synchronization is running but the user profile synchronization timer job could not be found." -ForegroundColor Red
            }
            else
            {
                $runningTime = [datetime]::Now - ($upaTimerJob.SynchronizationStatus | where {$_.Stage -eq "StartSynchronization"}).BeginTime
                 
                if ($runningTime.TotalHours -gt $UPASyncRunningThreshold)
                {
                    Write-Host "Running for more than $UPASyncRunningThreshold" -ForegroundColor Yellow
                    Write-Host "Running since $(($upaTimerJob.SynchronizationStatus | where {$_.Stage -eq "StartSynchronization"}).BeginTime) ($($runningTime.ToString()))." -ForegroundColor Yellow
                    Write-Host "You may consider checking the synchronization job." -ForegroundColor Yellow
                }
                else
                {
                    Write-Host "Running since $(($upaTimerJob.SynchronizationStatus | where {$_.Stage -eq "StartSynchronization"}).BeginTime) ($($runningTime.ToString()))." -ForegroundColor Green
                    # still green
                }
            }
        }
        else
        {
            Write-Host "idle" -ForegroundColor Green
        }
        Write-Host "========================================================================="
        Write-Host ""
    }
}
else
{
    Write-Host "None found!" -ForegroundColor Red
 }
```

### Additional information

Additional information can be found in the following TechNet articles:

* [Overview of the User Profile service application in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee662538.aspx)
* [Create, edit, or delete User Profile service applications in SharePoint Server 2013](https://technet.microsoft.com/en-us/library/ee721052.aspx)
