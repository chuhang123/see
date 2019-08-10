<?php get_header(); ?>

<div id="main-content">
	<div class="container">
		<div id="content-area" class="<?php extra_sidebar_class(); ?> clearfix">
			<div class="et_pb_extra_column_main">
<!-- 此处去掉大标
				<?php if ( is_search() ) { ?>
					<h1><?php printf( esc_html__( 'Search Results for: %s', 'extra' ), get_search_query() ); ?></h1>
				<?php } else if ( is_archive() ) { ?>
					<h1><?php the_archive_title(); ?></h1>
				<?php } ?>

-->

				<?php if ( is_extra_tax_layout() ) { ?>
					<?php extra_tax_layout(); ?>
				<?php } else { ?>
					<?php require locate_template( 'index-content.php' ); ?>
				<?php } ?>
			</div>
			<?php get_sidebar(); ?>

		</div> <!-- #content-area -->
	</div> <!-- .container -->
</div> <!-- #main-content -->

<?php get_footer();
