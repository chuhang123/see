<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * The activator class handles the plugin relevant activation hooks: Uninstall, activation,
 * deactivation and installation. The "installation" means installing needed database tables.
 */
class Activator extends base\Base {
    /**
     * Method gets fired when the user activates the plugin.
     */
    public function activate() {
        // Your implementation...
    }
    
    /**
     * Method gets fired when the user deactivates the plugin.
     */
    public function deactivate() {
        // Your implementation...
    }
    
    /**
     * Install tables, stored procedures or whatever in the database.
     * 
     * @param boolean $errorlevel Set true to throw errors
     * @param callable $installThisCallable Set a callable to install this one instead of the default
     */
    public function install($errorlevel = false, $installThisCallable = null) {
    	global $wpdb;
    
    	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
    
    	$charset_collate = $wpdb->get_charset_collate();

    	// Avoid errors printed out
    	if ($errorlevel === false) {
    		$show_errors = $wpdb->show_errors(false);
    		$suppress_errors = $wpdb->suppress_errors(false);
    		$errorLevel = error_reporting();
    		error_reporting(0);
    	}
    	
    	// Table wp_wprjss
    	if ($installThisCallable === null) {
    	    // Your table installation here...
    	    $table_name = $this->getTableName();
    		
    		// Main table
    		$sql = "CREATE TABLE $table_name (
    			id mediumint(9) NOT NULL AUTO_INCREMENT,
    			parent mediumint(9) DEFAULT '-1' NOT NULL,
    			name tinytext NOT NULL,
    			slug text DEFAULT '' NOT NULL,
    			absolute text DEFAULT '' NOT NULL,
    			owner bigint(20) NOT NULL,
    			ord mediumint(10) DEFAULT 0 NOT NULL,
    			contentCustomOrder tinyint(1) DEFAULT 0 NOT NULL,
    			type varchar(10) DEFAULT '0' NOT NULL,
    			restrictions varchar(255) DEFAULT '' NOT NULL,
    			cnt mediumint(10) DEFAULT NULL,
    			importId bigint(20) DEFAULT NULL,
    			UNIQUE KEY id (id)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_posts
    		$table_name = $this->getTableName("posts");
    		$sql = "CREATE TABLE $table_name (
    			attachment bigint(20) NOT NULL,
    			fid mediumint(9) NOT NULL DEFAULT '-1',
    			isShortcut bigint(20) NOT NULL DEFAULT 0,
    			nr bigint(20),
    			oldCustomNr bigint(20) DEFAULT NULL,
    			importData text,
    			KEY rmljoin (attachment,fid),
    			UNIQUE KEY rmlorder (attachment,isShortcut)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_meta
    		$table_name = $this->getTableName("meta");
    		$sql = "CREATE TABLE $table_name (
    		  `meta_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    		  `realmedialibrary_id` bigint(20) unsigned NOT NULL DEFAULT '0',
    		  `meta_key` varchar(255) DEFAULT NULL,
    		  `meta_value` longtext,
    		  PRIMARY KEY  (meta_id),
    		  KEY realmedialibrary_id (realmedialibrary_id),
    		  KEY meta_key (meta_key)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    		
    		// Table realmedialibrary_meta
    		$table_name = $this->getTableName("debug");
    		$sql = "CREATE TABLE $table_name (
    		  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
    		  `text` text,
    		  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    		  PRIMARY KEY  (id)
    		) $charset_collate;";
    		dbDelta( $sql );
    		
    		if ($errorlevel) {
    			$wpdb->print_error();
    		}
    	}else{
    		call_user_func($installThisCallable);
    	}
    	
    	if ($errorlevel === false) {
    		$wpdb->show_errors($show_errors);
    		$wpdb->suppress_errors($suppress_errors);
    		error_reporting($errorLevel);
    	}
    	
    	if ($installThisCallable === null) {
    	    $installed = get_option(RML_OPT_PREFIX . '_db_version');
    		update_option(RML_OPT_PREFIX . '_db_version', RML_VERSION);
    		
    		/**
             * This action is fired when Real Media Library gets an update.
             * 
             * @param {string} $installed The old installed version
             * @param {string} $new The new installed version
             * @hook RML/Migration
             */
            do_action("RML/Migration", $installed, RML_VERSION);
    	}
    }
}