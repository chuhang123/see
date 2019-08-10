<?php
function easy_wp_cleaner_admin() {
	add_options_page('Easy WP Cleaner', 'Easy WP Cleaner','manage_options', __FILE__, 'easy_wp_cleaner_page');
}
function easy_wp_cleaner_page(){
?>
<style type="text/css"> .plugin-title{ font-size:20px !important; margin:0px 25px } </style>
<?php
function easy_wp_cleaner($type){
	global $wpdb;
	switch($type){
		case "revision":
			$ewc_sql = "DELETE FROM $wpdb->posts WHERE post_type = 'revision'";
			$wpdb->query($ewc_sql);
			break;
		case "draft":
			$ewc_sql = "DELETE FROM $wpdb->posts WHERE post_status = 'draft'";
			$wpdb->query($ewc_sql);
			break;
		case "autodraft":
			$ewc_sql = "DELETE FROM $wpdb->posts WHERE post_status = 'auto-draft'";
			$wpdb->query($ewc_sql);
			break;
		case "moderated":
			$ewc_sql = "DELETE FROM $wpdb->comments WHERE comment_approved = '0'";
			$wpdb->query($ewc_sql);
			break;
		case "spam":
			$ewc_sql = "DELETE FROM $wpdb->comments WHERE comment_approved = 'spam'";
			$wpdb->query($ewc_sql);
			break;
		case "trash":
			$ewc_sql = "DELETE FROM $wpdb->comments WHERE comment_approved = 'trash'";
			$wpdb->query($ewc_sql);
			break;
		case "postmeta":
			$ewc_sql = "DELETE pm FROM $wpdb->postmeta pm LEFT JOIN $wpdb->posts wp ON wp.ID = pm.post_id WHERE wp.ID IS NULL";
			$wpdb->query($ewc_sql);
			break;
		case "commentmeta":
			$ewc_sql = "DELETE FROM $wpdb->commentmeta WHERE comment_id NOT IN (SELECT comment_id FROM $wpdb->comments)";
			$wpdb->query($ewc_sql);
			break;
		case "relationships":
			$ewc_sql = "DELETE FROM $wpdb->term_relationships WHERE term_taxonomy_id=1 AND object_id NOT IN (SELECT id FROM $wpdb->posts)";
			$wpdb->query($ewc_sql);
			break;
		case "feed":
			$ewc_sql = "DELETE FROM $wpdb->options WHERE option_name LIKE '_site_transient_browser_%' OR option_name LIKE '_site_transient_timeout_browser_%' OR option_name LIKE '_transient_feed_%' OR option_name LIKE '_transient_timeout_feed_%'";
			$wpdb->query($ewc_sql);
			break;
	}
}

function easy_wp_cleaner_count($type){
	global $wpdb;
	switch($type){
		case "revision":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->posts WHERE post_type = 'revision'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "draft":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->posts WHERE post_status = 'draft'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "autodraft":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->posts WHERE post_status = 'auto-draft'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "moderated":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->comments WHERE comment_approved = '0'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "spam":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->comments WHERE comment_approved = 'spam'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "trash":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->comments WHERE comment_approved = 'trash'";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "postmeta":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->postmeta pm LEFT JOIN $wpdb->posts wp ON wp.ID = pm.post_id WHERE wp.ID IS NULL";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "commentmeta":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->commentmeta WHERE comment_id NOT IN (SELECT comment_id FROM $wpdb->comments)";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "relationships":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->term_relationships WHERE term_taxonomy_id=1 AND object_id NOT IN (SELECT id FROM $wpdb->posts)";
			$count = $wpdb->get_var($ewc_sql);
			break;
		case "feed":
			$ewc_sql = "SELECT COUNT(*) FROM $wpdb->options WHERE option_name LIKE '_site_transient_browser_%' OR option_name LIKE '_site_transient_timeout_browser_%' OR option_name LIKE '_transient_feed_%' OR option_name LIKE '_transient_timeout_feed_%'";
			$count = $wpdb->get_var($ewc_sql);
			break;
	}
	return $count;
}

function easy_wp_cleaner_optimize(){
	global $wpdb;
	$ewc_sql = 'SHOW TABLE STATUS FROM `'.DB_NAME.'`';
	$result = $wpdb->get_results($ewc_sql);
	foreach($result as $row){
		$ewc_sql = 'OPTIMIZE TABLE '.$row->Name;
		$wpdb->query($ewc_sql);
	}
}

	$ewc_message = '';

	if(isset($_POST['easy_wp_cleaner_revision'])){
		easy_wp_cleaner('revision');
		$ewc_message = "All revisions are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_draft'])){
		easy_wp_cleaner('draft');
		$ewc_message = "All drafts are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_autodraft'])){
		easy_wp_cleaner('autodraft');
		$ewc_message = "All autodrafts are deleted";
	}
	
	if(isset($_POST['easy_wp_cleaner_moderated'])){
		easy_wp_cleaner('moderated');
		$ewc_message = "All moderated comments are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_spam'])){
		easy_wp_cleaner('spam');
		$ewc_message = "All spam comments are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_trash'])){
		easy_wp_cleaner('trash');
		$ewc_message = "All trash comments are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_postmeta'])){
		easy_wp_cleaner('postmeta');
		$ewc_message = "All orphan postmeta are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_commentmeta'])){
		easy_wp_cleaner('commentmeta');
		$ewc_message = "All orphan commentmeta are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_relationships'])){
		easy_wp_cleaner('relationships');
		$ewc_message = "All orphan relationships are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_feed'])){
		easy_wp_cleaner('feed');
		$ewc_message = "All dashboard transient feed are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_all'])){
		easy_wp_cleaner('revision');
		easy_wp_cleaner('draft');
		easy_wp_cleaner('autodraft');
		easy_wp_cleaner('moderated');
		easy_wp_cleaner('spam');
		easy_wp_cleaner('trash');
		easy_wp_cleaner('postmeta');
		easy_wp_cleaner('commentmeta');
		easy_wp_cleaner('relationships');
		easy_wp_cleaner('feed');
		$ewc_message = "All unnecessary data are deleted";
	}

	if(isset($_POST['easy_wp_cleaner_optimize'])){
		easy_wp_cleaner_optimize();
		$ewc_message = "Database optimized successfully";
	}

	if($ewc_message != ''){
		echo '<div id="message" class="updated"><p><strong>' . $ewc_message . '</strong></p></div>';
	}
	
	
	if( ( isset( $_REQUEST['tab'] ) && $_REQUEST['tab'] == 'settings' ) OR 
		( isset( $_REQUEST['tab'] ) && $_REQUEST['tab'] == '' ) ) { 
		$settings_class = 'nav-tab-active';
		$help_class = '';
	} else if( ( isset( $_REQUEST['tab'] ) && $_REQUEST['tab'] == 'help' ) ) {
		$settings_class = '';
		$help_class = 'nav-tab-active';
	} else {
		$settings_class = 'nav-tab-active';
		$help_class = '';
	}
?>

	<div class="wrap">
		<h2>Easy WP Cleaner</h2>
		<h2 class="nav-tab-wrapper" style="margin:10px 0px">
			<a class="nav-tab <?php echo $settings_class;?>" href="options-general.php?page=easy-wp-cleaner/easy-wp-cleaner-admin.php&tab=settings">Settings</a>
			<a class="nav-tab <?php echo $help_class;?>" href="options-general.php?page=easy-wp-cleaner/easy-wp-cleaner-admin.php&tab=help">Help</a>
		</h2>
		
		<?php if( $settings_class != null ){ ?>
			
			<table class="widefat" style="width:40%">
				<thead>
					<tr>
						<th>Type</th>
						<th>Count</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody id="the-list">
					<tr class="alternate">
						<td class="column-name">Revision</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('revision'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_revision" value="revision" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('revision')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr>
						<td class="column-name">Draft</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('draft'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_draft" value="draft" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('draft')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr class="alternate">
						<td class="column-name">Auto Draft</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('autodraft'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_autodraft" value="autodraft" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('autodraft')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr>
						<td class="column-name">Moderated Comments</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('moderated'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_moderated" value="moderated" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('moderated')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr class="alternate">
						<td class="column-name">Spam Comments</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('spam'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_spam" value="spam" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('spam')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr>
						<td class="column-name">Trash Comments</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('trash'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_trash" value="trash" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('trash')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr class="alternate">
						<td class="column-name">Orphan Postmeta</td>
						<td class="column-name">
							<?php echo easy_wp_cleaner_count('postmeta'); ?>
						</td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_postmeta" value="postmeta" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('postmeta')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr>
						<td class="column-name">Orphan Commentmeta</td>
						<td class="column-name">
							<?php echo easy_wp_cleaner_count('commentmeta'); ?>
						</td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_commentmeta" value="commentmeta" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('commentmeta')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr class="alternate">
						<td class="column-name">Orphan Relationships</td>
						<td class="column-name">
							<?php echo easy_wp_cleaner_count('relationships'); ?>
						</td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_relationships" value="relationships" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('relationships')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
					<tr>
						<td class="column-name">Dashboard Transient Feed</td>
						<td class="column-name"><?php echo easy_wp_cleaner_count('feed'); ?></td>
						<td class="column-name">
							<form action="" method="post">
								<input type="hidden" name="easy_wp_cleaner_feed" value="feed" />
								<input type="submit" class="<?php if(easy_wp_cleaner_count('feed')>0){echo 'button-primary';}else{echo 'button';} ?>" value="Delete" />
							</form>
						</td>
					</tr>
				</tbody>
			</table>
			</p>
			
			<p>
			<form action="" method="post">
				<input type="hidden" name="easy_wp_cleaner_all" value="all" />
				<input type="submit" class="button-primary" value="Delete All" />
			</form>
			</p>
			
			<hr/>

			<table class="widefat" style="width:40%">
				<thead>
					<tr>
						<th>Table</th>
						<th>Size</th>
					</tr>
				</thead>
				<tbody id="the-list">
				<?php
					global $wpdb;
					$total_size = 0;
					$alternate = " class='alternate'";
					$wcu_sql = 'SHOW TABLE STATUS FROM `'.DB_NAME.'`';
					$result = $wpdb->get_results($wcu_sql);

					foreach($result as $row){

						$table_size = $row->Data_length + $row->Index_length;
						$table_size = $table_size / 1024;
						$table_size = sprintf("%0.3f",$table_size);

						$every_size = $row->Data_length + $row->Index_length;
						$every_size = $every_size / 1024;
						$total_size += $every_size;

						echo "<tr". $alternate .">
								<td class='column-name'>". $row->Name ."</td>
								<td class='column-name'>". $table_size ." KB"."</td>
							</tr>\n";
						$alternate = (empty($alternate)) ? " class='alternate'" : "";
					}
				?>
				</tbody>
				<tfoot>
					<tr>
						<th>Total</th>
						<th style="font-family:Tahoma;"><?php echo sprintf("%0.3f",$total_size).' KB'; ?></th>
					</tr>
				</tfoot>
			</table>
			<p>
			<form action="" method="post">
				<input type="hidden" name="easy_wp_cleaner_optimize" value="optimize" />
				<input type="submit" class="button-primary" value="Optimize Database" />
			</form>
			</p>
			
			<hr/>
			
		<?php
		} else if( $help_class != null ){
			
			include('easy-wp-cleaner-help.php');
			
		} ?>
			<table class="widefat" style="width:40%">
				<thead>
					<tr>
						<th><strong>Note</strong></th>
					</tr>
				</thead>
				<tbody id="the-list">
					<tr>
						<td>
							If you enjoy this plugin,<br/> please give it 5 stars on WordPress:
							<a title="Easy WP Cleaner" target="_blank" href="https://wordpress.org/support/view/plugin-reviews/easy-wp-cleaner">Rate the plugin</a>
						</td>
					</tr>
				</tbody>
			</table>
	</div>
<?php
}
add_action('admin_menu', 'easy_wp_cleaner_admin');
