<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('post_sidebar', true) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
                <?php if ( have_posts() ) : ?>
                    <header class="page-header">
                        <h1 class="page-title">
                            <?php printf( esc_html__( 'Search Results for: %s', 'obsidian' ), '<span>' . get_search_query() . '</span>' ); ?>
                        </h1>
                    </header>

                    <div class="portfolio-grid">
                        <?php
                        while ( have_posts() ) :
                            the_post();
                            get_template_part( 'template-parts/card' );
                        endwhile;
                        ?>
                    </div>
                    <?php the_posts_navigation(); ?>
                <?php else : ?>
                    <?php get_template_part( 'template-parts/content', 'none' ); ?>
                <?php endif; ?>
            </div>

            <?php 
            if (get_theme_mod('post_sidebar', true)) {
                get_sidebar(); 
            }
            ?>
		</div>
	</main>
<?php get_footer(); ?>