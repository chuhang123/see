<?php
namespace MatthiasWeb\RealMediaLibrary\comp;
use MatthiasWeb\RealMediaLibrary\general;
use MatthiasWeb\RealMediaLibrary\base;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * This class handles the compatibility for general page builders. If a page builder
 * has more compatibility options, please see / create another compatibility class.
 */
class PageBuilders extends base\Base {
    
    private static $me = null;
    
    private function __construct($root = null) {
        // Silence is golden.
    }
    
    /**
     * Initialize the page builder handlers.
     */
    public function init() {
        if (class_exists("Tatsu_Builder")) {
            $this->oshine_tatsu_builder();
        }
        if (defined('ELEMENTOR_VERSION')) {
            $this->elementor();
        }
        if (class_exists("Cornerstone_Preview_Frame_Loader")) {
            $this->cornerstone();
        }
    }
    
    /**
     * Cornerstone.
     * 
     * @see https://codecanyon.net/item/cornerstone-the-wordpress-page-builder/15518868
     */
    private function cornerstone() {
        // @see class Cornerstone_Preview_Frame_Loader
        if ( ! isset( $_POST['cs_preview_state'] ) || ! $_POST['cs_preview_state'] || 'off' === $_POST['cs_preview_state'] ) {
            return;
        }
    
        // Nonce verification
        if ( ! isset( $_POST['_cs_nonce'] ) || ! wp_verify_nonce( $_POST['_cs_nonce'], 'cornerstone_nonce' ) ) {
            return;
        }
        
        add_filter("print_head_scripts",                            array($this, 'cornerstone_print_head_scripts'), 0);
    }
    
    public function cornerstone_print_head_scripts($res) {
        $this->getCore()->getAssets()->admin_enqueue_scripts();
        return $res;
    }
    
    /**
     * Elementor.
     * 
     * @see https://elementor.com/
     */
    private function elementor() {
        add_action('elementor/editor/before_enqueue_scripts', array($this->getCore()->getAssets(), 'admin_enqueue_scripts') );
    }
    
    /**
     * OSHINE TATSU PAGE BUILDER.
     * 
     * @see https://themeforest.net/item/oshine-creative-multipurpose-wordpress-theme/9545812
     */
    private function oshine_tatsu_builder() {
        add_action('tatsu_builder_head', array($this->getCore()->getAssets(), 'admin_enqueue_scripts') );
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new PageBuilders();
        }
        return self::$me;
    }
}

?>