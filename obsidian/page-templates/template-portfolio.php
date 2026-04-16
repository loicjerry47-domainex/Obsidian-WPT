<?php
/**
 * Template Name: Portfolio Grid
 *
 * @package Obsidian
 */

get_header(); ?>

<main id="primary" class="site-main">
    <header class="page-header container" style="padding: 60px 20px 20px; text-align: center;">
        <?php the_title( '<h1 class="page-title">', '</h1>' ); ?>
        <div class="page-description">
            <?php the_content(); ?>
        </div>
    </header>

    <div class="container site-content">
        <div class="portfolio-grid">
            <?php
            // Query featured or latest posts
            $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
            $portfolio_query = new WP_Query( array(
                'post_type'      => 'post',
                'posts_per_page' => 9,
                'paged'          => $paged
            ) );

            if ( $portfolio_query->have_posts() ) :
                while ( $portfolio_query->have_posts() ) : $portfolio_query->the_post();
                    get_template_part( 'template-parts/card' );
                endwhile;

                echo '<div class="pagination" style="grid-column: 1 / -1; margin-top: 40px;">';
                echo paginate_links( array(
                    'total' => $portfolio_query->max_num_pages,
                    'prev_text' => '&larr; Prev',
                    'next_text' => 'Next &rarr;'
                ) );
                echo '</div>';

                wp_reset_postdata();
            else :
                get_template_part( 'template-parts/content', 'none' );
            endif;
            ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>