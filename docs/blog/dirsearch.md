---
title: dirsearch
createTime: 2024/05/15 11:45:14
author: only9464
tags:
  - 网络安全
  - 工具
  - 信息搜集
permalink: /article/ve530z8f/
---
用法：dirsearch.py [-u|--url] 目标 [-e|--extensions] 扩展名 [选项]

选项:
```powershell
  --version             显示程序的版本号并退出
  -h, --help            显示此帮助消息并退出
```
必需：
  -u URL, --url=URL     目标URL，可以使用多个选项指定多个目标URL
  -l PATH, --urls-file=PATH
                        URL列表文件
  --stdin               从标准输入读取URL
  --cidr=CIDR           目标CIDR
  --raw=PATH            从文件加载原始HTTP请求（使用'--scheme'标志设置方案）
  -s SESSION_FILE, --session=SESSION_FILE
                        会话文件
  --config=PATH         配置文件路径（默认为'DIRSEARCH_CONFIG'环境变量，否则为'config.ini'）

字典设置:
  -w WORDLISTS, --wordlists=WORDLISTS
                        单词列表文件或包含单词列表文件的目录（以逗号分隔）
  -e EXTENSIONS, --extensions=EXTENSIONS
                        扩展名列表，以逗号分隔（例如：php,asp）
  -f, --force-extensions
                        在每个单词列表条目的末尾添加扩展名。默认情况下，dirsearch只替换%EXT%关键字为扩展名。
  -O, --overwrite-extensions
                        使用指定的扩展名覆盖单词列表中的其他扩展名（通过'-e'选择）
  --exclude-extensions=EXTENSIONS
                        排除的扩展名列表，以逗号分隔（例如：asp,jsp）
  --remove-extensions   删除所有路径中的扩展名（例如：admin.php -> admin）
  --prefixes=PREFIXES   将自定义前缀添加到所有单词列表条目中（以逗号分隔）
  --suffixes=SUFFIXES   将自定义后缀添加到所有单词列表条目中，忽略目录（以逗号分隔）
  -U, --uppercase       单词列表转为大写
  -L, --lowercase       单词列表转为小写
  -C, --capital         单词首字母大写

通用设置:
  -t THREADS, --threads=THREADS
                        线程数
  -r, --recursive       递归地进行强制破解
  --deep-recursive      在每个目录深度上执行递归扫描（例如：api/users -> api/）
  --force-recursive     对找到的每个路径执行递归强制破解，而不仅仅是目录
  -R DEPTH, --max-recursion-depth=DEPTH
                        最大递归深度
  --recursion-status=CODES
                        用于执行递归扫描的有效状态码，支持范围（以逗号分隔）
  --subdirs=SUBDIRS     扫描给定URL的子目录（以逗号分隔）
  --exclude-subdirs=SUBDIRS
                        在递归扫描期间排除以下子目录（以逗号分隔）
  -i CODES, --include-status=CODES
                        包括的状态码，以逗号分隔，支持范围（例如：200,300-399）
  -x CODES, --exclude-status=CODES
                        排除的状态码，以逗号分隔，支持范围（例如：301,500-599）
  --exclude-sizes=SIZES
                        根据大小排除响应，以逗号分隔（例如：0B,4KB）
  --exclude-text=TEXTS  根据文本排除响应，可以使用多个标志
  --exclude-regex=REGEX
                        根据正则表达式排除响应
  --exclude-redirect=STRING
                        如果此正则表达式（或文本）与重定向URL匹配，则排除响应（例如：'/index.html'）
  --exclude-response=PATH
                        排除类似于此页面响应的响应，路径作为输入（例如：404.html）
  --skip-on-status=CODES
                        每当命中这些状态码之一时跳过目标，以逗号分隔，支持范围
  --min-response-size=LENGTH
                        响应的最小长度
  --max-response-size=LENGTH
                        响应的最大长度
  --max-time=SECONDS    扫描的最大运行时间
  --exit-on-error       发生错误时退出

请求设置:
  -m METHOD, --http-method=METHOD
                        HTTP请求方法（默认为GET）
  -d DATA, --data=DATA  HTTP请求数据
  --data-file=PATH      包含HTTP请求数据的文件
  -H HEADERS, --header=HEADERS
                        HTTP请求标头，可以使用多个标志
  --headers-file=PATH   包含HTTP请求标头的文件
  -F, --follow-redirects
                        跟随HTTP重定向
  --random-agent        每个请求选择一个随机User-Agent
  --auth=CREDENTIAL     认证凭据（例如：user:password或bearer token）
  --auth-type=TYPE      认证类型（basic、digest、bearer、ntlm、jwt）
  --cert-file=PATH      包含客户端证书的文件
  --key-file=PATH       包含客户端证书私钥的文件（未加密）
  --user-agent=USER_AGENT
  --cookie=COOKIE

连接设置:
  --timeout=TIMEOUT     连接超时时间
  --delay=DELAY         请求之间的延迟
  -p PROXY, --proxy=PROXY
                        代理URL（HTTP/SOCKS），可以使用多个标志
  --proxies-file=PATH   包含代理服务器的文件
  --proxy-auth=CREDENTIAL
                        代理认证凭据
  --replay-proxy=PROXY  用于重放已发现路径的代理
  --tor                 使用Tor网络作为代理
  --scheme=SCHEME       原始请求的协议或URL中没有协议时使用的协议（默认为自动检测）
  --max-rate=RATE       每秒请求数最大值
  --retries=RETRIES     失败请求的重试次数
  --ip=IP               服务器IP地址

高级设置:
  --crawl               在响应中爬取新路径

显示设置:
  --full-url            在输出中显示完整URL（在静默模式下自动启用）
  --redirects-history   显示重定向历史记录
  --no-color            不使用彩色输出
  -q, --quiet-mode      安静模式

输出设置:
  -o PATH/URL, --output=PATH/URL
                        输出文件或MySQL/PostgreSQL数据库URL（格式：
                        scheme://[username:password@]host[:port]/database-
                        name）
  --format=FORMAT       报告格式（可用：simple、plain、json、xml、md、csv、html、
                        sqlite、mysql、postgresql）
  --log=PATH            日志文件

有关示例配置文件，请参见“config.ini”

常见Payload
1.扫描单个URL，并限制线程数和扩展名：

python dirsearch.py -u http://example.com -t 10 -e php,asp --exclude-extensions=html

该命令将对 http://example.com 进行目录扫描，使用最多 10 个线程并仅检查扩展名为 php 和 asp 的路径，同时排除扩展名为 html 的路径。

2.从URL列表文件中批量扫描：

python dirsearch.py -l urls.txt -t 5 -e php

该命令将从 urls.txt 文件中读取目标URL列表，并使用最多 5 个线程对每个URL进行目录扫描，仅检查扩展名为 php 的路径。

3.使用自定义字典和深度递归扫描：

python dirsearch.py -u http://example.com -w custom-wordlist.txt -r --deep-recursive

该命令将对 http://example.com 进行目录扫描，使用自定义的单词列表文件 custom-wordlist.txt，并启用深度递归扫描，即在每个目录的所有深度上执行递归扫描。

4.在请求中使用自定义HTTP头：

python dirsearch.py -u http://example.com -H "X-Custom-Header: Value" -H "Authorization: Bearer token"

该命令将对 http://example.com 进行目录扫描，并在每个请求中包含自定义的HTTP头，如 X-Custom-Header 和 Authorization。

5.指定线程数和延迟时间：

python dirsearch.py -u http://example.com -t 20 --delay 0.5

上述命令将使用20个线程并设置每个请求之间的延迟为0.5秒。

6.使用自定义的请求头和超时时间：

python dirsearch.py -u http://example.com -H "Custom-Header: value" --timeout 10

这个命令将在每个请求中添加一个自定义的请求头 “Custom-Header: value”，并将超时时间设置为10秒。

7.包含和排除特定状态码：

python dirsearch.py -u http://example.com -i 200,302 -x 404,500

上述命令将只包含状态码为200和302的响应，并排除状态码为404和500的响应。

8.使用代理进行扫描：

python dirsearch.py -u http://example.com -p http://127.0.0.1:8080

这个命令将通过指定的HTTP代理（例如Burp Suite）对目标URL进行扫描。

9.保存输出到文件中：

python dirsearch.py -u http://example.com -o output.txt

上述命令将扫描结果输出到指定的文件 output.txt。

10.使用代理链进行扫描：

python dirsearch.py -u http://example.com -p http://proxy1:8080 -p http://proxy2:8080

上述命令将通过两个代理服务器 proxy1 和 proxy2 进行目标URL的扫描。

11.从标准输入读取URL：

cat urls.txt | python dirsearch.py --stdin -t 10

这个命令通过管道从 urls.txt 中读取URL，并使用最多 10 个线程对每个URL进行目录扫描。

12.启用递归扫描和重定向跟随：

python dirsearch.py -u http://example.com -r -F

上述命令将启用目录的递归扫描，并且在扫描时跟随HTTP重定向。

13.排除指定大小范围的响应：

python dirsearch.py -u http://example.com --exclude-sizes 0-100B,500KB-1MB

该命令将排除大小在 0 到 100 字节以及 500千字节到 1 兆字节范围内的响应。

14.设定最大运行时间和最大重试次数：

python dirsearch.py -u http://example.com --max-time 300 --retries 5

上述命令将设置最长运行时间为 300 秒，并允许失败请求最多重试 5 次。

15.指定自定义的User-Agent头：

python dirsearch.py -u http://example.com --user-agent "Custom User Agent"

上述命令将在HTTP请求中指定自定义的User-Agent头。

16.使用代理认证进行扫描：

python dirsearch.py -u http://example.com -p http://proxy.example.com --proxy-auth "username:password"

这个命令将使用指定的代理服务器 proxy.example.com 进行扫描，并提供代理认证的用户名和密码。

17.启用递归扫描并限制最大递归深度：

python dirsearch.py -u http://example.com -r -R 5

上述命令将启用递归目录扫描，并限制最大递归深度为5层。

18.排除特定文本出现的响应：

python dirsearch.py -u http://example.com --exclude-text "Not Found" --exclude-text "Error"

该命令将排除响应中包含指定文本（如 “Not Found” 和 “Error”）的路径。

19.设置最小和最大响应长度：

python dirsearch.py -u http://example.com --min-response-size 1000 --max-response-size 50000

上述命令将只包含响应长度在1000到50000字节之间的路径。