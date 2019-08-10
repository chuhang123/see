<?php
/*
Plugin Name: Login to view all
Plugin URI: https://www.ludou.org/wordpress-plugin-login-to-view-all.html
Description: This plugin is designed to help you add hidden contents only visible for the visitor who are logged in.
Version: 3.2
Author: Ludou
Author URI: https://www.ludou.org/
*/

if (function_exists('load_plugin_textdomain')) {
	load_plugin_textdomain("ludouview", false, dirname( plugin_basename( __FILE__ ) ) . '/languages/');
}

/* 
 * For Login to view all 2.0
 */
add_filter('the_content', 'login_to_view');

function login_to_view($content)
{
	if (preg_match_all('/<!--loginview start-->([\s\S]*?)<!--loginview end-->/i', $content, $hide_words))
	{
		if( is_user_logged_in() )
		{
			$content = str_replace($hide_words[0], $hide_words[1], $content);
		}
		else
		{
			$hide_notice = '<div style="text-align:center;border:1px dashed #FF9A9A;padding:8px;margin:10px auto;color:#FF6666;">' . __('You must be ', 'ludouview') . '<a href="' . wp_login_url( get_permalink() ) . '">' . __('logged in', 'ludouview') . '</a>' . __(' to view the hidden contents.', 'ludouview') . '</div>';
			$content = str_replace($hide_words[0], $hide_notice, $content);
		}
	}
	return $content;
}

/* 
 * For Login to view all 1.0
 */
class login_to_view_a 
{
	// Plugin initialization
	function login_to_view_a() 
	{
		// This version only supports WP 2.5+ (learn to upgrade please!)
		if ( !function_exists('add_shortcode') ) return;

		// Register the shortcodes
		add_shortcode( 'loginview' , array(&$this, 'denglu_shortcode') );
	}
			
	function denglu_shortcode( $atts = array(), $content = NULL ) 
	{
		if( is_user_logged_in() )
		{
			return $content;
		}
		else
		{
			return '<div style="text-align:center;border:1px dashed #FF9A9A;padding:8px;margin:10px auto;color:#FF6666;">' . __('You must be ', 'ludouview') . '<a href="' . wp_login_url( get_permalink() ) . '">' . __('logged in', 'ludouview') . '</a>' . __(' to view the hidden contents.', 'ludouview') . '</div>';
		}
	}
}
// Start this plugin once all other plugins are fully loaded
add_action( 'plugins_loaded', create_function( '', 'global $loginview; $loginview = new login_to_view_a();' ) );

if(get_bloginfo('version') >= 3.3) 
	add_action('admin_print_footer_scripts', 'loginview_add_quicktags');
else
	add_action('admin_print_footer_scripts', 'loginview_footer_admin' );
	
function loginview_footer_admin() {
	// Javascript Code Courtesy Of WP-AddQuicktag (http://bueltge.de/wp-addquicktags-de-plugin/120/)
	
	//the buttons is wrapped by double "b" in wp2.7.1 by lorz@2009/04/29
	global $wp_version;
	$loginview_271_hacker = ($wp_version == '2.7.1') ? ".lastChild.lastChild" : "";
?>
<script type="text/javascript">
	if(e2h_toolbar = document.getElementById("ed_toolbar")<?php echo $loginview_271_hacker ?>)
	{
		loginviewNr = edButtons.length;
		edButtons[loginviewNr] = 
		new edButton('ed_loginview'
		,'loginview'
		,'<!--loginview start-->'
		,'<!--loginview end-->'
		,'h'
		);
		var loginviewBut = e2h_toolbar.lastChild;
	
		while (loginviewBut.nodeType != 1){
			loginviewBut = loginviewBut.previousSibling;
		}

		loginviewBut = loginviewBut.cloneNode(true);
		loginviewBut.value = "loginview";
		loginviewBut.title = "Insert Hidden Words";
		loginviewBut.onclick = function () {edInsertTag(edCanvas,parseInt(loginviewNr));}
		e2h_toolbar.appendChild(loginviewBut);
		loginviewBut.id = "ed_loginview";
	}
</script>
<?php
}

// add buttons to the html editor
function loginview_add_quicktags() {
    if (wp_script_is('quicktags')) {
?>
    <script type="text/javascript">
    QTags.addButton( 'loginview', 'loginview', "<!--loginview start-->", "<!--loginview end-->" );
    </script>
<?php
    }
}

?>