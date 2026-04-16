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