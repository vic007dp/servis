$(function (){
    //Бегущая строка
    $(window).load(function(){
        $('.str').liMarquee();
    });
    // гамбургер
    $('.menu-open').click(function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1');
        $('.menu, li .top-menu__item').toggleClass('menu-opened');
    });
    
    //Плавная прокрутка
    $(".header-menu__text, .footer_link, .top-menu__item a").click(function (e) {
        e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
    
    
    //Слайдер
    
     $('.slader').slick({
        infinite: true,
          slidesToShow: 4,
          slidesToScroll: 4,
         prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
         nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
         responsive: [
        {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
        }
    }
             ]
     });
             });