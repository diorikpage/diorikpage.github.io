$(function () {
    $(".b-slider").owlCarousel({
        items: 1,
        pagination: true,
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        animateOut: 'fadeInLeft'
    });
    $(".b-slider__market-owl").owlCarousel({
        pagination: false,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            750: {
                items: 3
            },
            970: {
                items: 4
            }
        }
    });
    $(".b-slider__news-owl").owlCarousel({
        pagination: false,
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            750: {
                items: 3
            },
            970: {
                items: 3
            }
        }
    });
    $('.b-open-menu').on('click', function () {
        $('.b-mob-menu').addClass('j-open');
    });
    $('.b-open-menu').on('click', function () {
        $('.b-open-menu__item-1').toggleClass('j-open-menu__item-1');
        $('.b-open-menu__item-2').toggleClass('j-open-menu__item-2');
        $('.b-open-menu__item-3').toggleClass('j-open-menu__item-3');

    });
    $(window).on('resize', function () {
        if ($(window).width() < 970) {
            $('.b-header__left').appendTo('.b-mob-menu');
            $('.b-slider__news-title').matchHeight();
            $('.b-header__right').appendTo('.b-mob-menu');
            $('.b-header__right-basket').appendTo('.b-header__contacts-wrap');
        } else {
            $('.b-header__left').appendTo('.b-header__left-wrap');
            $('.b-header__right').appendTo('.b-header__right-wrap');
            $('.b-header__right-basket').appendTo('.b-header__right-basket-wrap');
        }
    });
    $('.j-up').on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    $('.j-header-enter').on('click', function () {
        $('.j-modal-login').arcticmodal();
    });
    $(".b-open-menu").click(function(){
    $(".b-mob-menu").stop().slideToggle();
    });
    $(window).trigger('resize');

});


