---
title: PDF Extension Added to Search Application
author: Aleksandar Draskovic
description: PDF Extension Added to Search Application best practices report by SPDocKit determines whether the PDF extension is added to the Search Service Application.
date: 20/6/17
tags: Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation 2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server 2013,SharePoint Server 2016
---
### Issue description

This check determines whether the PDF extension is added to the Search Service Application. If the PDF extension is not added to the Search Service Application File Types list, the search crawl component won’t crawl PDF documents and they won’t be available in the search results.

### Explanation

SharePoint 2007 and SharePoint 2010 must be configured additionally to support crawling PDF documents. One of the configuration tasks is adding the PDF file extension to the File Types list in the Search Service Application. Search will only process the file extensions included in this list.

### Solution

Verify that the File Types list includes PDF file extension. For SharePoint 2010, go to __Central Administration__ > __Application Management__ > __Manage Service Applications__. On the __Manage Service Applications__ page, select the Search Service Application and click __Manage__. On the __Search Administration__ page, click __File Types__. If PDF file extension is not present in the File Types list, click __New File Type__, type pdf and click __OK__.

If you would like to automate this configuration, you can do so using the script below:
```PowerShell
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
         $xml= 1 (Get-Content $DocIconFilePath)
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
    [System.Environment]::SetEnvironmentVariable("PATH", $Env:Path + ";C:Program FilesAdobeAdobe PDF iFilter 9 for 64-bit platformsbin", "Machine")
     
    Write-Host -ForegroundColor Yellow "Restarting SharePoint Foundation Search Service..."
    Restart-Service SPSearch4
    Write-Host -ForegroundColor Yellow "Restarting SharePoint Search Service..."
    Restart-Service OSearch14
    Write-Host -ForegroundColor Yellow "Restarting IIS..."
    iisreset
    Write-Host -ForegroundColor Green "Installation completed..."
}
```

For information on how to configure PDF iFilter for SharePoint 2007, visit the following Adobe website: [Configuring Adobe PDF iFilter 9 for 64-bit platforms for MS SharePoint 2007.](http://www.adobe.com/special/acrobat/configuring_pdf_ifilter_for_ms_sharepoint_2007.pdf)

If you use Foxit PDF iFilter, you can find the installation steps on the following link: [Foxit PDF iFilter.](https://www.foxitsoftware.com/products/pdf-ifilter/)

SharePoint 2013 includes native support for crawling and indexing PDF documents. No further action should be required. If you get an error as a result of this check, verify that the PDF file type is included in the File Types list in the Search Service Application configuration. You can find the list in the same location as in SharePoint 2010.

### Additional information

Additional information can be found in the following article:

* [How to install and configure Adobe PDF iFilter 9 for SharePoint 2010](https://support.microsoft.com/en-us/help/2293357/how-to-install-and-configure-adobe-pdf-ifilter-9-for-sharepoint-2010)
