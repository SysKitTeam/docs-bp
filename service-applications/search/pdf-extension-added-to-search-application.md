---
Title: PDF Extension Added to Search Application
Author: Aleksandar Draskovic
Description: PDF Extension Added to Search Application best practices report by SPDocKit determines whether the PDF extension is added to the Search Service Application.
Date: 20/6/17
---
### Issue description

This check determines whether the PDF extension is added to the Search Service Application. If the PDF extension is not added to the Search Service Application File Types list, the search crawl component won’t crawl PDF documents and they won’t be available in the search results.

### Explanation

SharePoint 2007 and SharePoint 2010 must be configured additionally to support crawling PDF documents. One of the configuration tasks is adding the PDF file extension to the File Types list in the Search Service Application. Search will only process the file extensions included in this list.

### Solution

Verify that the File Types list includes PDF file extension. For SharePoint 2010, go to __Central Administration__ > __Application Management__ > __Manage Service Applications__. On the __Manage Service Applications__ page, select the Search Service Application and click __Manage__. On the __Search Administration__ page, click __File Types__. If PDF file extension is not present in the File Types list, click __New File Type__, type pdf and click __OK__.

If you would like to automate this configuration, you can do so using the script below:

For information on how to configure PDF iFilter for SharePoint 2007, visit the following Adobe website: [Configuring Adobe PDF iFilter 9 for 64-bit platforms for MS SharePoint 2007](http://www.adobe.com/special/acrobat/configuring_pdf_ifilter_for_ms_sharepoint_2007.pdf)

If you use Foxit PDF iFilter, you can find the installation steps on the following link: [Foxit PDF IFilter](https://www.foxitsoftware.com/products/pdf-ifilter/)

SharePoint 2013 includes native support for crawling and indexing PDF documents. No further action should be required. If you get an error as a result of this check, verify that the PDF file type is included in the File Types list in the Search Service Application configuration. You can find the list in the same location as in SharePoint 2010.

### Additional information

Additional information can be found in the following article:

* [How to install and configure Adobe PDF iFilter 9 for SharePoint 2010](https://support.microsoft.com/en-us/help/2293357/how-to-install-and-configure-adobe-pdf-ifilter-9-for-sharepoint-2010)