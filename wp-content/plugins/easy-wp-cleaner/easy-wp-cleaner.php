<?php
/*
Plugin Name: Easy WP Cleaner
Plugin URI: http://www.nikunjsoni.co.in
Description: Easy WP Cleaner is user friendly plugin to clean unnecessary data from WordPress database and also allows you to optimize your WordPress database.
Version: 1.5
Author: Nikunj Soni
Author URI: http://www.nikunjsoni.co.in
Text Domain: Easy-WP-Cleaner
*/

/*

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

if ( ! defined( 'ABSPATH' ) ){
	exit; // Exit if accessed this file directly
} 

function easy_wp_cleaner_settings_link($action_links,$plugin_file){
	if($plugin_file==plugin_basename(__FILE__)){
		$wcu_settings_link = '<a href="options-general.php?page=' . dirname(plugin_basename(__FILE__)) . '/easy-wp-cleaner-admin.php">' . __("Settings") . '</a>';
		array_unshift($action_links,$wcu_settings_link);
	}
	return $action_links;
}
add_filter('plugin_action_links','easy_wp_cleaner_settings_link', 10, 2);

if( is_admin() ) {
	require_once('easy-wp-cleaner-admin.php');
}
?>