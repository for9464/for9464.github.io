import{_ as a,r as e,o as h,c as r,a as s,e as l,b as i}from"./app-CGxQI9hl.js";const t={},k=s("h1",{id:"基于digispark-attiny85-微型开发板的badusb烧录payload源代码",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#基于digispark-attiny85-微型开发板的badusb烧录payload源代码"},[s("span",null,"基于Digispark(ATTINY85) 微型开发板的BadUSB烧录Payload源代码")])],-1),d=s("img",{src:"https://img.shields.io/github/repo-size/only9464/Payload.svg?style=flat",alt:""},null,-1),c={href:"https://github.com/only9464/Payload/stargazers",target:"_blank",rel:"noopener noreferrer"},p=s("img",{src:"https://img.shields.io/github/stars/only9464/Payload.svg?style=flat",alt:""},null,-1),o={href:"https://github.com/only9464/Payload/watchers",target:"_blank",rel:"noopener noreferrer"},u=s("img",{src:"https://img.shields.io/github/watchers/only9464/Payload.svg?style=flat",alt:""},null,-1),m={href:"https://github.com/only9464/Payload/network/members",target:"_blank",rel:"noopener noreferrer"},g=s("img",{src:"https://img.shields.io/github/forks/only9464/Payload.svg?style=flat",alt:""},null,-1),y={href:"https://github.com/only9464/Payload/issues",target:"_blank",rel:"noopener noreferrer"},D=s("img",{src:"https://img.shields.io/github/issues-pr-closed-raw/only9464/Payload.svg?style=flat",alt:""},null,-1),A=s("h2",{id:"🏃‍♂️prepare-before-running-前提准备",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#🏃‍♂️prepare-before-running-前提准备"},[s("span",null,"🏃‍♂️Prepare Before Running / 前提准备")])],-1),b={href:"https://s3.amazonaws.com/chris408.com/attiny85.png",target:"_blank",rel:"noopener noreferrer"},v={href:"http://digistump.com/wiki/digispark/tutorials/connecting",target:"_blank",rel:"noopener noreferrer"},C={href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"noopener noreferrer"},B=s("h2",{id:"file-structure-文件结构",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#file-structure-文件结构"},[s("span",null,"File Structure / 文件结构")])],-1),_=s("div",{class:"language-powershell line-numbers-mode","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code","v-pre":""},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  CNAME")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  index.html")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  "),s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"main.bat")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  main.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  main.msi")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  main.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│  main.zip")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"│")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"└─payloads")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │  README.cn.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │  README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    ├─AddUser_StartService")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │      AddUser_Enable3389"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"tools"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},".ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │      AddUser_EnableFTP"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"("),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"tools"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},")"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},".ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    ├─BackDoor")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"    │      GoodOl"),s("span",{style:{"--shiki-light":"#B5695999","--shiki-dark":"#C98A7D99"}},"'"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," BackDoor.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Remote_BackDoor.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─BlueScreen")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BlueScreen1(DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BlueScreen2(DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BlueScreen3(DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BlueScreen_xp_win7(DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      DelayedBlueScreen (DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      RegistryWriteBlueScreen (DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      RegistryWriteBlueScreenGeneralUse (DOS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─CobaltStrike_Trojanlinkage")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  Bitsadmin_TrojanExecution (LinkageWithCS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  Pl_TrojanExecution (LinkageWithCS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  PSL_TrojanExecution (LinkageWithCS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  PY_TrojanExecution (LinkageWithCS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  Regsvr32_TrojanExecution (LinkageWithCS).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─CobaltStrike_Payload")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.bin")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.c")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.cs")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.java")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.pl")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.py")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.rb")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.sct")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.txt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      payload.vba")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  └─CounterStrikeTrojanTutorial")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │          CounterStrike.jpg")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │          CounterStrikeTutorial.png")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─CodePrincipleInterpretation")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ArduinoKeyCodeBase.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      InstructionsOn_setup_loop_Methods.txt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      MSF_TrojanMakingTutorial.txt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Create_Account")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Create_Account.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─DNS Poisoner")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      DNS_Poisoner.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─DNSHijack")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      DOS_CommandSetMultipleDNS(DNSHijack).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      PSL_CommandSetMultipleDNS(DNSHijack).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Execute_Powershell_Script")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Execute_Powershell_Script.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Fork_Bomb")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Fork_Bomb.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Persistent_Fork_Bomb.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Hi_Chewy")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Chewbacca.wav")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Hi_Chewy.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Instant Shell")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Instant_Shell.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─KeyLogger")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      TimeBomb_KeyLogger.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Κeylogger.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Linux_Built-inReverseShell")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      LinuxReverseShell (CodeExecution).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      LinuxReverseShell(BashShell).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      LinuxReverseShell(PerlShell).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─MSF_Trojanlinkage")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.apk")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.asp")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.aspx")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.elf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.exe")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.jar")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.jsp")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.macho")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.php")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.pl")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.psl")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.py")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.sh")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      shell.war")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Shell_TrojanGenerationConfiguration.txt")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─OSX_Built-inReverseShell")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      OSX_SystemReverseConnection (dns_shell).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      OSX_SystemReverseConnection (perl_shell).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      OSX_SystemReverseConnection (ruby_shell).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─PayLoad Dropper")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Payload_dropper.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Remote_PS_Exec.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─PSL_FullScreen-HACKED")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─FullScreenHackedv0")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  │  get.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │  └─FullScreenHackedv")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │          FullScreenHackedv.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─FullScreenHackedv2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      FullScreenHackedv2.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      wall.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  └─FullScreenHackedv3[慎用]")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      │  get.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      └─FullScreenHackedv3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │              FullScreenHackedv3.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Rapid_Shell")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      az_qw_convert.sh")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Rapid_Shell.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Reverse_Shell")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Invoke-PowerShellTcpOneLine.ps1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Reverse_Shell.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─RickRoll_Update")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      RickRoll_Update.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─RunProgramOn_UDrive_ExpandScopeOfIntrusion")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─UdiskRun")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      UdiskRun.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─UdiskRunv2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      UdiskRunv2.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  └─UdiskRunv3")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │          UdiskRunv3.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─SAM Dumper")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      SAM_DUMPER.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Silly_Mouse")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Silly_Mouse.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Site_AWord_IntrusionCode")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AspSentenceTrojanWrite(webServerVersion).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AspSentenceTrojanWriting(websiteServerVersion-DynamicDecoding).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AspSentenceTrojanWriting(websiteServerVersion-ScriptEncoderEncryption).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AspxSentenceTrojanWrite(webServerVersion OverDog_OverDShield).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AspxSentenceTrojanWrite(webServerVersion).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      JspSentenceTrojanWritten (JSP_websiteServerUse).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      JspTrojanWrite(JSP_websiteServerUsing-non-Sentence).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      PHP_TrojanWrite(PHP_webServerUse-ClassBypass).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      PHP_TrojanWrite(PHP_webServerUse-XOR-Bypass).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      PHP_TrojanWrite(usedByPHP_websiteServer).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─SpecificFunctionCode")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      AddUserCode(Tools).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Alt-f4_Loop.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ChangePasswordOfAccountUsed+CloseSystemProcess+BlueScreen(Tool).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      EnablePSL_RemoteConnection(Tools).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ForcedDeletionOf360Processes(Tools).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ForceShutDownCommand(Tool).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Hide_CMD_Window(Display).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      MouseKeepsMoving(Tools).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      OpenPort445.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      OpenSpecified_webPage.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ShiftBackdoor.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      SimplyChangeAllUsersPasswords(TrickItem).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      SimplyShutDownMachine(TrickItem).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      TakeScreenshot_SendSpecifiedFTP_Address(Tool).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Talker")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Talker.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─TrojanDownloader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─CERTUTIL_DownLoader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      CERTUTIL_DownLoader_MSF.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─FTP_DownLoader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      FTP_DownloadNetcat_ConnectBackToShell(TrojanAttack).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─JAVA_DownLoader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      JavaTrojanWrite(TargetEnvironmentRunJava).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      server.java")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  ├─PSL_DownLoader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      Downloa_PSL_Trojan-Execute_aSecondTime.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      LinkServer_MSF_PSL_Download.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      LinkServer_PSL_Download.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_DownLoader0.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_DownLoader1.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_DownLoader2.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_DownLoader3.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_DownLoader4.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_Downloader_Win&Linux_General.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │      PSL_Writes_Bounces.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │  └─PY_DownLoader")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │          PyShellServer.py")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │          Py_TrojanWrite(TargetEnvironmentRunPython).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─UAC Bypass")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      UAC_BYPASS_MSCONFIG.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      UAC_Bypass_TaskMgr.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Ubuntu_InformationGathering")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BasicTerminalCommandsForUbuntu(Display).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      UbuntuInformationCollectionTXT_File(Information).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Wallpaper_Changer")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Wallpaper_Changer.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Wallpaper_Changer_macOS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Wallpaper_Changer_macOS")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Wallpaper_Prank")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Wallpaper_Prank.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Wi-Fi password stealer")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Wifikey-Grab.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WifiKey-Grab_Minimize-of-Shame.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─WiFi_ConnectionTrojan")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ForceConnectionToSpecifiedWiFi-DownloadPSL_TrojanRun.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─WiFi_PasswordAcquisition")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WiFiPasswordCapture(tool).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WiFiPasswordExport(tool).ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─WiFi_Profile_Grabber")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WiFi_Profile_Grabber.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─WiFi_Profile_Mailer")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WiFi_Profile_Mailer.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      WiFi_Profile_Mailer_New.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Wifi_Profile_Mailer_Update.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Windows Crasher")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      BSOD.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      ForkBomb.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Mayhem.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      UACBypassBSOD.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    ├─Windows Phisher")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      README.md")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Windows_Phisher.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │      Zeymare_Windows_Phisher.ino")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    │")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"    └─Window_Jammer")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"            Window_Jammer.ino")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=s("h2",{id:"star-history-历史star",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#star-history-历史star"},[s("span",null,"Star History / 历史Star")])],-1),E={href:"https://star-history.com/#only9464/Payload&Date",target:"_blank",rel:"noopener noreferrer"},P=s("img",{src:"https://api.star-history.com/svg?repos=only9464/Payload&type=Date",alt:"Star History Chart"},null,-1);function f(w,T){const n=e("ExternalLinkIcon");return h(),r("div",null,[k,s("p",null,[d,s("a",c,[p,l(n)]),s("a",o,[u,l(n)]),s("a",m,[g,l(n)]),s("a",y,[D,l(n)])]),A,s("ul",null,[s("li",null,[s("a",b,[i("Digispark ATTiny85 开发板"),l(n)])]),s("li",null,[i("正确"),s("a",v,[i("安装Digispark"),l(n)]),i("的"),s("a",C,[i("Arduino IDE"),l(n)])])]),B,_,S,s("p",null,[s("a",E,[P,l(n)])])])}const L=a(t,[["render",f],["__file","index.html.vue"]]),M=JSON.parse(`{"path":"/article/fs2ej5bs/","title":"BadUSB","lang":"zh-CN","frontmatter":{"title":"BadUSB","createTime":"2024/05/20 11:45:14","author":"only9464","tags":["网络安全","工具","BadUSB","Digispark","ATTINY85"],"permalink":"/article/fs2ej5bs/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"🏃‍♂️Prepare Before Running  / 前提准备","slug":"🏃‍♂️prepare-before-running-前提准备","link":"#🏃‍♂️prepare-before-running-前提准备","children":[]},{"level":2,"title":"File Structure / 文件结构","slug":"file-structure-文件结构","link":"#file-structure-文件结构","children":[]},{"level":2,"title":"Star History  /  历史Star","slug":"star-history-历史star","link":"#star-history-历史star","children":[]}],"isBlogPost":true,"readingTime":{"minutes":1.63,"words":490},"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"blog/Payload.md","categoryList":[{"type":10000,"name":"blog"}]}`);export{L as comp,M as data};
