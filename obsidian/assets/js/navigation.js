(function($) {
    'use strict';

    $(document).ready(function() {
        var $menuToggle = $('.menu-toggle');
        var $navigation = $('.main-navigation');

        $menuToggle.on('click', function() {
            var isExpanded = $(this).attr('aria-expanded') === 'true';
            $(this).attr('aria-expanded', !isExpanded);
            $navigation.toggleClass('toggled');
        });

        // Close menu on link click (mobile)
        $navigation.find('a').on('click', function() {
            if ($navigation.hasClass('toggled')) {
                $menuToggle.attr('aria-expanded', 'false');
                $navigation.removeClass('toggled');
            }
        });
    });
})(jQuery);