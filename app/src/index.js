import './assets/stylesheets/responsive.scss';
import './assets/stylesheets/styles.scss';
import './assets/stylesheets/animate.scss';

(function ($) {
    $(document).ready(function () {
        const offset = $('nav.desktop').offset().top;
        $(document).scroll(function () {
            const scrollTop = $(document).scrollTop();
            // console.log('scrollTop', scrollTop);
            if (scrollTop > offset) {
                $('nav.desktop').addClass('sticky');
            } else {
                $('nav.desktop').removeClass('sticky');
            }
            if (scrollTop > 711 && scrollTop < 1300) { //si on a défini de plus de 187 px du haut vers le bas
                $('.content1-right img').addClass('fix-right'); //on ajoute la classe 'fixgauche' à <div id='gauche'>
            } else {
                $('.content1-right img').removeClass('fix-right');
            }
            parallax('.content2');
            parallax('.content0');
        });
        $('.icon-nav-mobile').click(function (e) {
            $('.mobile').css('display', 'block');
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