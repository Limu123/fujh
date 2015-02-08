<?php

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

}

// Add support for custom background plugin
add_theme_support( 'custom-background' );




// Enqueue Javascript files
/*
function load_javascript_files() {

	if ( !is_admin() ) {	
		wp_enqueue_script( 'wilson_global', get_template_directory_uri().'/../FuJH/js/app.js', array('jquery'), '', true );
		if ( is_singular() ) wp_enqueue_script( "comment-reply" );
	}
}

add_action( 'wp_enqueue_scripts', 'load_javascript_files' );
*/




?>