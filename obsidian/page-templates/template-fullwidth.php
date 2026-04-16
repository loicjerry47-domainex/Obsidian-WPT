<?php
/**
 * Template Name: Full Width (No Sidebar)
 *
 * @package Obsidian
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="container site-content">
        <?php
        while ( have_posts() ) :
            the_post();
            get_template_part( 'template-parts/content', 'page' );

            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;

        endwhile;
        ?>
    </div>
</main>

<?php get_footer(); ?>