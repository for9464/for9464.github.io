---
title: BadUSB
createTime: 2024/05/20 11:45:14
author: only9464
tags:
  - 网络安全
  - 工具
  - BadUSB
  - Digispark
  - ATTINY85
permalink: /article/fs2ej5bs/
---
# 基于Digispark(ATTINY85) 微型开发板的BadUSB烧录Payload源代码
![](https://img.shields.io/github/repo-size/only9464/Payload.svg?style=flat)
[![](https://img.shields.io/github/stars/only9464/Payload.svg?style=flat)](https://github.com/only9464/Payload/stargazers)
[![](https://img.shields.io/github/watchers/only9464/Payload.svg?style=flat)](https://github.com/only9464/Payload/watchers)
[![](https://img.shields.io/github/forks/only9464/Payload.svg?style=flat)](https://github.com/only9464/Payload/network/members)
[![](https://img.shields.io/github/issues-pr-closed-raw/only9464/Payload.svg?style=flat)](https://github.com/only9464/Payload/issues)

## 🏃‍♂️Prepare Before Running  / 前提准备

* [Digispark ATTiny85 开发板](https://s3.amazonaws.com/chris408.com/attiny85.png)
* 正确[安装Digispark](http://digistump.com/wiki/digispark/tutorials/connecting)的[Arduino IDE](https://www.arduino.cc/en/Main/Software) 


## File Structure / 文件结构

```powershell
│  CNAME
│  README.md
│  index.html
│  main.bat
│  main.ino
│  main.msi
│  main.ps1
│  main.zip
│
└─payloads
    │  README.cn.md
    │  README.md
    │
    ├─AddUser_StartService
    │      AddUser_Enable3389(tools).ino
    │      AddUser_EnableFTP(tools).ino
    │
    ├─BackDoor
    │      GoodOl' BackDoor.ino
    │      README.md
    │      Remote_BackDoor.ino
    │
    ├─BlueScreen
    │      BlueScreen1(DOS).ino
    │      BlueScreen2(DOS).ino
    │      BlueScreen3(DOS).ino
    │      BlueScreen_xp_win7(DOS).ino
    │      DelayedBlueScreen (DOS).ino
    │      RegistryWriteBlueScreen (DOS).ino
    │      RegistryWriteBlueScreenGeneralUse (DOS).ino
    │
    ├─CobaltStrike_Trojanlinkage
    │  │  Bitsadmin_TrojanExecution (LinkageWithCS).ino
    │  │  Pl_TrojanExecution (LinkageWithCS).ino
    │  │  PSL_TrojanExecution (LinkageWithCS).ino
    │  │  PY_TrojanExecution (LinkageWithCS).ino
    │  │  Regsvr32_TrojanExecution (LinkageWithCS).ino
    │  │
    │  ├─CobaltStrike_Payload
    │  │      payload.bin
    │  │      payload.c
    │  │      payload.cs
    │  │      payload.java
    │  │      payload.pl
    │  │      payload.ps1
    │  │      payload.py
    │  │      payload.rb
    │  │      payload.sct
    │  │      payload.txt
    │  │      payload.vba
    │  │
    │  └─CounterStrikeTrojanTutorial
    │          CounterStrike.jpg
    │          CounterStrikeTutorial.png
    │
    ├─CodePrincipleInterpretation
    │      ArduinoKeyCodeBase.ino
    │      InstructionsOn_setup_loop_Methods.txt
    │      MSF_TrojanMakingTutorial.txt
    │
    ├─Create_Account
    │      Create_Account.ino
    │      README.md
    │
    ├─DNS Poisoner
    │      DNS_Poisoner.ino
    │
    ├─DNSHijack
    │      DOS_CommandSetMultipleDNS(DNSHijack).ino
    │      PSL_CommandSetMultipleDNS(DNSHijack).ino
    │
    ├─Execute_Powershell_Script
    │      Execute_Powershell_Script.ino
    │
    ├─Fork_Bomb
    │      Fork_Bomb.ino
    │      Persistent_Fork_Bomb.ino
    │      README.md
    │
    ├─Hi_Chewy
    │      Chewbacca.wav
    │      Hi_Chewy.ino
    │      README.md
    │
    ├─Instant Shell
    │      Instant_Shell.ino
    │      README.md
    │
    ├─KeyLogger
    │      README.md
    │      TimeBomb_KeyLogger.ino
    │      Κeylogger.ino
    │
    ├─Linux_Built-inReverseShell
    │      LinuxReverseShell (CodeExecution).ino
    │      LinuxReverseShell(BashShell).ino
    │      LinuxReverseShell(PerlShell).ino
    │
    ├─MSF_Trojanlinkage
    │      shell.apk
    │      shell.asp
    │      shell.aspx
    │      shell.elf
    │      shell.exe
    │      shell.jar
    │      shell.jsp
    │      shell.macho
    │      shell.php
    │      shell.pl
    │      shell.psl
    │      shell.py
    │      shell.sh
    │      shell.war
    │      Shell_TrojanGenerationConfiguration.txt
    │
    ├─OSX_Built-inReverseShell
    │      OSX_SystemReverseConnection (dns_shell).ino
    │      OSX_SystemReverseConnection (perl_shell).ino
    │      OSX_SystemReverseConnection (ruby_shell).ino
    │
    ├─PayLoad Dropper
    │      Payload_dropper.ino
    │      README.md
    │      Remote_PS_Exec.ino
    │
    ├─PSL_FullScreen-HACKED
    │  ├─FullScreenHackedv0
    │  │  │  get.ps1
    │  │  │
    │  │  └─FullScreenHackedv
    │  │          FullScreenHackedv.ino
    │  │
    │  ├─FullScreenHackedv2
    │  │      FullScreenHackedv2.ino
    │  │      wall.ps1
    │  │
    │  └─FullScreenHackedv3[慎用]
    │      │  get.ps1
    │      │
    │      └─FullScreenHackedv3
    │              FullScreenHackedv3.ino
    │
    ├─Rapid_Shell
    │      az_qw_convert.sh
    │      Rapid_Shell.ino
    │      README.md
    │
    ├─Reverse_Shell
    │      Invoke-PowerShellTcpOneLine.ps1
    │      README.md
    │      Reverse_Shell.ino
    │
    ├─RickRoll_Update
    │      RickRoll_Update.ino
    │
    ├─RunProgramOn_UDrive_ExpandScopeOfIntrusion
    │  ├─UdiskRun
    │  │      UdiskRun.ino
    │  │
    │  ├─UdiskRunv2
    │  │      UdiskRunv2.ino
    │  │
    │  └─UdiskRunv3
    │          UdiskRunv3.ino
    │
    ├─SAM Dumper
    │      README.md
    │      SAM_DUMPER.ino
    │
    ├─Silly_Mouse
    │      README.md
    │      Silly_Mouse.ino
    │
    ├─Site_AWord_IntrusionCode
    │      AspSentenceTrojanWrite(webServerVersion).ino
    │      AspSentenceTrojanWriting(websiteServerVersion-DynamicDecoding).ino
    │      AspSentenceTrojanWriting(websiteServerVersion-ScriptEncoderEncryption).ino
    │      AspxSentenceTrojanWrite(webServerVersion OverDog_OverDShield).ino
    │      AspxSentenceTrojanWrite(webServerVersion).ino
    │      JspSentenceTrojanWritten (JSP_websiteServerUse).ino
    │      JspTrojanWrite(JSP_websiteServerUsing-non-Sentence).ino
    │      PHP_TrojanWrite(PHP_webServerUse-ClassBypass).ino
    │      PHP_TrojanWrite(PHP_webServerUse-XOR-Bypass).ino
    │      PHP_TrojanWrite(usedByPHP_websiteServer).ino
    │
    ├─SpecificFunctionCode
    │      AddUserCode(Tools).ino
    │      Alt-f4_Loop.ino
    │      ChangePasswordOfAccountUsed+CloseSystemProcess+BlueScreen(Tool).ino
    │      EnablePSL_RemoteConnection(Tools).ino
    │      ForcedDeletionOf360Processes(Tools).ino
    │      ForceShutDownCommand(Tool).ino
    │      Hide_CMD_Window(Display).ino
    │      MouseKeepsMoving(Tools).ino
    │      OpenPort445.ino
    │      OpenSpecified_webPage.ino
    │      ShiftBackdoor.ino
    │      SimplyChangeAllUsersPasswords(TrickItem).ino
    │      SimplyShutDownMachine(TrickItem).ino
    │      TakeScreenshot_SendSpecifiedFTP_Address(Tool).ino
    │
    ├─Talker
    │      Talker.ino
    │
    ├─TrojanDownloader
    │  ├─CERTUTIL_DownLoader
    │  │      CERTUTIL_DownLoader_MSF.ino
    │  │
    │  ├─FTP_DownLoader
    │  │      FTP_DownloadNetcat_ConnectBackToShell(TrojanAttack).ino
    │  │
    │  ├─JAVA_DownLoader
    │  │      JavaTrojanWrite(TargetEnvironmentRunJava).ino
    │  │      server.java
    │  │
    │  ├─PSL_DownLoader
    │  │      Downloa_PSL_Trojan-Execute_aSecondTime.ino
    │  │      LinkServer_MSF_PSL_Download.ino
    │  │      LinkServer_PSL_Download.ino
    │  │      PSL_DownLoader0.ino
    │  │      PSL_DownLoader1.ino
    │  │      PSL_DownLoader2.ino
    │  │      PSL_DownLoader3.ino
    │  │      PSL_DownLoader4.ino
    │  │      PSL_Downloader_Win&Linux_General.ino
    │  │      PSL_Writes_Bounces.ino
    │  │
    │  └─PY_DownLoader
    │          PyShellServer.py
    │          Py_TrojanWrite(TargetEnvironmentRunPython).ino
    │
    ├─UAC Bypass
    │      README.md
    │      UAC_BYPASS_MSCONFIG.ino
    │      UAC_Bypass_TaskMgr.ino
    │
    ├─Ubuntu_InformationGathering
    │      BasicTerminalCommandsForUbuntu(Display).ino
    │      UbuntuInformationCollectionTXT_File(Information).ino
    │
    ├─Wallpaper_Changer
    │      Wallpaper_Changer.ino
    │
    ├─Wallpaper_Changer_macOS
    │      README.md
    │      Wallpaper_Changer_macOS
    │
    ├─Wallpaper_Prank
    │      Wallpaper_Prank.ino
    │
    ├─Wi-Fi password stealer
    │      README.md
    │      Wifikey-Grab.ino
    │      WifiKey-Grab_Minimize-of-Shame.ino
    │
    ├─WiFi_ConnectionTrojan
    │      ForceConnectionToSpecifiedWiFi-DownloadPSL_TrojanRun.ino
    │
    ├─WiFi_PasswordAcquisition
    │      WiFiPasswordCapture(tool).ino
    │      WiFiPasswordExport(tool).ino
    │
    ├─WiFi_Profile_Grabber
    │      WiFi_Profile_Grabber.ino
    │
    ├─WiFi_Profile_Mailer
    │      README.md
    │      WiFi_Profile_Mailer.ino
    │      WiFi_Profile_Mailer_New.ino
    │      Wifi_Profile_Mailer_Update.ino
    │
    ├─Windows Crasher
    │      BSOD.ino
    │      ForkBomb.ino
    │      Mayhem.ino
    │      README.md
    │      UACBypassBSOD.ino
    │
    ├─Windows Phisher
    │      README.md
    │      Windows_Phisher.ino
    │      Zeymare_Windows_Phisher.ino
    │
    └─Window_Jammer
            Window_Jammer.ino
```
## Star History  /  历史Star

[![Star History Chart](https://api.star-history.com/svg?repos=only9464/Payload&type=Date)](https://star-history.com/#only9464/Payload&Date)
