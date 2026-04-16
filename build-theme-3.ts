import fs from 'node:fs';
import path from 'node:path';

const files = {
  'obsidian/page-templates/template-portfolio.php': `
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
  `,
  'obsidian/page-templates/template-contact.php': `
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
  `,
  'obsidian/page-templates/template-fullwidth.php': `
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
  `,
  'obsidian/assets/js/navigation.js': `
(function($) {
    'use strict';

    $(document).ready(function() {
        var $menuToggle = $('.menu-toggle');
        var $navigation = $('.main-navigation');

        $menuToggle.on('click', function() {
            var isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            $navigation.toggleClass('toggled');
        });

        // Close menu on link click (mobile)
        $navigation.find('a').on('click', function() {
            if ($navigation.hasClass('toggled')) {
                $menuToggle.attr('aria-expanded', 'false');
                $navigation.removeClass('toggled');
            }
        });
    });
})(jQuery);
  `,
  'obsidian/assets/js/customizer.js': `
( function( $ ) {
	wp.customize( 'hero_title', function( value ) {
		value.bind( function( to ) {
			$( '.hero-title' ).text( to );
		} );
	} );
	wp.customize( 'hero_subtitle', function( value ) {
		value.bind( function( to ) {
			$( '.hero-subtitle' ).text( to );
		} );
	} );
	wp.customize( 'hero_cta_text', function( value ) {
		value.bind( function( to ) {
			$( '.hero-section .btn' ).text( to );
		} );
	} );
	wp.customize( 'copyright_text', function( value ) {
		value.bind( function( to ) {
            if(to) {
                $( '.site-info' ).html( to + ' &copy; ' + new Date().getFullYear() + ' <span class="sep"> | </span> Built with Obsidian Theme.' );
            }
		} );
	} );
} )( jQuery );
  `,
  'obsidian/assets/js/animations.js': `
document.addEventListener("DOMContentLoaded", function() {
    // Simple intersection observer for fade-in elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to cards and stat items
    const elementsToAnimate = document.querySelectorAll('.card, .stat-item, .hero-content');
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = (index % 4) * 0.1 + 's';
        observer.observe(el);
    });
});
  `,
  'obsidian/screenshot.txt': `
This theme is a premium dark-mode presentation theme.
The screenshot should be a 1200x900 graphic representing the theme.
Background: Dark navy/grey (#0a0a0f)
Accent: Elegant Gold (#c9a44a)
Visuals: A blurred modern tech aesthetic or a sleek minimal dark web page with a large bold header, gold CTA button, and 3-column dark cards for portfolio items.
  `,
  'obsidian/readme.txt': `
=== Obsidian Theme ===
Contributors: Loic Hazoume
Tags: dark, portfolio, creative, agency, responsive-layout, custom-colors
Requires at least: 5.0
Tested up to: 6.4
Requires PHP: 7.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

A premium dark-mode WordPress theme for creative professionals and tech companies.

== Description ==

Obsidian is a high-performance, accessible, and easily customizable premium theme built for creative professionals, agencies, and tech companies. It features a stunning dark mode aesthetic with elegant gold accents out of the box, all of which can be customized via the WordPress Customizer.

It uses modern CSS techniques (CSS variables, CSS Grid, Flexbox) and vanilla JavaScript for animations, ensuring top-tier performance.

Features:
- Dynamic Customizer settings for colors, typography, hero section, and footer elements.
- Custom Home Page template with featured works and animated stats.
- Custom Portfolio grid template.
- Built-in widget areas for sidebar and footer.
- SEO friendly and Accessibility ready.

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload Theme and choose the obsidian.zip file.
3. Click Install Now.
4. Click Activate to use your new theme.
  `
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
});
