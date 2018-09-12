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
     });
});