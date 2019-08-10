<?php
namespace MatthiasWeb\RealMediaLibrary\attachment;

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

/**
 * Handling uploader, so files can be uploaded directly to a folder.
 */
class Upload {
	private static $me = null;
        
    private function __construct() {
        // Silence is golden.
    }
    
    /**
     * Handles the upload to move an attachment directly to a given folder.
     */
    public function add_attachment($postID) {
    	// Move to the given folder
    	$rmlFolder = isset($_REQUEST["rmlFolder"]) ? $_REQUEST["rmlFolder"] : null;
    	if ($rmlFolder !== null) {
    		$r = wp_rml_move($rmlFolder, array($postID));
    	}else{
    	    _wp_rml_synchronize_attachment($postID, _wp_rml_root());
    	}
    }
    
    /**
     * The grid view and post editor upload can be modified through the left
     * tree view to upload files directly.
     */
    public function pre_upload_ui() {
        global $pagenow;
        
        // Get the options depending on the current page
        if ($pagenow === "media-new.php") {
            $options = '<select class="attachments-filter-preUploadUi">' . wp_rml_dropdown(Filter::getInstance()->lastQueriedFolder(), array(RML_TYPE_COLLECTION, RML_TYPE_ALL)) . '</select>';
            $label = __("You can simply upload files directly to a folder. Select a folder and upload files.", RML_TD);
        }else{
            $options = '<select class="rml-wprfc-visible" data-wprfc="preUploadUi"><option selected="true" value="-1">' . __("Loading...", RML_TD) . '</option></select>';
            $label = __("upload to folder", RML_TD);
        }
        
        echo '<p class="attachments-filter-upload-chooser">' . $label . '</p><p>' . $options . '</p>';
    }
    
    public static function getInstance() {
        if (self::$me == null) {
            self::$me = new Upload();
        }
        return self::$me;
    }
}

?>