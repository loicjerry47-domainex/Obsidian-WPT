<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('post_sidebar', true) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
                <?php
                while ( have_posts() ) :
                    the_post();
                    get_template_part( 'template-parts/content' );

                    if ( comments_open() || get_comments_number() ) :
                        comments_template();
                    endif;

                endwhile;
                ?>
            </div>

            <?php 
            if (get_theme_mod('post_sidebar', true)) {
                get_sidebar(); 
            }
            ?>
		</div>
	</main>
<?php get_footer(); ?>