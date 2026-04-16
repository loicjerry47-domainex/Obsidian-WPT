import fs from 'node:fs';
import path from 'node:path';

const files = {
  'obsidian/style.css': `
/*
Theme Name: Obsidian
Theme URI: https://wxza.net
Author: Loic Hazoume
Author URI: https://wxza.net
Description: A premium dark-mode WordPress theme for creative professionals and tech companies. Features custom page templates, widget areas, and full Customizer integration.
Version: 1.0.0
Requires PHP: 7.4
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: obsidian
*/

/* Variables will be injected dynamically via wp_head from Customizer */
  `,
  'obsidian/assets/css/custom.css': `
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #12121a;
  --bg-card: #1a1a26;
  --accent-primary: #c9a44a;
  --accent-secondary: #e0c472;
  --text-primary: #f0f0f5;
  --text-secondary: #9999aa;
  --border-color: #2a2a3a;
  --font-main: 'Inter', sans-serif;
}

* { box-sizing: border-box; }

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-main);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 700;
  margin-top: 0;
}

a {
  color: var(--accent-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--accent-secondary);
}

.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}

.screen-reader-text:focus {
  background-color: var(--bg-primary);
  border-radius: 3px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  clip-path: none;
  color: var(--accent-primary);
  display: block;
  font-size: 14px;
  font-weight: bold;
  height: auto;
  left: 5px;
  line-height: normal;
  padding: 15px 23px 14px;
  text-decoration: none;
  top: 5px;
  width: auto;
  z-index: 100000;
}

*:focus-visible {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-color);
  padding: 20px 0;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.site-logo {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}

.main-navigation ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;
}

.main-navigation a {
  color: var(--text-primary);
  font-weight: 500;
}

.main-navigation .current-menu-item > a {
  border-bottom: 2px solid var(--accent-primary);
  padding-bottom: 5px;
  color: var(--accent-primary);
}

.header-cta .btn {
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 24px;
  cursor: pointer;
}

.site-content {
  padding: 60px 0;
}

.content-area {
  width: 100%;
}

.has-sidebar .content-area {
  width: 66.666%;
  float: left;
  padding-right: 40px;
}

.has-sidebar .widget-area {
  width: 33.333%;
  float: left;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.btn, .button {
  display: inline-block;
  background-color: var(--accent-primary);
  color: var(--bg-primary);
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn:hover, .button:hover {
  background-color: var(--accent-secondary);
  transform: translateY(-2px);
}

.site-footer {
  background-color: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 60px 0 30px;
}

.footer-widgets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  border-top: 1px solid var(--border-color);
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(rgba(10,10,15,0.7), rgba(10,10,15,0.95));
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 20px;
  background: linear-gradient(to right, var(--text-primary), var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.card {
  background-color: var(--bg-card);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  border-color: var(--accent-primary);
}

.card-img-wrap {
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.card:hover .card-img {
  transform: scale(1.05);
}

.card-content {
  padding: 20px;
}

.card-category {
  font-size: 0.8rem;
  color: var(--accent-primary);
  text-transform: uppercase;
  margin-bottom: 10px;
  display: block;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.card-excerpt {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.stats-section {
  padding: 80px 0;
  background-color: var(--bg-secondary);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-primary);
  margin-bottom: 10px;
}

.cta-section {
  padding: 100px 0;
  text-align: center;
}

@media (max-width: 1024px) {
  .has-sidebar .content-area, .has-sidebar .widget-area {
    float: none;
    width: 100%;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    z-index: 1000;
  }
  
  .main-navigation {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100vh;
    background-color: rgba(10,10,15,0.95);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 998;
  }

  .main-navigation.toggled {
    transform: translateY(0);
  }

  .main-navigation ul {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .header-cta {
    display: none;
  }

  .footer-widgets {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
  `,
  'obsidian/functions.php': `
<?php
/**
 * Obsidian functions and definitions
 *
 * @package Obsidian
 */

if ( ! defined( 'OBSIDIAN_VERSION' ) ) {
	define( 'OBSIDIAN_VERSION', '1.0.0' );
}

if ( ! function_exists( 'obsidian_setup' ) ) :
	function obsidian_setup() {
		load_theme_textdomain( 'obsidian', get_template_directory() . '/languages' );

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );

		add_theme_support( 'custom-logo', array(
			'height'      => 80,
			'width'       => 200,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		) );

		add_theme_support( 'customize-selective-refresh-widgets' );
		add_theme_support( 'editor-styles' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'custom-background' );

		register_nav_menus( array(
			'primary' => esc_html__( 'Header Menu', 'obsidian' ),
			'footer'  => esc_html__( 'Footer Menu', 'obsidian' ),
			'social'  => esc_html__( 'Social Links', 'obsidian' ),
		) );

		add_image_size( 'obsidian-card', 600, 400, true );
		add_image_size( 'obsidian-hero', 1920, 800, true );
	}
endif;
add_action( 'after_setup_theme', 'obsidian_setup' );

function obsidian_scripts() {
	wp_enqueue_style( 'obsidian-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null );
	wp_enqueue_style( 'obsidian-style', get_stylesheet_uri(), array(), OBSIDIAN_VERSION );
	wp_enqueue_style( 'obsidian-custom', get_template_directory_uri() . '/assets/css/custom.css', array(), OBSIDIAN_VERSION );

	wp_enqueue_script( 'obsidian-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), OBSIDIAN_VERSION, true );
	wp_enqueue_script( 'obsidian-animations', get_template_directory_uri() . '/assets/js/animations.js', array(), OBSIDIAN_VERSION, true );
    wp_script_add_data( 'obsidian-animations', 'defer', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'obsidian_scripts' );

// Custom excerpt length and read more link
function obsidian_excerpt_length( $length ) {
	return 25;
}
add_filter( 'excerpt_length', 'obsidian_excerpt_length', 999 );

function obsidian_excerpt_more( $more ) {
	if ( ! is_admin() ) {
		return '... <br><a class="read-more" href="' . esc_url( get_permalink() ) . '">' . __( 'Read More &rarr;', 'obsidian' ) . '</a>';
	}
	return $more;
}
add_filter( 'excerpt_more', 'obsidian_excerpt_more' );

// Add JS defer attribute support
function obsidian_defer_scripts( $tag, $handle ) {
    if ( wp_scripts()->get_data( $handle, 'defer' ) ) {
        return str_replace( ' src', ' defer="defer" src', $tag );
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'obsidian_defer_scripts', 10, 2 );

require get_template_directory() . '/inc/widgets.php';
require get_template_directory() . '/inc/customizer.php';
require get_template_directory() . '/inc/template-tags.php';
  `,
  'obsidian/inc/widgets.php': `
<?php
function obsidian_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Main Sidebar', 'obsidian' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'obsidian' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Column 1', 'obsidian' ),
		'id'            => 'footer-1',
		'description'   => esc_html__( 'Add widgets here.', 'obsidian' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Column 2', 'obsidian' ),
		'id'            => 'footer-2',
		'description'   => esc_html__( 'Add widgets here.', 'obsidian' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Column 3', 'obsidian' ),
		'id'            => 'footer-3',
		'description'   => esc_html__( 'Add widgets here.', 'obsidian' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h4 class="widget-title">',
		'after_title'   => '</h4>',
	) );
}
add_action( 'widgets_init', 'obsidian_widgets_init' );
  `,
  'obsidian/inc/customizer.php': `
<?php
function obsidian_customize_register( $wp_customize ) {
	$wp_customize->add_panel( 'obsidian_theme_options', array(
		'priority'       => 10,
		'title'          => esc_html__( 'Obsidian Theme Settings', 'obsidian' ),
		'description'    => esc_html__( 'Configure theme specific settings.', 'obsidian' ),
	) );

	// Hero Section
	$wp_customize->add_section( 'obsidian_hero_section', array(
		'title'    => esc_html__( 'Hero Section', 'obsidian' ),
		'panel'    => 'obsidian_theme_options',
	) );
	$wp_customize->add_setting( 'hero_title', array(
		'default'           => 'We Build Digital Experiences',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'hero_title', array(
		'label'   => esc_html__( 'Hero Title', 'obsidian' ),
		'section' => 'obsidian_hero_section',
		'type'    => 'text',
	) );
	$wp_customize->add_setting( 'hero_subtitle', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_textarea_field',
	) );
	$wp_customize->add_control( 'hero_subtitle', array(
		'label'   => esc_html__( 'Hero Subtitle', 'obsidian' ),
		'section' => 'obsidian_hero_section',
		'type'    => 'textarea',
	) );
	$wp_customize->add_setting( 'hero_cta_text', array(
		'default'           => 'View Our Work',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'hero_cta_text', array(
		'label'   => esc_html__( 'Hero CTA Button Text', 'obsidian' ),
		'section' => 'obsidian_hero_section',
		'type'    => 'text',
	) );
	$wp_customize->add_setting( 'hero_cta_url', array(
		'default'           => '#',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( 'hero_cta_url', array(
		'label'   => esc_html__( 'Hero CTA Button URL', 'obsidian' ),
		'section' => 'obsidian_hero_section',
		'type'    => 'url',
	) );
	$wp_customize->add_setting( 'hero_bg_image', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'hero_bg_image', array(
		'label'    => esc_html__( 'Hero Background Image', 'obsidian' ),
		'section'  => 'obsidian_hero_section',
	) ) );

	// Colors
	$wp_customize->add_setting( 'accent_color', array(
		'default'           => '#c9a44a',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'accent_color', array(
		'label'    => esc_html__( 'Accent Color', 'obsidian' ),
		'section'  => 'colors',
	) ) );
	$wp_customize->add_setting( 'secondary_accent', array(
		'default'           => '#e0c472',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'secondary_accent', array(
		'label'    => esc_html__( 'Secondary Accent', 'obsidian' ),
		'section'  => 'colors',
	) ) );
	$wp_customize->add_setting( 'bg_primary', array(
		'default'           => '#0a0a0f',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bg_primary', array(
		'label'    => esc_html__( 'Background Primary', 'obsidian' ),
		'section'  => 'colors',
	) ) );
	$wp_customize->add_setting( 'bg_card', array(
		'default'           => '#1a1a26',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'bg_card', array(
		'label'    => esc_html__( 'Card Background', 'obsidian' ),
		'section'  => 'colors',
	) ) );
	$wp_customize->add_setting( 'text_primary', array(
		'default'           => '#f0f0f5',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'text_primary', array(
		'label'    => esc_html__( 'Text Primary', 'obsidian' ),
		'section'  => 'colors',
	) ) );

	// Footer Settings
	$wp_customize->add_section( 'obsidian_footer_section', array(
		'title'    => esc_html__( 'Footer Settings', 'obsidian' ),
		'panel'    => 'obsidian_theme_options',
	) );
	$wp_customize->add_setting( 'copyright_text', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	$wp_customize->add_control( 'copyright_text', array(
		'label'   => esc_html__( 'Copyright text', 'obsidian' ),
		'section' => 'obsidian_footer_section',
		'type'    => 'text',
	) );
	$wp_customize->add_setting( 'show_social', array(
		'default'           => true,
		'sanitize_callback' => 'obsidian_sanitize_checkbox',
	) );
	$wp_customize->add_control( 'show_social', array(
		'label'   => esc_html__( 'Show Social Icons', 'obsidian' ),
		'section' => 'obsidian_footer_section',
		'type'    => 'checkbox',
	) );
    $wp_customize->add_setting( 'github_url', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( 'github_url', array(
		'label'   => esc_html__( 'GitHub URL', 'obsidian' ),
		'section' => 'obsidian_footer_section',
		'type'    => 'url',
	) );
    $wp_customize->add_setting( 'linkedin_url', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	$wp_customize->add_control( 'linkedin_url', array(
		'label'   => esc_html__( 'LinkedIn URL', 'obsidian' ),
		'section' => 'obsidian_footer_section',
		'type'    => 'url',
	) );
    $wp_customize->add_setting( 'email_address', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_email',
	) );
	$wp_customize->add_control( 'email_address', array(
		'label'   => esc_html__( 'Email Address', 'obsidian' ),
		'section' => 'obsidian_footer_section',
		'type'    => 'email',
	) );

	// Layout Settings
	$wp_customize->add_section( 'obsidian_layout_section', array(
		'title'    => esc_html__( 'Layout Settings', 'obsidian' ),
		'panel'    => 'obsidian_theme_options',
	) );
	$wp_customize->add_setting( 'blog_layout', array(
		'default'           => 'grid',
		'sanitize_callback' => 'obsidian_sanitize_choices',
	) );
	$wp_customize->add_control( 'blog_layout', array(
		'label'   => esc_html__( 'Blog Layout', 'obsidian' ),
		'section' => 'obsidian_layout_section',
		'type'    => 'radio',
		'choices' => array(
			'grid' => esc_html__( 'Grid', 'obsidian' ),
			'list' => esc_html__( 'List', 'obsidian' ),
		),
	) );
	$wp_customize->add_setting( 'post_sidebar', array(
		'default'           => true,
		'sanitize_callback' => 'obsidian_sanitize_checkbox',
	) );
	$wp_customize->add_control( 'post_sidebar', array(
		'label'   => esc_html__( 'Show sidebar on posts', 'obsidian' ),
		'section' => 'obsidian_layout_section',
		'type'    => 'checkbox',
	) );
	$wp_customize->add_setting( 'page_sidebar', array(
		'default'           => false,
		'sanitize_callback' => 'obsidian_sanitize_checkbox',
	) );
	$wp_customize->add_control( 'page_sidebar', array(
		'label'   => esc_html__( 'Show sidebar on pages', 'obsidian' ),
		'section' => 'obsidian_layout_section',
		'type'    => 'checkbox',
	) );
}
add_action( 'customize_register', 'obsidian_customize_register' );

// Customizer Sanitization Functions
function obsidian_sanitize_checkbox( $checked ) {
	return ( ( isset( $checked ) && true === $checked ) ? true : false );
}
function obsidian_sanitize_choices( $input, $setting ) {
	$choices = $setting->manager->get_control( $setting->id )->choices;
	return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
}

// Inject CSS Variables
function obsidian_customizer_css() {
	$accent_color = get_theme_mod( 'accent_color', '#c9a44a' );
	$secondary_accent = get_theme_mod( 'secondary_accent', '#e0c472' );
	$bg_primary = get_theme_mod( 'bg_primary', '#0a0a0f' );
	$bg_card = get_theme_mod( 'bg_card', '#1a1a26' );
	$text_primary = get_theme_mod( 'text_primary', '#f0f0f5' );
	
	$css = "
		:root {
			--accent-primary: {$accent_color};
			--accent-secondary: {$secondary_accent};
			--bg-primary: {$bg_primary};
			--bg-card: {$bg_card};
			--text-primary: {$text_primary};
		}
	";
	wp_add_inline_style( 'obsidian-custom', $css );
}
add_action( 'wp_enqueue_scripts', 'obsidian_customizer_css', 100 );
  `,
  'obsidian/inc/template-tags.php': `
<?php
function obsidian_posted_on() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( DATE_W3C ) ),
		esc_html( get_the_date() )
	);
	echo '<span class="posted-on">' . $time_string . '</span>';
}

function obsidian_posted_by() {
	$byline = sprintf(
		esc_html_x( 'by %s', 'post author', 'obsidian' ),
		'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
	);
	echo '<span class="byline"> ' . $byline . '</span>';
}
  `,
  'obsidian/header.php': `
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'obsidian' ); ?></a>

	<header id="masthead" class="site-header">
		<div class="container header-inner">
			<div class="site-branding">
				<?php
				if ( has_custom_logo() ) {
					the_custom_logo();
				} else {
					?>
					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php
				}
				?>
			</div>

			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="<?php esc_attr_e( 'Toggle navigation', 'obsidian' ); ?>">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
			</button>

			<nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'obsidian' ); ?>">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'menu_id'        => 'primary-menu',
					'container'      => false,
					'fallback_cb'    => false,
				) );
				?>
			</nav>

            <div class="header-cta">
                <?php $cta_url = get_theme_mod('hero_cta_url', '#'); ?>
                <a href="<?php echo esc_url($cta_url); ?>" class="btn"><?php esc_html_e('Let\\'s work together', 'obsidian'); ?></a>
            </div>
		</div>
	</header>
  `,
  'obsidian/footer.php': `
	<footer id="colophon" class="site-footer">
		<div class="container">
			<?php if ( is_active_sidebar( 'footer-1' ) || is_active_sidebar( 'footer-2' ) || is_active_sidebar( 'footer-3' ) ) : ?>
				<div class="footer-widgets">
					<div class="footer-column"><?php dynamic_sidebar( 'footer-1' ); ?></div>
					<div class="footer-column"><?php dynamic_sidebar( 'footer-2' ); ?></div>
					<div class="footer-column"><?php dynamic_sidebar( 'footer-3' ); ?></div>
				</div>
			<?php endif; ?>

			<div class="footer-bottom">
				<div class="site-info">
                    <?php 
                    $copyright = get_theme_mod('copyright_text', '');
                    if ($copyright) {
                        echo esc_html($copyright) . ' &copy; ' . date('Y');
                    } else {
                        ?>
                        &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>.
                        <?php
                    }
                    ?>
					<span class="sep"> | </span>
					<?php esc_html_e( 'Built with Obsidian Theme.', 'obsidian' ); ?>
				</div>

                <?php if (get_theme_mod('show_social', true)) : ?>
				<div class="social-links">
                    <?php if (get_theme_mod('github_url')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('github_url')); ?>" aria-label="GitHub" target="_blank" rel="noopener">
                            <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.42 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.58-5.37-12-12-12"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('linkedin_url')) : ?>
                        <a href="<?php echo esc_url(get_theme_mod('linkedin_url')); ?>" aria-label="LinkedIn" target="_blank" rel="noopener">
                            <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('email_address')) : ?>
                        <a href="mailto:<?php echo esc_attr(get_theme_mod('email_address')); ?>" aria-label="Email">
                            <svg viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
                        </a>
                    <?php endif; ?>
				</div>
                <?php endif; ?>
			</div>
		</div>
	</footer>
</div>

<?php wp_footer(); ?>
</body>
</html>
  `,
  'obsidian/sidebar.php': `
<?php
if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>
<aside id="secondary" class="widget-area">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>
  `,
  'obsidian/index.php': `
<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('post_sidebar', true) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
                <?php if ( have_posts() ) : ?>
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
  `,
  'obsidian/single.php': `
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
  `,
  'obsidian/page.php': `
<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('page_sidebar', false) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
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

            <?php 
            if (get_theme_mod('page_sidebar', false)) {
                get_sidebar(); 
            }
            ?>
		</div>
	</main>
<?php get_footer(); ?>
  `
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
});
