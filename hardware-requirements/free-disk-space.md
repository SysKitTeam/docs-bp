---
title: Free Disk Space
description: Free Disk Space Best Practices Report By SPDocKit
author: Aleksandar Draskovic
date: 9/6/2017
---
### Issue description

This check determines whether all servers have enough free disk space.

### Explanation

In the case of failure, Windows OS will create a memory dump file that can be used for troubleshooting and fixing the issue. Windows requires twice the value of physical memory to store the full memory dump file. Additionally, Windows requires a disk space to store the Virtual Memory dump file. Be aware that servers with lots of RAM are more likely to experience a failure.

### Solution

Please check the available disk space and amount of RAM in the servers. As an example, a server with 64 GB RAM and less than 320 GB free disk space (five times the amount of RAM) could be reported as a server with an issue, even though Windows and SharePoint actually have enough free disk space to functioning properly.

If you identify a server that is actually running out of the free disk space, try to free the disk space by doing the following:

* Purge the unnecessary log files;
* Remove temporary files on the server;
* Extend the disk space by re-sizing the partition or replacing the hard drive with a bigger one.

### Additional information

Additional information can be found in the following articles:


* <a href="https://technet.microsoft.com/en-us/library/ff805057(v=office.14).aspx">Drives are running out of free space (SharePoint Foundation 2010)</a>
* [“Drives are running out of free space”…but who cares?](http://blogs.msdn.com/b/briangre/archive/2011/12/01/quot-drives-are-running-out-of-free-space-quot-but-who-cares.aspx)
*