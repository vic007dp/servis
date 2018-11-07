$(function () {
    // фиксированая шапка

    //    $(window).scroll( function () {
    //        if ($(window).scrollTop() > 0) {
    //            $('.header-top').addClass('fixed');
    //        } else {
    //            $('.header-top').removeClass('fixed');
    //        }
    //    });
    // });

    //Бегущая строка
    $(window).load(function () {
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

   //Появление таблицы
    
    $('.tab_1').click(function () {
        $('.c1, .header-title').css('display', 'none');
        $('#praice_tel').toggleClass('#praice_tel').css('display', 'block');
        $('#praice_comp, #praice_plashet, #blog').css('display', 'none');
    });
    $('.tab_2').click(function () {
        $('.c1, .header-title').css('display', 'none');
        $('#praice_comp').toggleClass('#praice_comp').css('display', 'block');
        $('#praice_tel, #praice_plashet, #blog').css('display', 'none');
    });
    $('.tab_3').click(function () {
        $('.c1, .header-title').css('display', 'none');
        $('#praice_plashet').toggleClass('#praice_plashet').css('display', 'block');
        $('#praice_tel, #praice_comp, #blog').css('display', 'none');
    });
    $('.table-close, #contacts, #home').click(function () {
        $('#praice_tel, #praice_comp, #praice_plashet, #box-modal, #blog').css('display', 'none');
        $('.c1, .header-title').toggleClass('.c1, .header-title').css('display', 'block');
    });
    $('.tab_4').click(function (e) {
        e.preventDefault();
        $('#televizorModal').arcticmodal();
    });
    $('#l13, #l2, #l6, #l9, #l10, #l11, #l12').click(function (e) {
        e.preventDefault();
        $('#remtelModal').arcticmodal();
    });

    // блог
    

//    $('#link_blog').click(function (e) {
//        e.preventDefault();
//        $('#blog_Modal').arcticmodal();
//    });

//    $('.link_blog').click(function () {
//        $('.c1, .header-title').css('display', 'none');
//        $('#blog').toggleClass('#blog').css('display', 'block');
//        $('#praice_tel, #praice_comp, #praice_tel, #box-modal').css('display', 'none');
//    });
    $('.blog_text-1').click(function (e) {
        e.preventDefault();
        $('#blog_modal-1').arcticmodal();
    });
    $('.blog_text-2').click(function (e) {
        e.preventDefault();
        $('#blog_modal-2').arcticmodal();
    });
    $('.blog_text-3').click(function (e) {
        e.preventDefault();
        $('#blog_modal-3').arcticmodal();
    });
    $('.blog_text-4').click(function (e) {
        e.preventDefault();
        $('#blog_modal-4').arcticmodal();
    });
    $('.blog_text-5').click(function (e) {
        e.preventDefault();
        $('#blog_modal-5').arcticmodal();
    });
    $('.blog_text-6').click(function (e) {
        e.preventDefault();
        $('#blog_modal-6').arcticmodal();
    });
    $('.blog_text-7').click(function (e) {
        e.preventDefault();
        $('#blog_modal-7').arcticmodal();
    });
    $('.blog_text-8').click(function (e) {
        e.preventDefault();
        $('#blog_modal-8').arcticmodal();
    });
    $('.blog_text-9').click(function (e) {
        e.preventDefault();
        $('#blog_modal-9').arcticmodal();
    });

    // гамбургер
    $('.menu-open').on("click", function (event) {
        event.stopPropagation();
        $('.menu-collapse').toggleClass('d-none');
        $(".menu, li .top-menu__item").toggleClass("menu-opened");
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.menu-open').length) {
            $(".menu, li .top-menu__item").removeClass("menu-opened");
            $('.menu-collapse').addClass('d-none');

        };
    });
    //Плавная прокрутка
    $(".header-menu__text, .footer_link, #contacts").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({
            scrollTop: destination
        }, 800);
    });
    
    //форма
    $('#zakaz').click(function (e) {
        e.preventDefault();
        $('#formModal').arcticmodal();
    });
    $(document).ready(function() {
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

        el.validate({
            rules: {
                tel: {
                    required: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                name: {
                    required: true
                },
                cmc: {
                    required: true
                }
            },
            messages: {
                tel: {
                    required: 'Поле обязательно для заполнения',
                    regex: 'Телефон может содержать символы + - ()'
                },
                name: {
                    required: 'Поле обязательно для заполнения',
                },
                cmc: {
                    required: 'Поле обязательно для заполнения',
                    }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="goToNewPage" - делаем:
                    case 'goToNewPage':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    // Если у формы id="popupResult" - делаем:
                    case 'popupResult':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                setTimeout(function() {
                                    $('#loader').fadeOut();
                                }, 800);
                                setTimeout(function() {
                                    $('#overlay').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#overlay').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });
    
});
});
