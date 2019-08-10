<?php
namespace MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;
use MatthiasWeb\RealMediaLibrary\rest;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' ); // Avoid direct file request

/**
 * Asset management for frontend scripts and styles.
 */
class Assets extends base\Assets {
    
    /**
     * Enqueue scripts and styles depending on the type. This function is called
     * from both admin_enqueue_scripts and wp_enqueue_scripts. You can check the
     * type through the $type parameter. In this function you can include your
     * external libraries from public/lib, too.
     * 
     * @param string $type The type (see base\Assets constants)
     */
    public function enqueue_scripts_and_styles($type) {
        $publicFolder = $this->getPublicFolder();
        $isDebug = $this->isScriptDebug();
        $dpSuffix = $isDebug ? 'development' : 'production.min';
        $minSuffix = $isDebug ? '' : '.min';
        
        // Both in admin interface (page) and frontend (widgets)
        $this->enqueueLibraryScript('react', 'react/umd/react.' . $dpSuffix . '.js');
        $this->enqueueLibraryScript('react-dom', 'react-dom/umd/react-dom.' . $dpSuffix . '.js', 'react');
        
        // Your assets implementation here... See base\Assets for enqueue* methods.
        if ($type === base\Assets::TYPE_ADMIN || Options::load_frontend()) {
            wp_enqueue_media();
            
            // jQuery scripts (Helper) core.js, widget.js, mouse.js, draggable.js, droppable.js, sortable.js
        	$requires = array("jquery", "jquery-ui-core", "jquery-ui-widget", "jquery-ui-mouse", "jquery-ui-draggable", "jquery-ui-droppable", "jquery-ui-sortable", "jquery-touch-punch");
            array_walk($requires, 'wp_enqueue_script');
            
            // React / ReactDOM
            $this->enqueueLibraryScript('react', 'react/umd/react.' . $dpSuffix . '.js');
            $this->enqueueLibraryScript('react-dom', 'react-dom/umd/react-dom.' . $dpSuffix . '.js', array('react'));
            
            // SortableJs
            $this->enqueueLibraryScript('sortablejs', 'sortablejs/Sortable' . $minSuffix . '.js', $requires);
            
            // i18n-react
            $this->enqueueLibraryScript('i18n-react', 'i18n-react/dist/i18n-react.umd' . $minSuffix . '.js', array('react-dom'));
            
            // mobx
            $this->enqueueLibraryScript('mobx', 'mobx/lib/mobx.umd' . $minSuffix . '.js');
            
            // mobx-state-tree
            $this->enqueueLibraryScript('mobx-state-tree', 'mobx-state-tree/dist/mobx-state-tree.umd.js', array('mobx'));
            
            // immer
            $this->enqueueLibraryScript('immer', 'immer/dist/immer.umd.js');
            
            // React AIOT
            $this->enqueueLibraryScript('react-aiot', 'react-aiot/umd/react-aiot.umd.js', array('react-dom'));
            $this->enqueueLibraryStyle('react-aiot', 'react-aiot/umd/react-aiot.umd.css');
            
            // Plugin scripts
            wp_enqueue_script('wp-api');
            $this->enqueueScript('real-media-library', 'rml.js', array('react-dom'));
		    $this->enqueueStyle('real-media-library', 'rml.css');
		    wp_localize_script('real-media-library', 'rmlOpts', $this->adminLocalizeScript());
		    
		    // Plugin icon font
		    wp_enqueue_style('rml-font', plugins_url( 'public/others/icons/css/rml.css', RML_FILE), array(), RML_VERSION);
		    
		    /**
		     * This action is fired when RML has enqueued scripts and styles.
		     * 
		     * @param {Assets} $assets The assets instance
		     * @hook RML/Scripts
		     */
		    do_action('RML/Scripts', $this);
        }
    }
    
    /**
     * Localize the WordPress admin backend.
     * 
     * @returns array
     */
    public function adminLocalizeScript() {
        $mode = get_user_option( 'media_library_mode', get_current_user_id() ) ? get_user_option( 'media_library_mode', get_current_user_id() ) : 'grid';
    	
        return apply_filters('RML/Localize', array(
            'version' => RML_VERSION,
            'textDomain' => RML_TD,
            'restUrl' => rest\Service::getUrl(rest\Service::SERVICE_NAMESPACE),
            'blogId' => get_current_blog_id(),
            'rootId' => _wp_rml_root(),
            'listMode' => $mode,
            'lang' => (new Lang())->getItems($this),
            'userSettings' => has_filter("RML/User/Settings/Content")
        ));
    }
    
    /**
     * Enqueue scripts and styles for admin pages.
     */
    public function admin_enqueue_scripts() {
        $this->enqueue_scripts_and_styles(base\Assets::TYPE_ADMIN);
    }
    
    /**
     * Enqueue scripts and styles for frontend pages.
     */
    public function wp_enqueue_scripts() {
        $this->enqueue_scripts_and_styles(base\Assets::TYPE_FRONTEND);
    }
    
    /**
     * Checks if a specific screen is active.
     * 
     * @param string $base The base
     * @param boolean $log If true the current screen gets logged
     * @returns boolean
     */
    public function isScreenBase($base, $log = false) {
        if (function_exists("get_current_screen")) {
            $screen = get_current_screen();
        }else{
            return false;
        }
        
        if ($log) error_log($screen->base);
        
        if (isset($screen->base)) {
            return $screen->base == $base;
        }else{
            return false;
        }
    }
    
    /**
     * Add an "Add-On" link to the plugin row links.
     */
    public function plugin_row_meta($links, $file) {
        if( false !== strpos($file, 'real-media-library/index.php') ){
            $links[] = '<a target="_blank" href="https://matthias-web.com/wordpress/real-media-library/add-ons/"><strong>'.__('Browse Add-Ons', RML_TD).'</strong></a>';
        } 
        return $links;
    }
    
    /**
     * Modify the media view strings for a shortcut hint in the media grid view.
     * This function is also used to return the single string for the note when 
     * $strings is false.
     * 
     * 'warnDelete'
     * 'warnBulkDelete'
     */
    public function media_view_strings($strings) {
        $str = __("\n\nNote: If you want to delete a shortcut file, the source file will NOT bet deleted.\nIf you want to delete a non-shortcut file, all associated shortcuts are deleted, too.", RML_TD);
        if ($strings === false)
            return $str;
        
        if (isset($strings['warnDelete']))
            $strings['warnDelete'] .= $str;
        if (isset($strings['warnBulkDelete']))
            $strings['warnBulkDelete'] .= $str;
        return $strings;
    }
    
    /**
     * Modify the media view strings for a shortcut hint in the media table view.
     */
    public function media_row_actions($actions, $post) {
        if (isset($actions["delete"])) {
            $actions['delete'] = str_replace('showNotice.warn();', 'window.rmlWarnDelete();', $actions['delete']);
        }
        
        // Add a table mode "helper" to create the rml icon
        if (wp_attachment_is_shortcut($post)) {
            $actions['rmlShortcutSpan'] = '&nbsp;';
        }
        return $actions;
    }
}