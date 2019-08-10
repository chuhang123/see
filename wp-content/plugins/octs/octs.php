<?php
/*
Plugin Name:OCTS 
Plugin Script: octs.php
Plugin URI: http://littlepig.cn
Description: 开放式计算机考试系统
Version: 0.1
Author: zhz
Author URI: http://littlepig.cn
Template by: http://web.forret.com/tools/wp-plugin.asp

=== RELEASE NOTES ===
2013-12-25 - v1.0 - first version
*/

// uncomment next line if you need functions in external PHP script;
// include_once(dirname(__FILE__).'/some-library-in-same-folder.php');


//定制菜单
add_action('admin_menu', 'register_custom_menu_page');

function register_custom_menu_page()
{
  /*
    add_menu_page('管理监控系统', '管理监控系统', 'manage_das_system', 'manage_das_system', 'das/manage.php', plugins_url('das/images/icon.png'));
    add_menu_page('我的监控系统', '我的监控系统', 'view_das_system', 'das/view.php','',plugins_url('das/images/icon.png'));
  */

    add_menu_page(__('octs'),__('考试系统'),0,'octs-system','custom_menu_page');
    add_submenu_page('octs-system','使用介绍','使用介绍',0,'octs-system');    //避免第一个子菜单和父菜单重复，只需要两个menu slug 相同即可。
    add_submenu_page('octs-system','相关资源下载','相关资源下载','0','octs/download.php');
    add_submenu_page('octs-system','考生信息管理','考生信息管理','0','octs/stu.php');


}

function custom_menu_page()
{
  echo "<div id='wrap'>请点击子菜单选择相应的功能</div>";
}


?>
