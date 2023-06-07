---
description: Authoritative Pages best practices report by SPDocKit determines whether the authoritative pages are configured properly.
---

# Authoritative Pages

## Issue description

This check determines whether the authoritative pages are configured properly. If not, you can experience issues with the relevance of returned search results.

## Explanation

SharePoint Search uses the list of authoritative pages to calculate the ranking of results. The static rank determines the relative importance of a page, and it is computed as the smallest number of clicks it would take a user to navigate from an authoritative page to a document. The closer a document is to the most authoritative page, the higher its static rank. An administrator provides a small set of authoritative pages. An example of an authoritative page could be the home page of a company portal.

We recommended the use of one top-level authoritative page and at least second- and third-level pages per Search Service Application.

[![Download SPDocKit](../../../.gitbook/assets/spdockit-download.png)](http://bit.ly/2US0Zna)

## Solution

Make sure the number of authoritative pages is reduced as much as possible. The limit is 200 authoritative pages per relevance level per Search Service Application. If you add more pages, you may not achieve the desired relevance. Add the key site to the first relevance level. Add more key sites one at a time at either the second or third relevance levels. Evaluate the relevance after each addition to make sure you have achieved the desired relevance effect.

To configure authoritative pages, go to the **Central Administration** &gt; **Application Management** &gt; **Manage service applications** &gt; **Search Service Application**. On the Quick Launch click **Authoritative Pages**.

The following script retrieves the number of authoritative pages for all search service applications. It reports if the number of authoritative pages is too large \(default: 200\).

{% file src="../../../.gitbook/assets/get-bpssaauthoritativepages.7z" caption="Download this script" %}

```bash
param(
    [int]$AuthoritativePagesThreshold=200
)

$ssApps = Get-SPEnterpriseSearchServiceApplication
$owner = Get-SPEnterpriseSearchOwner -Level Ssa

Write-Host ""
Write-Host "Checking Search Service Applications... " -NoNewLine

if ($ssApps -ne $null)
{
    Write-Host "$($ssApps.Count) found!" -ForegroundColor Green
    Write-Host "Checking authoritative pages..."
    Write-Host ""
    Write-Host "========================================================================="

    foreach ($ssa in $ssApps)
    {
        Write-Host "Search Service Application: $($ssa.DisplayName)"
        $levels = Get-SPEnterpriseSearchQueryauthority -SearchApplication $ssa -Owner $owner | group Level | Sort Name
        foreach ($level in $levels)
        {
            if ($level.Count -gt $authoritativePagesThreshold)
            {
                Write-Host "Level $($level.Name) contains $($level.Count) pages. Please consider reducing the number of the authoritative pages to achieve better relevance." -ForegroundColor Yellow
            }
            else
            {
                Write-Host "Level $($level.Name) contains $($level.Count) pages." -ForegroundColor Green
            }
        }
        Write-Host "========================================================================="
        Write-Host ""
    }
}
```

## Additional information

Additional information can be found in the following article:

* [Configure authoritative pages in SharePoint 2013](https://technet.microsoft.com/en-us/library/cc262796.aspx)

