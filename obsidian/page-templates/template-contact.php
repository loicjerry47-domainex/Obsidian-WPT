<?php
/**
 * Template Name: Contact Page
 *
 * @package Obsidian
 */

get_header(); ?>

<main id="primary" class="site-main">
    <div class="container site-content" style="max-width: 800px; margin: 0 auto;">
        <?php
        while ( have_posts() ) :
            the_post();
            get_template_part( 'template-parts/content', 'page' );
        endwhile;
        ?>
        
        <div class="contact-info" style="margin-top: 40px; padding: 40px; background: var(--bg-card); border-radius: 8px; border: 1px solid var(--border-color);">
            <h3><?php esc_html_e( 'Get in Touch', 'obsidian' ); ?></h3>
            <p>
                <?php $email = get_theme_mod('email_address', 'hello@example.com'); ?>
                <strong>Email:</strong> <a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
            </p>
            <?php if (get_theme_mod('linkedin_url')) : ?>
                <p><strong>LinkedIn:</strong> <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" target="_blank" rel="noopener">Connect with us -></a></p>
            <?php endif; ?>
        </div>
    </div>
</main>

<?php get_footer(); ?>