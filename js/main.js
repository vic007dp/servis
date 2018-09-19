$(function (){
    //Бегущая строка
    $(window).load(function(){
        $('.str').liMarquee();
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
        slidesToScroll: 1
      }
    }
             ]
     });
             });