require('./assets/stylesheets/styles.scss');
require('./assets/stylesheets/responsive.scss');

(function ($) {
    $(document).ready(function () {
        var offset = $('nav.desktop').offset().top;
        $(document).scroll(function (e) {
            var scrollTop = $(document).scrollTop();
            console.log('scrollTop', scrollTop);
            if (scrollTop > offset) {
                $('nav.desktop').addClass('sticky');
            } else {
                $('nav.desktop').removeClass('sticky');
            }
            if (scrollTop > 711 && scrollTop < 1300) { //si on a défini de plus de 187 px du haut vers le bas
                $('.content1-right img').addClass('fixRight'); //on ajoute la classe 'fixgauche' à <div id='gauche'>
            } else {
                $('.content1-right img').removeClass('fixRight');
            }
            parallax('.bg');
            parallax('.banner');
        });
        $('.icon-nav-mobile').click(function (e) {
            $('.mobile').css('display', 'inline-block');
        });
        $('.icon-close').click(function (e) {
            $('.mobile').css('display', 'none');
        });
    });
})(jQuery);



function parallax(className) {
    const scrolled = $(window).scrollTop();
    $(className).css('background-position-y', -(scrolled * 0.2) + 'px');
}