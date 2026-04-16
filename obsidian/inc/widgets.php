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