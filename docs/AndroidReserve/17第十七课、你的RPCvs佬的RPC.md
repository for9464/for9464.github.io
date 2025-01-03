---
title: 【Android逆向-正己】第十七课：你的RPCvs佬的RPC
createTime: 2025/01/03 01:03:13
permalink: /article/6eifv374/
tags:
  - Android
  - 逆向
  - Android逆向
---



![](_assets_17/e8dd5433c357eda94f0db69d5fc0c9989444.webp)
# 一、课程目标

1.了解常见系统库的hook

2.了解frida_rpc
# 二、工具

1.教程Demo(更新)

2.jadx-gui

3.VS Code

4.jeb

5.IDLE

# 三、课程内容

## 1.Hook_Libart

`libart.so`: 在 Android 5.0（Lollipop）及更高版本中，`libart.so` 是 Android 运行时（ART，Android Runtime）的核心组件，它取代了之前的 Dalvik 虚拟机。可以在 `libart.so` 里找到 JNI 相关的实现。

PS:在高于安卓10的系统里，so的路径是/apex/com.android.runtime/lib64/libart.so，低于10的则在system/lib64/libart.so

| 函数名称                                                     | 参数                                                                          | 描述                                                                                                                                                       | 返回值                                   |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `RegisterNatives`                                            | `JNIEnv *env, jclass clazz, const JNINativeMethod *methods, jint nMethods`    | 反注册类的本地方法。类将返回到链接或注册了本地方法函数前的状态。该函数不应在本地代码中使用。相反，它可以为某些程序提供一种重新加载和重新链接本地库的途径。 | 成功时返回0；失败时返回负数              |
| `GetStringUTFChars`                                          | `JNIEnv*env, jstring string, jboolean *isCopy`                                | 通过JNIEnv接口指针调用，它将一个代表着Java虚拟机中的字符串jstring引用，转换成为一个UTF-8形式的C字符串                                                                            | -                                        |
| `NewStringUTF`                                               | `JNIEnv *env, const char *bytes`                                              | 以字节为单位返回字符串的 UTF-8 长度                                                                                                                        | 返回字符串的长度                         |
| `FindClass`                                                  | `JNIEnv *env, const char *name`                                               | 通过对象获取这个类。该函数比较简单，唯一注意的是对象不能为NULL，否则获取的class肯定返回也为NULL。                                                          | -                                        |
| `GetMethodID`                                                | `JNIEnv *env, jclass clazz, const char *name, const char *sig`                | 返回类或接口实例（非静态）方法的方法 ID。方法可在某个 clazz 的超类中定义，也可从 clazz 继承。GetMethodID() 可使未初始化的类初始化。                        | 方法ID，如果找不到指定的方法，则为NULL   |
| `GetStaticMethodID`                                          | `JNIEnv *env, jclass clazz, const char *name, const char *sig`                | 获取类对象的静态方法ID                                                              | 属性ID对象。如果操作失败，则返回NULL     |
| `GetFieldID`                                                 | `JNIEnv *env, jclass clazz, const char *name, const char *sig`                | 回Java类（非静态）域的属性ID。该域由其名称及签名指定。访问器函数的GettypeField 及 SettypeField系列使用域 ID 检索对象域。GetFieldID() 不能用于获取数组的长度域。应使用GetArrayLength()。 | -                                        |
| `GetStaticFieldID`                                           | `JNIEnv *env,jclass clazz, const char *name, const char *sig`                 | 获取类的静态域ID方法                                                                                                                                       | -                                        |
| `Call<type>Method`, `Call<type>MethodA`, `Call<type>MethodV` | `JNIEnv *env, jobject obj, jmethodID methodID, .../jvalue *args/va_list args` | 这三个操作的方法用于从本地方法调用Java 实例方法。它们的差别仅在于向其所调用的方法传递参数时所用的机制。                                                    | NativeType，具体的返回值取决于调用的类型 |
|                                                              |                                                                               |                                                                                                                                                            |                                          |

![图片](_assets_17/0db17e0b880167caae73ae1d053047827157.webp)

[frida_hook_libart](https://github.com/lasting-yang/frida_hook_libart)

yang神的hook三件套

简单介绍:

hook_art.js：hook art中的jni函数并且有打印参数和返回值，使用之前记得先加上过滤的so名称，另外高版本的系统也需要在脚本68行的过滤修改成`_ZN3art3JNI`(最好是加载libart.so查看一下)，这个脚本包含了hook_RegisterNatives.js的内容(但不太稳定，做个了解即可)

hook_RegisterNatives.js：hook打印动态注册的函数
![图片](_assets_17/e6e9f54a157df42bc4dbf4bd5b853a2f1637.webp)
hook_artmethod.js：打印所有java函数的调用
![图片](_assets_17/8e23e0092e459ba360f377debbdc0fce4256.webp)
```
frida -U -f com.zj.wuaipojie -l hook_RegisterNatives.js --no-pause
```
`Hook_RegisterNatives`
```js
function find_RegisterNatives(params) {
    // 在 libart.so 库中枚举所有符号（函数、变量等）
    let symbols = Module.enumerateSymbolsSync("libart.so");  
    let addrRegisterNatives = null; // 用于存储 RegisterNatives 方法的地址

    // 遍历所有符号来查找 RegisterNatives 方法
    for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i]; // 当前遍历到的符号

        // 检查符号名称是否符合 RegisterNatives 方法的特征
        if (symbol.name.indexOf("art") >= 0 && //RegisterNatives 是 ART（Android Runtime）环境的一部分
                symbol.name.indexOf("JNI") >= 0 &&  //RegisterNatives 是 JNI（Java Native Interface）的一部分
                symbol.name.indexOf("RegisterNatives") >= 0 && //检查符号名称中是否包含 "RegisterNatives" 字样。
		symbol.name.indexOf("CheckJNI") < 0) { //CheckJNI 是用于调试和验证 JNI 调用的工具，如果不过滤，会有两个RegisterNatives，而带有CheckJNI的系统一般是关闭的，所有要过滤掉
            addrRegisterNatives = symbol.address; // 保存方法地址
            console.log("RegisterNatives is at ", symbol.address, symbol.name); // 输出地址和名称
            hook_RegisterNatives(addrRegisterNatives); // 调用hook函数
        }
    }
}


function hook_RegisterNatives(addrRegisterNatives) {
    // 确保提供的地址不为空
    if (addrRegisterNatives != null) {
        // 使用 Frida 的 Interceptor hook指定地址的函数
        Interceptor.attach(addrRegisterNatives, {
            // 当函数被调用时执行的代码
            onEnter: function (args) {
                // 打印调用方法的数量
                console.log("[RegisterNatives] method_count:", args[3]);

                // 获取 Java 类并打印类名
                let java_class = args[1];
                let class_name = Java.vm.tryGetEnv().getClassName(java_class);
                
                let methods_ptr = ptr(args[2]); // 获取方法数组的指针
                let method_count = parseInt(args[3]); // 获取方法数量

                // 遍历所有方法
				//jni方法里包含三个部分：方法名指针、方法签名指针和方法函数指针。每个指针在内存中占用 Process.pointerSize 的空间（这是因为在 32 位系统中指针大小是 4 字节，在 64 位系统中是 8 字节）。为了提高兼容性，统一用Process.pointerSize，系统会自动根据架构来适配
                for (let i = 0; i < method_count; i++) {
                    // 读取方法的名称、签名和函数指针
                    let name_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3));//读取方法名的指针。这是每个方法结构体的第一部分，所以直接从起始地址读取。
                    let sig_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize));//读取方法签名的指针。这是结构体的第二部分，所以在起始地址的基础上增加了一个指针的大小
                    let fnPtr_ptr = Memory.readPointer(methods_ptr.add(i * Process.pointerSize * 3 + Process.pointerSize * 2));//读取方法函数的指针。这是结构体的第三部分，所以在起始地址的基础上增加了两个指针的大小（Process.pointerSize * 2）。

                    // 将指针内容转换为字符串
                    let name = Memory.readCString(name_ptr);
                    let sig = Memory.readCString(sig_ptr);

                    // 获取方法的调试符号
                    let symbol = DebugSymbol.fromAddress(fnPtr_ptr);

                    // 打印每个注册的方法的相关信息
                    console.log("[RegisterNatives] java_class:", class_name, "name:", name, "sig:", sig, "fnPtr:", fnPtr_ptr,  " fnOffset:", symbol, " callee:", DebugSymbol.fromAddress(this.returnAddress));
                }
            }
        });
    }
}

setImmediate(find_RegisterNatives); // 立即执行 find_RegisterNatives 函数
```

`hook_GetStringUTFChars`
![图片](_assets_17/736d19fb6b13e4941e89ff14a865f1dc2087.webp)
```js
function hook_GetStringUTFChars() {
    var GetStringUTFChars_addr = null;
    // jni 系统函数都在 libart.so 中
    var module_libart = Process.findModuleByName("libart.so");
    var symbols = module_libart.enumerateSymbols();
    for (var i = 0; i < symbols.length; i++) {
        var name = symbols[i].name;
        if ((name.indexOf("JNI") >= 0) 
            && (name.indexOf("CheckJNI") == -1) 
            && (name.indexOf("art") >= 0)) {
            if (name.indexOf("GetStringUTFChars") >= 0) {
                // 获取到指定 jni 方法地址
                GetStringUTFChars_addr = symbols[i].address;
            }
        }
    }

    Java.perform(function(){
        Interceptor.attach(GetStringUTFChars_addr, {
            onEnter: function(args){

            }, onLeave: function(retval){
                // retval const char*
				console.log("GetStringUTFChars onLeave : ", ptr(retval).readCString());
				if(ptr(retval).readCString().indexOf("普通") >=0){
					console.log("GetStringUTFChars onLeave : ", ptr(retval).readCString());
					console.log(Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n') + '\n');
				}

            }
        })
    })
}
function main(){
    Java.perform(function(){
        hook_GetStringUTFChars();
    });
} 
setImmediate(main);
```

## 2.Hook_Libc

`libc.so`: 这是一个标准的 C 语言库，用于提供基本的系统调用和功能，如文件操作、字符串处理、内存分配等。在Android系统中，`libc` 是最基础的库之一。


| 类别           | 函数名称       | 参数                                                                                       | 描述                            |
| -------------- | -------------- | ------------------------------------------------------------------------------------------ | ------------------------------- |
| 字符串类操作   | strcpy         | `char *dest, const char *src`                                                              | 将字符串 src 复制到 dest        |
|                | strcat         | `char *dest, const char *src`                                                              | 将字符串 src 连接到 dest 的末尾 |
|                | strlen         | `const char *str`                                                                          | 返回 str 的长度                 |
|                | strcmp         | `const char *str1, const char *str2`                                                       | 比较两个字符串                  |
| 文件类操作     | fopen          | `const char *filename, const char *mode`                                                   | 打开文件                        |
|                | fread          | `void *ptr, size_t size, size_t count, FILE *stream`                                       | 从文件读取数据                  |
|                | fwrite         | `const void *ptr, size_t size, size_t count, FILE *stream`                                 | 写入数据到文件                  |
|                | fclose         | `FILE *stream`                                                                             | 关闭文件                        |
| 网络IO类操作   | socket         | `int domain, int type, int protocol`                                                       | 创建网络套接字                  |
|                | connect        | `int sockfd, const struct sockaddr *addr, socklen_t addrlen`                               | 连接套接字                      |
|                | recv           | `int sockfd, void *buf, size_t len, int flags`                                             | 从套接字接收数据                |
|                | send           | `int sockfd, const void *buf, size_t len, int flags`                                       | 通过套接字发送数据              |
| 线程类操作     | pthread_create | `pthread_t *thread, const pthread_attr_t *attr, void *(*start_routine)(void *), void *arg` | 创建线程                        |
| 进程控制操作   | kill           | `pid_t pid, int sig`                                                                       | 向指定进程发送信号              |
| 系统属性查询操作   |  `__system_property_get`             | `const char *name, char *value`         | 从Android系统属性服务中读取指定属性的值   |
|    | uname                | `struct utsname *buf`                   | 获取当前系统的名称、版本和其他相关信息   |
|    | sysconf              | `int name`                              | 获取运行时系统的配置信息，如CPU数量、页大小 |

`hook_kill`

![图片](_assets_17/1e77b1180d8562a0eb8017c2d90a818d5780.webp)
```js
function replaceKILL() {
    // 查找libc.so库中kill函数的地址
    var kill_addr = Module.findExportByName("libc.so", "kill");
    // 使用Interceptor.replace来替换kill函数
    Interceptor.replace(kill_addr, new NativeCallback(function (arg0, arg1) {
        // 当kill函数被调用时，打印第一个参数（通常是进程ID）
        console.log("arg0=> ", arg0);
        // 打印第二个参数（通常是发送的信号）
        console.log("arg1=> ", arg1);
        // 打印调用kill函数的堆栈跟踪信息
        console.log('libc.so!kill called from:\n' +
            Thread.backtrace(this.context, Backtracer.ACCURATE)
            .map(DebugSymbol.fromAddress).join('\n') + '\n');
    }, "int", ["int", "int"]))
}

```
`hook_pthread_create`6
```js
function hook_pthread_create(){
    //hook反调试
    var pthread_create_addr = Module.findExportByName("libc.so", "pthread_create");
    console.log("pthread_create_addr: ", pthread_create_addr);
    Interceptor.attach(pthread_create_addr,{
        onEnter:function(args){
            console.log(args[0], args[1], args[2], args[4]);
        },onLeave:function(retval){
            console.log("retval is =>",retval)
        }
    })
}
```
`hook_str_cmp`
![图片](_assets_17/c8871d492cda099d0676d4736744e6c88770.webp)
```js
function hook_strcmp() {
    var pt_strcmp = Module.findExportByName("libc.so", 'strcmp');
    Interceptor.attach(pt_strcmp, {
        onEnter: function (args) {
            var str1 = args[0].readCString();
            var str2 = args[1].readCString();
            if (str2.indexOf("hh") !== -1) {
                console.log("strcmp-->", str1, str2);
                this.printStack = true;
            }
        }, onLeave: function (retval) {
            if (this.printStack) { 
                var stack = Thread.backtrace(this.context, Backtracer.ACCURATE)
                    .map(DebugSymbol.fromAddress).join("\n");
                console.log("Stack trace:\n" + stack);
            }
        }
    })
}

```
## 3.Hook_Libdl

`libdl.so`是一个处理动态链接和加载的标准库，它提供了`dlopen`、`dlclose`、`dlsym`等函数，用于在运行时动态地加载和使用共享库

| 类别           | 函数名称       | 参数                                                                                       | 描述                            |
| -------------- | -------------- | ------------------------------------------------------------------------------------------ | ------------------------------- |
| 动态链接库操作 | dlopen         | `const char *filename, int flag`                                                           | 打开动态链接库文件              |
|                | dlsym          | `void *handle, const char *symbol`                                                         | 从动态链接库中获取符号地址      |

`Hook_dlsym`获取jni静态注册方法地址
![图片](_assets_17/beaaaa5baa4343112edc32e063495a3f1535.webp)
```JS
function hook_dlsym() {
    var dlsymAddr = Module.findExportByName("libdl.so", "dlsym");
    Interceptor.attach(dlsymAddr, {
        onEnter: function(args) {
            this.args1 = args[1];
        },
        onLeave: function(retval) {
            var module = Process.findModuleByAddress(retval);
            if (module === null) return; 
            console.log(this.args1.readCString(), module.name, retval, retval.sub(module.base));
        }
    });
}
```

## 4.Hook_Linker
Linker是Android系统动态库so的加载器/链接器，通过android源码分析 init 和 init_array 是在 callConstructor 中被调用的
![图片](_assets_17/da9478cb5246e031efadb5715dbfe3d67084.webp)

`hookInit和hookInitArray`
[frida hook init_array自吐新解](https://bbs.kanxue.com/thread-280135.htm)

经过安卓源码比对，从Android 8 ~ 14，结构体中`init_array`的位置都很稳定，提取部分头文件信息在CModule中定义一个soinfo结构体，接着定义一个接受一个`soinfo`指针参数和一个`callback`函数的函数，输出`init_array`信息
```js
function hook_call_constructors() {
    // 初始化变量
    let get_soname = null;
    let call_constructors_addr = null;
    let hook_call_constructors_addr = true;
    // 根据进程的指针大小找到对应的linker模块
    let linker = null;
    if (Process.pointerSize == 4) {
        linker = Process.findModuleByName("linker");
    } else {
        linker = Process.findModuleByName("linker64");
    }
    // 枚举linker模块中的所有符号
    let symbols = linker.enumerateSymbols();
    for (let index = 0; index < symbols.length; index++) {
        let symbol = symbols[index];
        // 查找名为"__dl__ZN6soinfo17call_constructorsEv"的符号地址
        if (symbol.name == "__dl__ZN6soinfo17call_constructorsEv") {
            call_constructors_addr = symbol.address;
        // 查找名为"__dl__ZNK6soinfo10get_sonameEv"的符号地址，获取soname
        } else if (symbol.name == "__dl__ZNK6soinfo10get_sonameEv") {
            get_soname = new NativeFunction(symbol.address, "pointer", ["pointer"]);
        }
    }
    // 如果找到了所有需要的地址和函数
    if (hook_call_constructors_addr && call_constructors_addr && get_soname) {
        // 挂钩call_constructors函数
        Interceptor.attach(call_constructors_addr,{
            onEnter: function(args){
                // 从参数获取soinfo对象
                let soinfo = args[0];
                // 使用get_soname函数获取模块名称
                let soname = get_soname(soinfo).readCString();
                // 调用tell_init_info函数并传递一个回调，用于记录构造函数的调用信息
                tell_init_info(soinfo, new NativeCallback((count, init_array_ptr, init_func) => {
                    console.log(`[call_constructors] ${soname} count:${count}`);
                    console.log(`[call_constructors] init_array_ptr:${init_array_ptr}`);
                    console.log(`[call_constructors] init_func:${init_func} -> ${get_addr_info(init_func)}`);
                    // 遍历所有初始化函数，并打印它们的信息
                    for (let index = 0; index < count; index++) {
                        let init_array_func = init_array_ptr.add(Process.pointerSize * index).readPointer();
                        let func_info = get_addr_info(init_array_func);
                        console.log(`[call_constructors] init_array:${index} ${init_array_func} -> ${func_info}`);
                    }
                }, "void", ["int", "pointer", "pointer"]));
            }
        });
    }
}

```
## 5.frida_rpc
frida 提供了一种跨平台的 rpc(就是Remote Procedure Call 远程过程调用) 机制，通过 frida rpc 可以在主机和目标设备之间进行通信，并在目标设备上执行代码，简单理解就是可以不需要分析某些复杂加密，通过传入参数获取返回值，进而来实现python或易语言来调用的一系列操作，多用于爬虫。

`包名附加进程`
```python
import frida, sys
jsCode = """ ...... """
script.exports.rpcfunc()
process = frida.get_usb_device().attach('包名') # 获取USB设备并附加到应用
script = process.create_script(jsCode) # 创建并加载脚本
script.load()# 执行脚本
sys.stdin.read()# 保持脚本运行状态，防止它执行完毕后立即退出
```
`spawn方式启动`
```python
import frida, sys
jsCode = """ ...... """
script.exports.rpcfunc()
device = frida.get_usb_device()
pid = device.spawn(["包名"])    #以挂起方式创建进程
process = device.attach(pid)
script = process.create_script(jsCode)
script.load()
device.resume(pid)  #加载完脚本, 恢复进程运行
sys.stdin.read()
```
`连接非标准端口`
```python
import frida, sys
jsCode = """ ...... """
script.exports.rpcfunc()
process = frida.get_device_manager().add_remote_device('192.168.1.22:6666').attach('包名')
script = process.create_script(jsCode)
script.load()
sys.stdin.read()
```

```js
function get_url() {
    let ChallengeNinth = Java.use("com.zj.wuaipojie.ui.ChallengeNinth");
    ChallengeNinth["updateUI"].implementation = function (list) {
        let ret = this.updateUI(list);
        // 获取List的大小
        var size = list.size();
        // 遍历并打印List中的每个ImageEntity对象
        for (var i = 0; i < size; i++) {
            var imageEntity = Java.cast(list.get(i), Java.use('com.zj.wuaipojie.entity.ImageEntity'));
            console.log(imageEntity.name.value + imageEntity.cover.value);
        }
        return ret;
    };
}

```

需要提前pip安装好的几个库
```
frida-tools==9.2.4，uvicorn，fastapi，requests
```
```python
# 导入需要的库
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import frida, sys
import uvicorn

# 创建FastAPI应用实例
app = FastAPI()

# 定义一个GET请求的路由'/download-images/'
@app.get("/download-images/")
def download_images():
    # 定义处理frida消息的回调函数
    def on_message(message, data):
        message_type = message['type']
        if message_type == 'send':
            print('[* message]', message['payload'])
        elif message_type == 'error':
            stack = message['stack']
            print('[* error]', stack)
        else:
            print(message)

    # Frida脚本代码，用于在目标应用内部执行
    jsCode = """
    function getinfo(){
        var result = [];
        Java.perform(function(){
            Java.choose("com.zj.wuaipojie.ui.ChallengeNinth",{
                onMatch:function(instance){
                    instance.setupScrollListener(); // 调用目标方法
                },
                onComplete:function(){}
            });
            
            Java.choose("com.zj.wuaipojie.entity.ImageEntity",{
                onMatch:function(instance){
                    var name = instance.getName();
                    var cover = instance.getCover();
                    result.push({name: name, cover: cover}); // 收集数据
                },
                onComplete:function(){}
            });
        });
        return result; // 返回收集的结果
    }
    rpc.exports = {
        getinfo: getinfo // 导出函数供外部调用
    };
    """

    # 使用frida连接到设备并附加到指定进程
    process = frida.get_usb_device().attach("com.zj.wuaipojie")
    # 创建并加载Frida脚本
    script = process.create_script(jsCode)
    script.on("message", on_message)  # 设置消息处理回调
    script.load()  # 加载脚本
    getcovers = script.exports.getinfo()  # 调用脚本中的函数获取信息
    print(getcovers)

    # 返回获取的信息作为JSON响应
    return JSONResponse(content=getcovers)

# 主入口，运行FastAPI应用
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)  # 使用uvicorn作为ASGI服务器启动应用


```

```
写一段python的requests代码，访问http://127.0.0.1:8000/download-images/端口，会获得如下的json数据，按照名字把图片爬取到同目录的pic文件夹里，并写好注释
[{
"name": "霸王别姬",
"cover": "https://p0.meituan.net/movie/ce4da3e03e655b5b88ed31b5cd7896cf62472.jpg@464w_644h_1e_1c"
},{
"name": "这个杀手不太冷",
"cover": "https://p1.meituan.net/movie/6bea9af4524dfbd0b668eaa7e187c3df767253.jpg@464w_644h_1e_1c"
},{
"name": "肖申克的救赎",
"cover": "https://p0.meituan.net/movie/283292171619cdfd5b240c8fd093f1eb255670.jpg@464w_644h_1e_1c"
}]
```
# 五、答疑

待更新

# 六、视频及课件地址


[百度云](https://pan.baidu.com/s/1cFWTLn14jeWfpXxlx3syYw?pwd=nqu9)

[阿里云](https://www.aliyundrive.com/s/TJoKMK6du6x)

[哔哩哔哩](https://www.bilibili.com/video/BV1wT411N7sV/?spm_id_from=333.788&vd_source=6dde16dc6479f00694baaf73a2225452)

PS:解压密码都是52pj，阿里云由于不能分享压缩包，所以下载exe文件，双击自解压

# 七、其他章节
[《安卓逆向这档事》一、模拟器环境搭建](https://www.52pojie.cn/thread-1695141-1-1.html)  
[《安卓逆向这档事》二、初识APK文件结构、双开、汉化、基础修改](https://www.52pojie.cn/thread-1695796-1-1.html)  
[《安卓逆向这档事》三、初识smail，vip终结者](https://www.52pojie.cn/thread-1701353-1-1.html)  
[《安卓逆向这档事》四、恭喜你获得广告&弹窗静默卡](https://www.52pojie.cn/thread-1706691-1-1.html)  
[《安卓逆向这档事》五、1000-7=？&动态调试&Log插桩](https://www.52pojie.cn/thread-1714727-1-1.html)  
[《安卓逆向这档事》六、校验的N次方-签名校验对抗、PM代{过}{滤}理、IO重定向](https://www.52pojie.cn/thread-1731181-1-1.html)  
[《安卓逆向这档事》七、Sorry，会Hook真的可以为所欲为-Xposed快速上手(上)模块编写,常用Api](https://www.52pojie.cn/thread-1740944-1-1.html)  
[《安卓逆向这档事》八、Sorry，会Hook真的可以为所欲为-xposed快速上手(下)快速hook](https://www.52pojie.cn/thread-1748081-1-1.html)  
[《安卓逆向这档事》九、密码学基础、算法自吐、非标准加密对抗](https://www.52pojie.cn/thread-1762225-1-1.html)  
[《安卓逆向这档事》十、不是我说，有了IDA还要什么女朋友？](https://www.52pojie.cn/thread-1787667-1-1.html)  
[《安卓逆向这档事》十二、大佬帮我分析一下](https://www.52pojie.cn/thread-1809646-1-1.html)  
[《安卓逆向这档事》番外实战篇1-某电影视全家桶](https://www.52pojie.cn/thread-1814917-1-1.html)  
[《安卓逆向这档事》十三、是时候学习一下Frida一把梭了(上)](https://www.52pojie.cn/thread-1823118-1-1.html)  
[《安卓逆向这档事》十四、是时候学习一下Frida一把梭了(中)](https://www.52pojie.cn/thread-1838539-1-1.html)  
[《安卓逆向这档事》十五、是时候学习一下Frida一把梭了(下)](https://www.52pojie.cn/thread-1840174-1-1.html)  
[《安卓逆向这档事》十六、是时候学习一下Frida一把梭了(终)](https://www.52pojie.cn/thread-1859820-1-1.html)  
[《安卓逆向这档事》十七、你的RPCvs佬的RPC](https://www.52pojie.cn/thread-1892127-1-1.html#/)  
[《安卓逆向这档事》番外实战篇2-【2024春节】解题领红包活动，启动!](https://www.52pojie.cn/thread-1893708-1-1.html#/)  
[《安卓逆向这档事》十八、表哥，你也不想你的Frida被检测吧!(上)](https://www.52pojie.cn/thread-1921073-1-1.html)  
[《安卓逆向这档事》十九、表哥，你也不想你的Frida被检测吧!(下)](https://www.52pojie.cn/thread-1938862-1-1.html)  
[《安卓逆向这档事》二十、抓包学得好，牢饭吃得饱(上)](https://www.52pojie.cn/thread-1945285-1-1.html)  
[《安卓逆向这档事》番外实战篇3-拨云见日之浅谈Flutter逆向](https://www.52pojie.cn/thread-1951619-1-1.html)  
[《安卓逆向这档事》第二十一课、抓包学得好，牢饭吃得饱(中)](https://www.52pojie.cn/thread-1967845-1-1.html)
[《安卓逆向这档事》第二十二课、抓包学得好，牢饭吃得饱(下)](https://www.52pojie.cn/thread-1982444-1-1.html)
[《安卓逆向这档事》第二十三课、黑盒魔法之Unidbg ](https://www.52pojie.cn/thread-1995107-1-1.html)  
# 八、参考文档
[JNI_doc](http://luori366.github.io/JNI_doc/jni_function_mannual.html)

[安卓JNI精细化讲解，让你彻底了解JNI（二）：用法解析](https://www.cnblogs.com/qixingchao/p/11911787.html)

[android逆向奇技淫巧二十六：基础库的hook&x音检测frida方式之一（十一）](https://www.cnblogs.com/theseventhson/p/16110951.html)

[so逆向筑基-hook init init_array 和JNI_OnLoad](https://www.jianshu.com/p/59d1d3054abe)

[frida hook so](https://kevinspider.github.io/frida/frida-hook-so/)

[Android&Linker学习笔记](https://wooyun.js.org/drops/Android%20Linker%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html)
