'use strict';
;
(function($){

    function isScrolledIntoView(elem) {
        if (elem.length) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();

            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();

            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
        }
        return false;
    }

    $(document).ready( function () {
        //Foundation init
        $(document).foundation();

    });
    
    $(document).on( 'scroll', function () {
        const sectionTitle = $('.section-title');

        sectionTitle.each( function () {
            if ( isScrolledIntoView($(this)) ) {
                $(this).addClass('section-title--animated');
            }
        });

        const section = $('.title-subtitle');
        if ( isScrolledIntoView( section ) ) {
            section.addClass('title-subtitle--animated');
        }

        const el = $('.two-col-txt-img');
        if ( isScrolledIntoView(el) ) {
            el.addClass('animated');
        }

    })
    
})(jQuery);