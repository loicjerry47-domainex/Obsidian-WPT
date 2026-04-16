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