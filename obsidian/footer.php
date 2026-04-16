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