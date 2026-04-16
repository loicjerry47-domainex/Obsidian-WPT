import fs from 'node:fs';
import path from 'node:path';

const files = {
  'obsidian/archive.php': `
<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('post_sidebar', true) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
                <?php if ( have_posts() ) : ?>
                    <header class="page-header">
                        <?php
                        the_archive_title( '<h1 class="page-title">', '</h1>' );
                        the_archive_description( '<div class="archive-description">', '</div>' );
                        ?>
                    </header>

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
  'obsidian/search.php': `
<?php get_header(); ?>
	<main id="primary" class="site-content">
		<div class="container <?php echo get_theme_mod('post_sidebar', true) ? 'has-sidebar clearfix' : ''; ?>">
            <div class="content-area">
                <?php if ( have_posts() ) : ?>
                    <header class="page-header">
                        <h1 class="page-title">
                            <?php printf( esc_html__( 'Search Results for: %s', 'obsidian' ), '<span>' . get_search_query() . '</span>' ); ?>
                        </h1>
                    </header>

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
  'obsidian/404.php': `
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
  `,
  'obsidian/comments.php': `
<?php
if ( post_password_required() ) {
	return;
}
?>
<div id="comments" class="comments-area">
	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
			$obsidian_comment_count = get_comments_number();
			if ( '1' === $obsidian_comment_count ) {
				printf( esc_html__( '1 thought on &ldquo;%1$s&rdquo;', 'obsidian' ), '<span>' . wp_kses_post( get_the_title() ) . '</span>' );
			} else {
				printf( 
					esc_html( _nx( '%1$s thought on &ldquo;%2$s&rdquo;', '%1$s thoughts on &ldquo;%2$s&rdquo;', $obsidian_comment_count, 'comments title', 'obsidian' ) ),
					number_format_i18n( $obsidian_comment_count ),
					'<span>' . wp_kses_post( get_the_title() ) . '</span>'
				);
			}
			?>
		</h2>
		<ol class="comment-list">
			<?php
			wp_list_comments( array(
				'style'      => 'ol',
				'short_ping' => true,
			) );
			?>
		</ol>
		<?php the_comments_navigation(); ?>
		<?php if ( ! comments_open() ) : ?>
			<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'obsidian' ); ?></p>
		<?php endif; ?>
	<?php endif; ?>
	<?php comment_form(); ?>
</div>
  `,
  'obsidian/front-page.php': `
<?php
/**
 * The front page template file
 */
get_header(); ?>

<main id="primary" class="site-main">
    <?php get_template_part('template-parts/hero'); ?>

    <section class="featured-projects site-content">
        <div class="container">
            <h2 style="text-align: center; margin-bottom: 40px;"><?php esc_html_e('Featured Work', 'obsidian'); ?></h2>
            <div class="portfolio-grid">
                <?php
                $featured_query = new WP_Query(array(
                    'post_type' => 'post',
                    'posts_per_page' => 3,
                ));
                if ($featured_query->have_posts()) :
                    while ($featured_query->have_posts()) : $featured_query->the_post();
                        get_template_part('template-parts/card');
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">250</div>
                    <div class="stat-label">Projects Completed</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Awards Won</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <h2><?php esc_html_e('Ready to start your next project?', 'obsidian'); ?></h2>
            <p><?php esc_html_e('Let\\'s create something beautiful together.', 'obsidian'); ?></p>
            <br>
            <?php 
            $email = get_theme_mod('email_address', 'hello@example.com'); 
            ?>
            <a href="mailto:<?php echo esc_attr($email); ?>" class="btn"><?php esc_html_e('Let\\'s work together', 'obsidian'); ?></a>
        </div>
    </section>
</main>

<?php get_footer(); ?>
  `,
  'obsidian/template-parts/hero.php': `
<?php
$title = get_theme_mod('hero_title', 'We Build Digital Experiences');
$subtitle = get_theme_mod('hero_subtitle', '');
$cta_text = get_theme_mod('hero_cta_text', 'View Our Work');
$cta_url = get_theme_mod('hero_cta_url', '#');
$bg_image = get_theme_mod('hero_bg_image', '');

$bg_style = $bg_image ? 'style="background-image: url(' . esc_url($bg_image) . ');"' : '';
?>
<section class="hero-section" <?php echo $bg_style; ?>>
    <div class="hero-content container">
        <?php if ($title) : ?>
            <h1 class="hero-title"><?php echo esc_html($title); ?></h1>
        <?php endif; ?>
        
        <?php if ($subtitle) : ?>
            <p class="hero-subtitle"><?php echo esc_html($subtitle); ?></p>
        <?php endif; ?>

        <?php if ($cta_text) : ?>
            <a href="<?php echo esc_url($cta_url); ?>" class="btn"><?php echo esc_html($cta_text); ?></a>
        <?php endif; ?>
    </div>
</section>
  `,
  'obsidian/template-parts/card.php': `
<article id="post-<?php the_ID(); ?>" <?php post_class('card'); ?>>
    <?php if ( has_post_thumbnail() ) : ?>
        <div class="card-img-wrap">
            <a href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
                <?php the_post_thumbnail( 'obsidian-card', array( 'class' => 'card-img', 'loading' => 'lazy' ) ); ?>
            </a>
        </div>
    <?php endif; ?>

    <div class="card-content">
        <?php
        $categories = get_the_category();
        if ( ! empty( $categories ) ) {
            echo '<span class="card-category">' . esc_html( $categories[0]->name ) . '</span>';
        }
        ?>
        <h3 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
        <div class="card-excerpt">
            <?php the_excerpt(); ?>
        </div>
    </div>
</article>
  `,
  'obsidian/template-parts/content.php': `
<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;

		if ( 'post' === get_post_type() ) :
			?>
			<div class="entry-meta" style="margin-bottom: 20px; color: var(--text-secondary);">
				<?php
				obsidian_posted_on();
				obsidian_posted_by();
				?>
			</div>
		<?php endif; ?>
	</header>

	<?php if ( has_post_thumbnail() && ! is_search() ) : ?>
		<div class="post-thumbnail" style="margin-bottom: 30px;">
			<?php the_post_thumbnail( 'obsidian-hero' ); ?>
		</div>
	<?php endif; ?>

	<div class="entry-content">
		<?php
		the_content(
			sprintf(
				wp_kses(
					__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'obsidian' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			)
		);

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'obsidian' ),
				'after'  => '</div>',
			)
		);
		?>
	</div>
</article>
  `,
  'obsidian/template-parts/content-none.php': `
<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'obsidian' ); ?></h1>
	</header>

	<div class="page-content">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) :

			printf(
				'<p>' . wp_kses(
					__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'obsidian' ),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url( admin_url( 'post-new.php' ) )
			);

		elseif ( is_search() ) :
			?>

			<p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'obsidian' ); ?></p>
			<?php
			get_search_form();

		else :
			?>

			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'obsidian' ); ?></p>
			<?php
			get_search_form();

		endif;
		?>
	</div>
</section>
  `
};

Object.entries(files).forEach(([filepath, content]) => {
  const fullPath = path.join(process.cwd(), filepath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
});
