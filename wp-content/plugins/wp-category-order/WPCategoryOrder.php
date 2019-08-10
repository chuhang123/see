<?php
/*
Plugin Name: WP Category Order
Description: Displays checked categories in heirarchy on post editor.
Version: 2.0
Author: Monika Yadav
Author Email: ymonica32@gmail.com
*/

//******************************************************************************************************
// WPCategoryOrder CLASS
//******************************************************************************************************		
class WPCategoryOrder {

	function __construct()
	{
     	add_action( 'init', array( &$this, 'init_plugin' ));
	}

	//===============================================================================
	// Called on activation. Can create the database tables needed for the plugin to run if required.
	// @return void 
	// ===============================================================================
	
	public function setup_plugin() {
		global $wpdb;
		require_once( ABSPATH . 'wp-admin/includes/upgrade.php');
	}
	
	//===============================================================================
	// Manages term checklist arguments
	// @return filtered data 
	// ===============================================================================
	
	public function init_plugin() {
		function wpdocs_no_top_float( $args, $post_id ) {
			// If the taxonomy is set 
			if ( isset( $args['taxonomy'] )  )
			$args['checked_ontop'] = false;
			return $args;
		}
		add_filter( 'wp_terms_checklist_args', 'wpdocs_no_top_float', 10, 2 );
		
	}
}
//******************************************************************************************************
// END OF WPCategoryOrder CLASS
//******************************************************************************************************
	
	//Create instance of plugin
	$wpco = new WPCategoryOrder();
	
	//Handle plugin activation and update
	register_activation_hook( __FILE__, array( &$wpco, 'setup_plugin' ));
	add_action('init', array( &$wpco, 'setup_plugin' ), 1);

?>
