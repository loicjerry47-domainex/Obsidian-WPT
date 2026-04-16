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