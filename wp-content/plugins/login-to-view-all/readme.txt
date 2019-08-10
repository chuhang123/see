=== Login to view all ===

Contributors: Ludou
Donate link: https://www.ludou.org/wordpress-plugin-login-to-view-all.html
Tags: post, login, view, hidden, content
Requires at least: 2.7
Tested up to: 4.7.5
Stable tag: 3.2


== Description ==

Login to view all is an plugin designed to help you add hidden contents of your post. The hidden contents are only visible for the visitor who are logged in.

= How to use? =

* You can switch to HTML editor and click the "loginview" button, to put your words needed to hide between "&lt;!--loginview start--&gt;" and "&lt;!--loginview end--&gt;". like: 
&lt;!--loginview start--&gt;hidden contents.&lt;!--loginview end--&gt;

This has the advantage of that if you disable this plugin, the tag &lt;!--loginview start--&gt; and &lt;!--loginview end--&gt; will still not be displayed.

* Or you can use it like that in your blog post : `[loginview]hidden contents.[/loginview]`
, [loginview] can be use in the visual editor and HTML editor.

Screenshots can be seen in plugin homepage http://www.ludou.org/wordpress-plugin-login-to-view-all.html#screenshots



该插件可以帮助您隐藏文章的部分内容，使得用户必须登录，才能浏览。2.0 版本参考插件easy2hide做了部分修改，支持"&lt;!--loginview start--&gt;"形式的标签，这样停用本插件后，标签也不会显示出来。

= 使用说明 =
1. 在WordPress后台编辑文章的时候，切换到HTML模式，选中你要隐藏的内容，点击按钮 "loginview" 即可用"&lt;!--loginview start--&gt;" 和 "&lt;!--loginview end--&gt;" 将隐藏内容括起来；使用这个标签的好处是，你停用本插件后，该标签不会被显示出来。
2. 如果你不喜欢HTML代码模式，可以使用 [loginview] 和 [/loginview] 将你想要隐藏的内容括起来，该标签支持可视化模式和HTML编辑模式。你的文章内容应该像这样子：[loginview]这里是你要隐藏的内容[/loginview]
3. 这样未登录的用户浏览文章的时候，将无法阅读隐藏的内容。


== Installation ==

1. Upload to your plugins folder, usually `wp-content/plugins/` and unzip the file, it will create a `wp-content/plugins/login-to-view-all/` directory.
2. Activate the plugin on the plugin screen.
3. Done

= 安装方法 =

1. 下载插件，解压缩，你将会看到一个文件夹login-to-view-all，然后将其放置到插件目录下，插件目录通常是 `wp-content/plugins/`
2. 在后台对应的插件管理页激活该插件Login to view all
4. 完成


== Uninstallation ==

1. Go into admin-&gt;plugins ,disable Login to view all
2. Done.


= 卸载插件 =

1. 进入后台 -&gt; 插件，停用 Login to view all；
2. 如果您打算不再使用该插件，您可以将wp-content/plugins/login-to-view-all/目录删除；


== Screenshots ==

Can be seen in plugin homepage http://www.ludou.org/wordpress-plugin-login-to-view-all.html#screenshots

== Changelog ==

= 3.1 =

* Do a small change.

= 3.1 =

* Do a small change.

= 3.0 =

* WP 3.3 compatibility.

= 2.0 =

* Add tag &lt;!--loginview start--&gt; and &lt;!--loginview end--&gt;
* Add HTML editor "loginview" button

= 1.0 =

* First version

Now you can use it like that in your blog post : &lt;!--loginview start--&gt;hidden contents.&lt;!--loginview end--&gt;

Version 2.0 using some code from WordPress plugin Easy2hide. Consider that if user disable this plugin, the tag [loginview] will be displayed in the post. I know, it's terrble. So I add the new tag &lt;!--loginview start--&gt; in Version 2.0. Because this tag is HTML comment, it will never display in your post.