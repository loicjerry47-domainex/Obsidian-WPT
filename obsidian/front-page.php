<?php
/**
 * The front page template file
 */
get_header(); ?>

<main id="primary" class="site-main">
    <?php get_template_part('template-parts/hero'); ?>

    <section class="featured-projects site-content">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;"><?php esc_html_e('Featured Work', 'obsidian'); ?></h2>
            <div class="portfolio-grid">
                <?php
                $featured_query = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                ));
                if ($featured_query->have_posts()) :
                    while ($featured_query->have_posts()) : $featured_query->the_post();
                        get_template_part('template-parts/card');
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">250</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Awards Won</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2><?php esc_html_e('Ready to start your next project?', 'obsidian'); ?></h2>
            <p><?php esc_html_e('Let\'s create something beautiful together.', 'obsidian'); ?></p>
            <br>
            <?php 
            $email = get_theme_mod('email_address', 'hello@example.com'); 
            ?>
            <a href="mailto:<?php echo esc_attr($email); ?>" class="btn"><?php esc_html_e('Let\'s work together', 'obsidian'); ?></a>
        </div>
    </section>
</main>

<?php get_footer(); ?>