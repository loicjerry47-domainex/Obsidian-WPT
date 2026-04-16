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