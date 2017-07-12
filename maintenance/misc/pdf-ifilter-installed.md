---
Title: PDF iFilter Installed
Author: Aleksandar Draskovic
Description: PDF iFilter Installed best practices report by SPDocKit check determines whether you have installed a third party iFilter for PDF files.
Date: 14/6/2017
---
### Issue description

This check determines whether you have installed a third party iFilter for PDF files.

### Explanation

In a typical company that uses SharePoint the most common documents typically stored in SharePoint are Microsoft Office files like DOCX, XLSX, PPTX, and PDF files. SharePoint is a great tool that indexes all these files and serves them as search results. Microsoft Office files are supported out-of-the-box, but additional steps are required to configure the search contents of PDF files (support for PDF search was added to SharePoint 2013).

### Solution

To fix issues with SharePoint 2010 not searching the contents of PDF files, you need to do the following:

* Download and install the [Adobe PDF iFilter](https://www.adobe.com/support/downloads/detail.jsp?ftpID=2611)

* Configure SharePoint Foundation search service via Central Admin (or [PowerShell](http://blog.falchionconsulting.com/index.php/2010/04/starting-the-sharepoint-2010-foundation-search-service-using-powershell/))
* Download the [Adobe PDF icon](http://www.adobe.com/misc/linking.html) (select Small 17 x 17) and save it to a folder on your SharePoint server as pdficon_small.gif
* Download the script below and place it to the same folder as Adobe PDF Icon
* Run the script as administrator from the Powershell shell
 
 [Download this script](https://bp.spdockit.com/wp-content/uploads/2015/10/Configure-iFilter-SharePoint.zip)

```java
cls
function Get-FileFormatDate {
param( [DateTime]$Date = [DateTime]::now )
return $Date.ToUniversalTime().toString( "yyyy-MM-dd_hh-mm-ss" )
}
if((Get-PSSnapin | Where {$_.Name -eq "Microsoft.SharePoint.PowerShell"}) -eq $null) {
Add-PSSnapin Microsoft.SharePoint.PowerShell;
}
$continue = Read-Host "This script will change SharePoint configuration files, registry and will restart your IIS! Would you like to continue (Y/N)"
if($continue -eq "Y")
{
Write-Host -ForegroundColor Yellow "Configuring PDF Icon..."
$SharePointRoot = "C:Program FilesCommon FilesMicrosoft SharedWeb Server Extensions14";
$DocIconFolderPath = "$SharePointRootTEMPLATEXML";
$DocIconFilePath = "$DocIconFolderPathdocicon.xml";
Write-Host "Creating backup of DocIcon.xml file..."
$dateNow = Get-FileFormatDate
$backupFile = "$DocIconFolderPathBackup_DocIcon_" + $dateNow + ".xml"
Copy-Item $DocIconFilePath $backupFile
$pdfIcon = "pdficon_small.gif";
while((Get-Item $pdfIcon) -eq $null)
{
Read-Host "$pdfIcon is missing. Download it from http://www.adobe.com/misc/linking.html and place it to this folder. Press any key to continue...";
}
Copy-Item $pdfIcon "$SharePointRootTemplateImages";
$pdfNode = select-xml -path $DocIconFilePath -xpath "/DocIcons/ByExtension/Mapping[@Key='pdf']" | select-object -expandProperty Node
if($pdfNode -eq $null)
{
$xml= [xml] (Get-Content $DocIconFilePath)
$a = $xml.selectSingleNode("/DocIcons/ByExtension")
$addnode = $xml.createElement("Mapping")
$a.AppendChild($addNode)
$keyAttribute = $xml.CreateAttribute("Key")
$keyAttribute.set_Value("pdf")
$addNode.SetAttributeNode($keyAttribute)
$valueAttribute = $xml.CreateAttribute("Value")
$valueAttribute.set_Value("pdficon_small.gif")
$addNode.SetAttributeNode($valueAttribute)
$xml.Save($DocIconFilePath)
}
Write-Host -ForegroundColor Yellow "Configuring search crawl extension..."
$searchServiceApp = Read-Host "Type the name of your search service application (e.g. Search Service Application)"
$searchApplicationName = Get-SPEnterpriseSearchServiceApplication $searchServiceApp
if($searchApplicationName -ne $null)
{
if(($searchApplicationName | Get-SPEnterpriseSearchCrawlExtension "pdf") -eq $null)
{
$searchApplicationName | New-SPEnterpriseSearchCrawlExtension "pdf"
}
}
Write-Host -ForegroundColor Yellow "Updating registry..."
if((Get-Item -Path Registry::"HKLMSOFTWAREMicrosoftOffice Server14.0SearchSetupFilters.pdf") -eq $null)
{
$item = New-Item -Path Registry::"HKLMSOFTWAREMicrosoftOffice Server14.0SearchSetupFilters.pdf"
$item | New-ItemProperty -Name Extension -PropertyType String -Value "pdf"
$item | New-ItemProperty -Name FileTypeBucket -PropertyType DWord -Value 1
$item | New-ItemProperty -Name MimeTypes -PropertyType String -Value "application/pdf"
}
if((Get-Item -Path Registry::"HKLMSOFTWAREMicrosoftOffice Server14.0SearchSetupContentIndexCommonFiltersExtension.pdf") -eq $null)
{
$registryItem = New-Item -Path Registry::"HKLMSOFTWAREMicrosoftOffice Server14.0SearchSetupContentIndexCommonFiltersExtension.pdf";
$registryItem | New-ItemProperty -Name "(default)" -PropertyType String -Value "{E8978DA6-047F-4E3D-9C78-CDBE46041603}"
}
[System.Environment]::SetEnvironmentVariable("PATH", $Env:Path + ";C:Program FilesAdobeAdobe PDF iFilter 9 for 64-bit platformsbin", "Machine")</code>
 
Write-Host -ForegroundColor Yellow "Restarting SharePoint Foundation Search Service..."
Restart-Service SPSearch4
Write-Host -ForegroundColor Yellow "Restarting SharePoint Search Service..."
Restart-Service OSearch14
Write-Host -ForegroundColor Yellow "Restarting IIS..."
iisreset
Write-Host -ForegroundColor Green "Installation completed..."
}
```

The same process applies to SharePoint 2007. However, since there was no PowerShell at the time, we recommend using the following [cookbook](http://www.adobe.com/special/acrobat/configuring_pdf_ifilter_for_ms_sharepoint_2007.pdf) to perform the task.

### Additional information

Additional information can be found in the following article:

* [Automate PDF configuration for SharePoint 2010 via PowerShell](http://www.sharepointusecases.com/2011/02/automate-pdf-configuration-for-sharepoint-2010-via-powershell/)
