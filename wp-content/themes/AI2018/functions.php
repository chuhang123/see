<?php
// Prevent file from being loaded directly
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

/**
 * Extra Theme
 *
 * functions.php
 *
 * Load & setup theme files/functions
 */

define( 'EXTRA_LAYOUT_POST_TYPE', 'layout' );
define( 'EXTRA_PROJECT_POST_TYPE', 'project' );
define( 'EXTRA_PROJECT_CATEGORY_TAX', 'project_category' );
define( 'EXTRA_PROJECT_TAG_TAX', 'project_tag' );
define( 'EXTRA_RATING_COMMENT_TYPE', 'rating' );

$et_template_directory = get_template_directory();

// Load Framework
require $et_template_directory . '/framework/functions.php';

// Load theme core functions
require $et_template_directory . '/includes/core.php';
require $et_template_directory . '/includes/plugins-woocommerce-support.php';
require $et_template_directory . '/includes/plugins-seo-support.php';
require $et_template_directory . '/includes/activation.php';
require $et_template_directory . '/includes/customizer.php';
require $et_template_directory . '/includes/builder-integrations.php';
require $et_template_directory . '/includes/layouts.php';
require $et_template_directory . '/includes/template-tags.php';
require $et_template_directory . '/includes/ratings.php';
require $et_template_directory . '/includes/projects.php';
require $et_template_directory . '/includes/widgets.php';
require $et_template_directory . '/includes/et-social-share.php';

// Load admin only resources
if ( is_admin() ) {
	require $et_template_directory . '/includes/admin/admin.php';
	require $et_template_directory . '/includes/admin/category.php';
}


//以下为 zhz 所加

//去除头部冗余代码
remove_action( 'wp_head',   'feed_links_extra', 3 ); 
remove_action( 'wp_head',   'rsd_link' ); 
remove_action( 'wp_head',   'wlwmanifest_link' ); 
remove_action( 'wp_head',   'index_rel_link' ); 
remove_action( 'wp_head',   'start_post_rel_link', 10, 0 ); 
remove_action( 'wp_head',   'wp_generator' );  

//阻止站内PingBack
add_action('pre_ping','deel_noself_ping');   
   


//移除自动保存和修订版本

//add_action('wp_print_scripts','deel_disable_autosave' );
remove_action('pre_post_update','wp_save_post_revision' );


//根据别名获取ID
function get_page_id($page_name)
{
    global $wpdb;
    $page_name = $wpdb->get_var("SELECT ID FROM $wpdb->posts WHERE post_name = '".$page_name."' AND post_status = 'publish' AND post_type = 'page'");
    return $page_name;
}

function get_category_id($category_slugname)
{
	//category_nicename
    global $wpdb;
    $category_id = $wpdb->get_var("SELECT TERM_ID FROM $wpdb->terms WHERE slug = '".$category_slugname."'");
    return $category_id;

}

//判断当前是否是某目录或者子目录的列表
function is_the_category($category_slugname)
{
  if(!is_category())
	return false;

  global $cat;
  //the_category_ID($echo=false);
  $cid = get_category_id($category_slugname);
  //echo "category:".$cid."current:".$cat;
  //echo is_category(array($cat));

	return is_category($cid) || 
		(in_array($cat,get_term_children($cid, 'category')));
}

//判断当前是否是某目录或者子目录内的文章
function is_the_category_post($catename)
{
	//global $cat;
	//$cid = get_category_id($catename);
	//return is_single() && 
	//	in_array($cat,get_term_children($cid, 'category'));

        if(!is_single())
		return false;

	$cid = get_category_id($catename);
        if (in_category($cid,$_post) ||
	in_category(get_term_children( $cid, 'category' ), $_post ) )
            return true;

        return false;

}
//判断是否是某页面或者子页面
function is_the_page($pagename)
{
	$pageid=get_page_id($pagename);
	global $post; 
	return is_page($pagename) ||
		in_array($pageid,get_post_ancestors($post));
}

//解决跨域问题
function fir_scripts_method() {
    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '/wp-includes/js/jquery/jquery.js');
    wp_enqueue_script( 'jquery' );
}
//add_action('wp_enqueue_scripts', 'fir_scripts_method_jquery');

//隐藏后台widget
function modify_footer_admin () {
  echo '版权  <a href="http://ai.hebut.edu.cn">人工智能和数据科学学院</a> 2018-2019';
}
add_filter('admin_footer_text', 'modify_footer_admin');


//隐藏升级提示
//add_filter( 'pre_site_transient_update_core', create_function( '$a', "return null;" ));

//禁用更新代码
//add_filter('pre_site_transient_update_core', create_function('$a', "return null;")); // 关闭核心提示
//add_filter('pre_site_transient_update_plugins', create_function('$a', "return null;")); // 关闭插件提示
add_filter('pre_site_transient_update_themes', create_function('$a', "return null;")); // 关闭主题提示
//remove_action('admin_init', '_maybe_update_core'); // 禁止 WordPress 检查更新
//remove_action('admin_init', '_maybe_update_plugins'); // 禁止 WordPress 更新插件
remove_action('admin_init', '_maybe_update_themes'); // 禁止 WordPress 更新主题


//隐藏登录后新闻提示等
function remove_dashboard_widgets(){
  global$wp_meta_boxes;
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
  unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']); 
  unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
}

add_action('wp_dashboard_setup', 'remove_dashboard_widgets');


function disable_default_dashboard_widgets() {

	remove_meta_box('dashboard_right_now', 'dashboard', 'core');      //概况(Right Now)
	remove_meta_box('dashboard_recent_comments', 'dashboard', 'core'); //近期评论(Recent Comments)
	remove_meta_box('dashboard_incoming_links', 'dashboard', 'core');  //链入链接(Incoming Links)
	remove_meta_box('dashboard_plugins', 'dashboard', 'core');      //插件(Plugins)

	remove_meta_box('dashboard_quick_press', 'dashboard', 'core');  //快速发布(QuickPress)
	remove_meta_box('dashboard_recent_drafts', 'dashboard', 'core'); //近期草稿(Recent Drafts)
	remove_meta_box('dashboard_primary', 'dashboard', 'core');  //WordPress China 博客(WordPress Blog)
	remove_meta_box('dashboard_secondary', 'dashboard', 'core'); //其它 WordPress 新闻(Other WordPress News)
}
add_action('admin_menu', 'disable_default_dashboard_widgets');





// 以下这一行代码将删除 "Welcome" 面板
add_action( 'load-index.php', 'remove_welcome_panel' );

function remove_welcome_panel() {
    remove_action('welcome_panel', 'wp_welcome_panel');
}

//添加帮助面板
function custom_dashboard_help() {
    echo '欢迎使用人工智能和数据科学学院网站系统';
}

function example_add_dashboard_widgets() {
    wp_add_dashboard_widget('custom_help_widget', '系统使用帮助', 'custom_dashboard_help');
}
//add_action('wp_dashboard_setup', 'example_add_dashboard_widgets' );







//给WordPress后台控制面板添加自定义logo 
function my_custom_logo(){
	echo '<style type="text/css">#header-logo{background-image:url('.get_bloginfo('template_directory').'/images/sitelogo.png) !important;}</style>';
}
//add_action('admin_head','my_custom_logo');

//隐藏admin Bar
//function hide_admin_bar($flag) {
//	return false;
//}
//add_filter('show_admin_bar','hide_admin_bar');









//修改后台登陆图标
function custom_loginlogo()
{
  echo '<style type="text/css">.login h1 a {background-image: url('.get_bloginfo('template_directory').'/images/login_logo.png) !important; width:320px;height:80px;background-size: 320px 80px;}</style>';
}
//add_action('login_head', 'custom_loginlogo');


//移除左上角logo
add_action( 'admin_bar_menu', 'remove_wp_logo', 999 );

function remove_wp_logo( $wp_admin_bar ) {
  $wp_admin_bar->remove_node( 'wp-logo' );
}

// 隐藏屏幕选项
function remove_screen_options_tab() {
    return false;
}
//add_filter('screen_options_show_screen', 'remove_screen_options_tab');


//隐藏帮助
function hide_help() {
    echo '<style type="text/css">
            #contextual-help-link-wrap { display: none !important; }
    </style>';
}
add_action('admin_head', 'hide_help');

//禁止rss输出
function disable_our_feeds() { 
wp_die( __('<strong>Error:</strong> No RSS Feed Available, Please visit our <a class="broken_link" href="’. get_bloginfo(‘url’) .’">homepage</a>.') ); 
} 
//add_action('do_feed','disable_our_feeds',1); 
//add_action('do_feed_rdf', 'disable_our_feeds',1); 
//add_action('do_feed_rss','disable_our_feeds',1); 
//add_action('do_feed_rss2', 'disable_our_feeds',1); 
//add_action('do_feed_atom', 'disable_our_feeds',1);




//add_filter('pre_site_transient_update_core',    create_function('$a', "return null;")); // 关闭核心提示
//add_filter('pre_site_transient_update_plugins', create_function('$a', "return null;")); // 关闭插件提示
add_filter('pre_site_transient_update_themes',  create_function('$a', "return null;")); // 关闭主题提示
//remove_action('admin_init', '_maybe_update_core');    // 禁止 Wordpress 检查更新
//remove_action('admin_init', '_maybe_update_plugins'); // 禁止 Wordpress 更新插件
remove_action('admin_init', '_maybe_update_themes');  // 禁止 Wordpress 更新主题





//修改后台logo链接地址
add_filter('login_headerurl', create_function(false,"return get_bloginfo('siteurl');"));

//修改后台logo链接提示
add_filter('login_headertitle', create_function(false,"return get_bloginfo('description');"));

//修改后台登录链接图片
function my_login_head() {
    echo '<style type="text/css">body.login #login h1 a {background:url('.get_bloginfo('template_directory').'/img/backlogo.png) no-repeat 0 0 transparent;height:55px;width:320px;padding:0;margin:0 auto 1em;}</style>';
}
add_action('login_head', 'my_login_head');//modify the background image

//修改邮件发件人地址
function mail_from() {
	$emailaddress = 'zhz@hebut.edu.cn'; //你的邮箱地址
	return $emailaddress;
}
function mail_from_name() {
	$sendername = ’管理员’; //你的名字
	return $sendername;
}
add_filter('wp_mail_from_name','mail_from_name');

//添加和删除自定义注册项目
function my_profile( $contactmethods ) {
    $contactmethods['telephone'] = '联系电话';
    unset($contactmethods['aim']);
    unset($contactmethods['yim']);
    unset($contactmethods['jabber']);
    return $contactmethods;
}
//add_filter('user_contactmethods','my_profile');

//show_admin_bar(false);

function remove_open_sans() {
wp_deregister_style( 'open-sans' );
wp_register_style( 'open-sans', false );
wp_enqueue_style('open-sans','');
}
add_action( 'init','remove_open_sans' );


function MBT_add_editor_buttons($buttons) {
 $buttons[] = 'fontselect';
 $buttons[] = 'fontsizeselect';
 $buttons[] = 'cleanup';
 $buttons[] = 'styleselect';
 $buttons[] = 'del';
 $buttons[] = 'sub';
 $buttons[] = 'sup';
 $buttons[] = 'copy';
 $buttons[] = 'paste';
 $buttons[] = 'cut';
 $buttons[] = 'image';
 $buttons[] = 'anchor';
 $buttons[] = 'backcolor';
 $buttons[] = 'wp_page';
 $buttons[] = 'charmap';
 return $buttons;
}
add_filter("mce_buttons_2", "MBT_add_editor_buttons");