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