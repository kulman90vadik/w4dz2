$(function(){
    
    $(window).scroll(function(){
        if($(document).scrollTop() > 40) {
            $('.header__top').addClass('header__top--bg');
        } else {
            $('.header__top').removeClass('header__top--bg');
        }
    });


    $(".menu__link, .footer__logo, .header__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href');
		var	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

    $('.blog-slider').slick({
        arrows: false,
        dots: true
    });
    
    $('.header__btn, .menu__link').on('click', function(){
        $('.menu').toggleClass('menu--hidden');
        $('.header__item').toggleClass('header__item--rotate');
    });

    var mixer = mixitup('.gallery__inner');
});