<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container">
            <section class="error-404 not-found" style="text-align: center; padding: 100px 0;">
                <header class="page-header">
                    <h1 class="page-title" style="font-size: 6rem; color: var(--accent-primary);"><?php esc_html_e( '404', 'obsidian' ); ?></h1>
                    <h2><?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'obsidian' ); ?></h2>
                </header>

                <div class="page-content" style="max-width: 600px; margin: 0 auto;">
                    <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'obsidian' ); ?></p>
                    <?php get_search_form(); ?>
                </div>
            </section>
		</div>
	</main>
<?php get_footer(); ?>