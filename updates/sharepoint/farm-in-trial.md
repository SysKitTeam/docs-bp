---
title: Farm in Trial
description: >-
  Farm in Trial best practices report by SPDocKit determines whether the
  SharePoint farm is in trial.
author: Matija Hanzic
date: 19/6/2017
tags: >-
  Windows SharePoint Services 3.0,SharePoint Server 2007,SharePoint Foundation
  2010,SharePoint Server 2010,SharePoint Foundation 2013,SharePoint Server
  2013,SharePoint Server 2016
---

# farm-in-trial

## Issue description

This check determines whether the SharePoint farm is in trial.

## Explanation

If you are using the trial version of the product, you will need a valid license key to continue when the trial expires. The trial version is valid for 180 days from installation, after which your farm should be upgraded to the full version.

## Solution

Your license status can be checked through Central Administration. You can license the full version by paying for a license key, then navigating to **Central Administration** &gt; **Upgrade and Migration** &gt; **Convert Farm License Type**, where you enter the key.

