window.post={"title":"Android及Robotium学习总结【环境变量，真机调试及根据id模拟按键】","date":"2012-10-06 16:32:15","cate":"android","tags":[],"imgs":{"7C7FC43D6A0B46FD8AEAF80591CED8CF":"http://s11.sinaimg.cn/middle/6abda9bcgcb6007e5356a&690","50F7E7B794EE4B448CB687FDC194F927":"http://s3.sinaimg.cn/middle/6abda9bcgcb600f5c3eb2&690","A1D028BFB10D4A06ACD99AF6C33A35EE":"http://s7.sinaimg.cn/middle/6abda9bcgcb60181d4c36&690","EB2B9FA5DC3640B6B11649AE9F9B9E7D":"http://s7.sinaimg.cn/middle/6abda9bcgcb601f0e8ee6&690","B26DC1AFCE3A4C4F8B67EE500B130239":"http://s16.sinaimg.cn/middle/6abda9bcgcb601fa17eaf&690","893CB2071C9C4C1898B2E9EE43AE6D8B":"http://s7.sinaimg.cn/middle/6abda9bcgcb60575e1a96&690","2252879AAE9144D4A27498589192E837":"http://s10.sinaimg.cn/middle/6abda9bcgcb60579b2e29&690","9688EC8EFA0F40A1B92020082C51179D":"http://s5.sinaimg.cn/middle/6abda9bcgcb605e2cf9c4&690","6EEF268B55644E31AA28CD30B4E6EA73":"http://s7.sinaimg.cn/middle/6abda9bcgcb605e75db66&690","9E356DB13895409BB33E187760B8704E":"http://s14.sinaimg.cn/middle/6abda9bcg7abcdd81159d&690"},"link":"https://blog.sina.com.cn/s/blog_6abda9bc01015zoc.html","content":"<p><strong>Keyword：Android,Robotium<font face=\"宋体\">，自动化测试，黑盒测试，已知id如何模拟按键</font></strong></p>\n<p>纯属爱好，最近学习了Android及其自动化测试，总算对Android有了个大概的了解。</p>\n<p>毕业后就是用的C，从未用过java，并且最近4年几乎没怎么摸过代码，现在学习android还是有点费劲；不过还好，自我觉得理解的很快，别人碰到的问题我都碰到了，很多网上都有答案。其中一个问题折腾了我好几天，网上也没有完整的答案，凭着自己摸索，试，总算搞定了，后面一一介绍。</p>\n<p>关于android的环境搭建，及robotium的测试方法网上的介绍很多，在此不再一一赘述。这里只对一些关键点做一些总结，介绍常见问题的解决办法等等。</p>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">\n<font style=\"FonT-siZe: 16px\"><font style=\"FonT-siZe: 24px\">1.&nbsp;需要设置的环境变量</font></font></h1>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p>ANDROID_HOME=D:\\Android\\android-sdks</p>\n<p>ANDROID_SDK_HOME=D:\\Android\\avd</p>\n<p>JAVA_HOME= C:\\Program Files\\Java\\jdk1.7.0_05</p>\n<p>CLASSPATH=.;%JAVA_HOME%\\lib\\tools.jar;%JAVA_HOME%\\lib\\dt.jar;</p>\n<p>PATH=...;(追加)%ANDROID_HOME%\\tools;%ANDROID_HOME%\\platform-tools;%JAVA_HOME%\\bin;%CLASSPATH%</p>\n</div>\n<p>注意，环境设置后重启电脑才生效。</p>\n<p>如果知道环境变量是否生效？例如查看ANDROID_HOME环境变量的设置，开始-&gt;运行-&gt;cmd，在cmd下面输入echo % ANDROID_HOME%，如果与我们预期的一致就说明生效了。如果原样输出% ANDROID_HOME%就说明环境变量未生效，需要重启操作系统。</p>\n<p>详细说明如下</p>\n<p><strong>1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ANDROID_HOME</strong></p>\n<p>ANDROID_HOME=\nD:\\Android\\android-sdks，指定sdk包含的位置，什么是sdk？网上去搜，简单点说就是里面要包含AVD Manager和SDK Manager:</p>\n<p><img src=\"./imgs/7C7FC43D6A0B46FD8AEAF80591CED8CF\" /></p>\n<p>同时,eclipse也要设置SDK的位置，最好和ANDROID_HOME设置一样，如下</p>\n<p><img src=\"./imgs/50F7E7B794EE4B448CB687FDC194F927\" /></p>\n<p><strong>1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ANDROID_SDK_HOME</strong></p>\n<p>ANDROID_SDK_HOME设置的是avd的路径，一般默认在用户路径下，例如C:\\Users\\tanggod\\.android，SD卡的空间都是从这里分配的。可以挪到其他目录下，需要在环境变量里面设置如下：</p>\n<p>ANDROID_SDK_HOME=D:\\Android\\avd</p>\n<p>如此设置后(重启电脑让环境变量生效 )，以后创建的AVD就会在我们指定的目录下了：</p>\n<p><img src=\"./imgs/A1D028BFB10D4A06ACD99AF6C33A35EE\" /><strong>1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JAVA_HOME</strong></p>\n<p>JDK,JAVA_HOME必须设置jdk安装的目录，例如：</p>\n<p>&nbsp;JAVA_HOME= C:\\Program\nFiles\\Java\\jdk1.7.0_05</p>\n<p>C:\\Program\nFiles\\Java\\jdk1.7.0_05</p>\n<p>查看JDK版本号？在cmd下面输入：Java -version</p>\n<p>&nbsp;<img src=\"./imgs/EB2B9FA5DC3640B6B11649AE9F9B9E7D\" />PS:1.7的jdk似乎还很不稳定，有问题，建议用1.6的。</p>\n<p>jdk下载位置：</p>\n<p><a href=\"http://www.oracle.com/technetwork/java/javase/downloads/index.html\">\nhttp://www.oracle.com/technetwork/java/javase/downloads/index.html</a></p>\n<p>&nbsp;<font style=\"FonT-siZe: 14px\"><strong>1.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CLASSPATH</strong></font></p>\n<p>classpath环境变量，是当我们在开发java程序时需要引用别人写好的类时，要让java解释器知道到哪里去找这个类。通常，sun为我们提供了一些额外的丰富的类包，一个是dt.jar，一个是tools.jar，这两个jar包都位于C:\\jdk1.6.0\\lib目录下，所以通常我们都会把这两个jar包加到我们的classpath环境变量中set\nclasspath=.;C:\\jdk1.6.0\\lib\\tools.jar;C:\\jdk1.6.0\\lib\\dt.jar。在系统环境变量那一栏中点-&gt;新建classpath&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变量名：classpath&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;变量值：.;%JAVA_HOME%\\lib\\tools.jar;%JAVA_HOME%\\lib\\dt.jar;（注意，CLASSPATH最前面是有个“.”的，表示当前目录，这样当我们运行java AClass的时候，系统就会先在当前目录寻找AClass文件了。）；</p>\n<h1 style=\"TexT-inDenT: -42.55pt; MArGin: 0cm 0cm 0pt 35.45pt; mso-list: l1 level2 lfo2\">\n<font style=\"FonT-siZe: 14px\">1.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PATH</font></h1>\n<p>环境变量PATH设置的时候，注意是追加，不能将已有的内容清空了。</p>\n<p>PATH = %ANDROID_HOME%\\tools;%ANDROID_HOME%\\platform-tools;%JAVA_HOME%\\bin;%CLASSPATH%</p>\n<p>主要设置的是adb.exe和emulator的位置（在tools或者platform-tools目录中），已经jdk工具的路径等等。</p>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">\n<font style=\"FonT-siZe: 16px\">2.&nbsp;&nbsp;如何签名Sign</font></h1>\n<p>Android<font color=\"#000000\">系统要求每一个Android应用程序必须要经过数字签名才能够安装到系统中，也就是说如果一个Android应用程序没有经过数字签名，是没有办法安装到系统中的！</font></p>\n<p>为了方便我们开发调试程序，ADT会自动的使用debug密钥为应用程序签名。debug密钥？它在哪？debug密钥是一个名为debug.keystore的文件，它的位置：Ubuntu:\n~/.android/debug.keystore&nbsp;（win7：c:/user/.Android/debug.keystore; &nbsp;xp: C:/Documents\nand Settings/user/.Android/debug.keystore），“user”对应于你自己的windows操作系统用户名，这也就意味着，如果我们想拥有自己的签名，而不是让ADT帮我们签名的话，我们也要有一个属于自己的密钥文件（*.keystore）</p>\n<p>用Robotium做黑盒测试的时候，需要对待测试的apk去除签名，然后自己再签名。google网站上有个签名工具叫做re-sign.jar，比较傻瓜化，直接将apk拖入到re-sign.jar中后自动去除签名，重新再签名；很多人都建议用这个工具。我刚开始也用这个，可是发现用这个工具处理后，无论是android模拟器还是真机，都装不上，提示没有签名。</p>\n<p>我将apk解开看，确实是有签名的。</p>\n<p>查看签名：</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p>jarsigner -verify -verbose -certs<i>D:\\Android\\apk\\02-AndroidCalculator-sign.apk</i></p>\n</div>\n<p>&nbsp;</p>\n<p>所以后来，我就手工用命令行来签名。手工签名之前，首先需要去除原来签名的信息，去除方法很简单。就是将apk文件后缀改为.zip，然后从winrar中删除META-INF文件夹，删除后重新将文件名改成apk的后缀，这样就去除签名了。然后用下面的命令进行签名。</p>\n<p>注意下面黄色高亮和灰色高亮的字，需要根据自己的debug.keystore的位置，和待签名apk的位置进行设置。&nbsp;</p>\n<p>签名AndroidCalculator</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p><i>&gt; jarsigner -keystoreD:\\Android\\avd\\.android\\debug.keystore-storepass android -keypass android D:\\Android\\apk\\02-AndroidCalculator-unsign.apkandroiddebugkey</i></p>\n<p><i>&gt; zipalign 4D:\\Android\\apk\\02-AndroidCalculator-unsign.apkD:\\Android\\apk\\02-AndroidCalculator-sign.apk</i></p>\n</div>\n<p><i>&nbsp;zipalign能够使apk文件中未压缩的数据在4个字节边界上对齐（4个字节是一个性能很好的值）</i></p>\n<p>例如签名Plingm</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p><i>&gt;jarsigner -keystoreD:\\Android\\avd\\.android\\debug.keystore-storepass android -keypass android D:\\Android\\apk\\plingm\\com.freephoo.android_1180-unsign.apkandroiddebugkey</i></p>\n<p><i>&gt; zipalign 4D:\\Android\\apk\\plingm\\com.freephoo.android_1180-unsign.apkD:\\Android\\apk\\plingm\\com.freephoo.android_1180-sign.apk</i></p>\n</div>\n<p>&nbsp;对于jdk\n1.7版本，签名稍有区别，需要加上参数：-digestalg\nSHA1 -sigalg MD5withRSA，例如</p>\n<p>&nbsp;</p>\n<p>\n<i>&gt;jarsigner&nbsp;</i><font color=\"#FE2302\"><b>-digestalg\nSHA1 -sigalg MD5withRSA</b></font> -<i>keystore&nbsp;D:\\Android\\avd\\.android\\debug.keystore&nbsp;-storepass\nandroid -keypass android&nbsp;D:\\Android\\apk\\plingm\\com.freephoo.android_1180-unsign.apkandroiddebugkey</i></p>\n<p>\n<i>&gt;\nzipalign 4&nbsp;D:\\Android\\apk\\plingm\\com.freephoo.android_1180-unsign.apkD:\\Android\\apk\\plingm\\com.freephoo.android_1180-sign.apk</i></p>\n<p>签名后如何安装到模拟器中？命令如下</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p>&gt;emulator -avd\nandroid4.1</p>\n<p>&gt;adb installD:\\Android\\apk\\plingm\\com.freephoo.android_1180-sign.apk</p>\n</div>\n<p>&nbsp;如果是安装到真机中，就不需要上面第一条命令启动模拟器了，直接usb连接上手机，执行adb\ninstall即可。</p>\n<p>&nbsp;</p>\n<p>在进行黑盒测试之前，需要知道待测试apk的包及activity信息。查看某个apk的package name，可以用aapt看：</p>\n<p>在platform-tools目录下使用如下命令：aapt dump badging XXX.apk</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p>aapt dump badgingD:\\Android\\apk\\plingm\\com.freephoo.android_1180-sign.apk</p>\n</div>\n<p>&nbsp;也可以用re-sign.jar看，结果如下：package:\nname='com.freephoo.android'</p>\n<p>&nbsp;<img src=\"./imgs/B26DC1AFCE3A4C4F8B67EE500B130239\" /></p>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">3.&nbsp;&nbsp;真机调试</h1>\n<ul>\n<li>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">\n<font style=\"FonT-siZe: 14px\">&nbsp;</font><font style=\"FonT-siZe: 14px\">&nbsp;<font style=\"FonT-siZe: 14px\">设置android手机为USB调试模式。步骤：menu---&gt; 设置 ---&gt; 应用程序 ---&gt; 开发 , 选择【USB调试】&nbsp;</font></font></h1>\n</li>\n<li>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">\n<font style=\"FonT-siZe: 14px\">用USB连接手机和电脑，并确保成功。步骤：在windows下执行c:/adb devices，查看手机是否已经连接成功。</font></h1>\n</li>\n</ul>\n<p>连接不成功：</p>\n<p><img src=\"./imgs/893CB2071C9C4C1898B2E9EE43AE6D8B\" />连接成功<img src=\"./imgs/2252879AAE9144D4A27498589192E837\" /></p>\n<ul>\n<li>\n<div style=\"TexT-ALiGn: left; TexT-inDenT: 0cm; MArGin: 0cm 0cm 0pt 21pt; mso-char-indent-count: 0\" align=\"left\">设置应用程序为调试模式(这个似乎不要也可以)。操作：编辑AndroidManifest.xml 增加调试参数android:debuggable=\"true\", 如下：</div>\n</li>\n</ul>\n<p>&nbsp;&nbsp;&nbsp;&lt;application android:icon=\"@drawable/icon\"\nandroid:label=\"@string/app_name\"\nandroid:debuggable=\"true\"&gt;</p>\n<ul>\n<li>\n<div style=\"TexT-ALiGn: left; TexT-inDenT: -21pt; MArGin-LeFT: 21pt; mso-list: l0 level1 lfo1; mso-char-indent-count: 0\" align=\"left\">查看具体异常信息：</div>\n</li>\n</ul>\n<p>执行：./adb logcat 可以查看到更多的系统异常消息。在这些消息中要注意查看Caused by:打头的行，这些行指明了在哪行代码出的错误</p>\n<h1 style=\"Line-HeiGHT: 175%; TexT-inDenT: -21pt; MArGin: 0cm 0cm 0pt 21pt; mso-list: l0 level1 lfo1\">4.&nbsp;&nbsp;已知控件id，如何模拟按键</h1>\n<p>我们知道，android每个控件都有一个类似R.id.xxxx字符串id。在做白盒测试的时候，将被测试的代码包import一下，直接调用R.id.xxxx就可以了。</p>\n<p>但是在黑盒测试的时候，我们只有apk，没有源代码，怎么获取控件的id呢？</p>\n<p>java已经给我们提供了这个工具。只需要在cmd下面输入hierarchyviewer即可调出控件查看工具(如果cmd不认识你的hierarchyviewer，说明你的环境变量没有配置正确)：</p>\n<p>&nbsp;<img src=\"./imgs/9688EC8EFA0F40A1B92020082C51179D\" /></p>\n<p>选中需要查看的应用，点击：\"Load View\nHierarchy\"：</p>\n<p>如下id/后面的\"Button01\"即为button的id。\n<img src=\"./imgs/6EEF268B55644E31AA28CD30B4E6EA73\" /></p>\n&nbsp;好了，已知控件的id，在Robotium中如何模拟按键呢？这里常用的有2种方法：<p>1. 根据button上面的文字。这个很简单，直接solo.clickOnButton(\"Multiply\");即可。</p>\n<p>2. 根据控件的坐标。hierarchyviewer是可以查看每个点的坐标的。但是使用起来不是很直观，尤其是对不同分辨率屏幕的手机时，使用起来可能还存在兼容性问题。</p>\n<p>&nbsp;</p>\n<p>如果控件上没有文字，clickOnButton就用不了，例如很多应用用图片作为button的说明，clickOnButton就不奏效。用坐标又很麻烦不直观。可否用控件的id呢？</p>\n<p>怎么用id，我也纠缠这个问题好几天，网上中文资料搜不到，搜英文，英文搜不到换关键字搜，始终找不到一个比较完整的使用说明。我只好自己一个个命令的试，搞了2天总算找到一个方法，这个方法对于java高手可能不值一提，但对我从未用过java的人来说，确实费了不少周折。</p>\n<p>我的方法如下，先获取到控件的view：</p>\n<p>solo.getCurrentActivity().getResources().getIdentifier，</p>\n<p>然后再用solo.clickOnView即可。</p>\n<p>&nbsp;</p>\n<p>我在使用的时候，简单的封装了下，封装函数如下：</p>\n<div style=\"BorDer-BoTToM: windowtext 1pt solid; BorDer-LeFT: windowtext 1pt solid; pADDinG-BoTToM: 1pt; pADDinG-LeFT: 4pt; pADDinG-riGHT: 4pt; BorDer-Top: windowtext 1pt solid; BorDer-riGHT: windowtext 1pt solid; pADDinG-Top: 1pt; mso-element: para-border-div; mso-border-alt: solid windowtext .5pt\">\n<p>&nbsp;<img src=\"./imgs/9E356DB13895409BB33E187760B8704E\" /></p>\n<p><b>private</b> <b>int</b> clickCtrlById(String s, <b>int</b> t ){</p>\n<p><b>&nbsp;&nbsp;&nbsp;&nbsp;int</b>ctrl;</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;View v;</p>\n<p></p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;<b>if</b>( s == \"\"){</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> -1;</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;}</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;ctrl = solo.getCurrentActivity().getResources().getIdentifier(s,\"id\",<i>TARGET_PACKAGE_ID</i>);</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;v = solo.getView(ctrl);</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;solo.clickOnView(v);</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;solo.sleep(t);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;<b>return</b> 0;</p>\n<p>}</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n</div>\n<p>例如已知某个控件的id（字符串格式）为\"btn_dialpad_5\"，调用方法如下：</p>\n<p>clickCtrlById(\"btn_dialpad_5\",400);</p>"}