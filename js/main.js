$(function (){
    //Бегущая строка
    $(window).load(function(){
        $('.str').liMarquee();
    });
    
        $('.menu-open').on("click", function(event){
        event.stopPropagation();
        $('.menu-collapse').toggleClass('d-none');
            $(".menu, li .top-menu__item").toggleClass("menu-opened");
            });

        $(document).on('click', function(event) {
          if (!$(event.target).closest('.menu-open').length)  {     
                $(".menu, li .top-menu__item").removeClass("menu-opened");
                $('.menu-collapse').addClass('d-none');
          
        };

    // фиксированая шапка
    $(window).scroll( function () {
        if ($(window).scrollTop() > 0) {
            $('.header-top').addClass('fixed');
        } else {
            $('.header-top').removeClass('fixed');
        }
    });
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
    // Всплывающее окно

    $('#l1').click(function (e) {
        e.preventDefault();
        $('#exampleModal_1').arcticmodal();
    });
    $('#l3').click(function (e) {
        e.preventDefault();
        $('#exampleModal_3').arcticmodal();
    });
    $('#l4').click(function (e) {
        e.preventDefault();
        $('#exampleModal_4').arcticmodal();
    });
    $('#l5').click(function (e) {
        e.preventDefault();
        $('#exampleModal_5').arcticmodal();
    });
    $('#l7').click(function (e) {
        e.preventDefault();
        $('#exampleModal_7').arcticmodal();
    });
    $('#l8').click(function (e) {
        e.preventDefault();
        $('#exampleModal_8').arcticmodal();
    });
             });