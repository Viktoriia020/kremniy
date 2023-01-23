$(document).ready(function() {
    /*Инициализация анимации*/
    AOS.init();
    /*Инициализация анимации*/
    /*ScrollDown*/
    $(".scroll").click(function(){
        $('html, body').animate({scrollTop: '+=1050px'}, 800);
    });
    /*ScrollDown*/
    /*Anchors*/
    $('.nav a').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 800,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });

        return false;
    });
    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
                document.querySelectorAll('.nav a').forEach((el) => {
                    if (el.classList.contains('active')) {
                        el.classList.remove('active');
                    }
                });
                document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
            }
        });
    });
    /*Anchors*/
    /*NumbersAnimation*/
    var show = true;
    var countbox = ".about-us__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.about-us__number').css('opacity', '1');
            $('.about-us__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });
    /*NumbersAnimation*/
    /*ButtonUp*/
    $('.back-to-top').click(function () {
        $('body,html').animate({ scrollTop: 0}, 1500);
    });

    $(window).scroll(function() {
        let scrolled = $(window).scrollTop();

        if(scrolled > 350) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    /*ButtonUp*/
    /*Slider*/
    var slideNow = 1;
    var slideCount = $('#slidewrapper').children().length;
    var slideInterval = 5000;
    var navBtnId = 0;
    var translateWidth = 0;

    $(document).ready(function() {
        var switchInterval = setInterval(nextSlide, slideInterval);

        $('#viewport').hover(function() {
            clearInterval(switchInterval);
        }, function() {
            switchInterval = setInterval(nextSlide, slideInterval);
        });

        $('#next-btn').click(function() {
            nextSlide();
        });

        $('#prev-btn').click(function() {
            prevSlide();
        });

        $('.slide-nav-btn').click(function() {
            navBtnId = $(this).index();

            if (navBtnId + 1 != slideNow) {
                translateWidth = -$('#viewport').width() * (navBtnId);
                $('#slidewrapper').css({
                    'transform': 'translate(' + translateWidth + 'px, 0)',
                    '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                    '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
                });
                slideNow = navBtnId + 1;
            }
        });
    });
    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('#slidewrapper').css('transform', 'translate(0, 0)');
            slideNow = 1;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }
    function prevSlide() {
        if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
            translateWidth = -$('#viewport').width() * (slideCount - 1);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = slideCount;
        } else {
            translateWidth = -$('#viewport').width() * (slideNow - 2);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
    }
    /*Slider*/

    /*Проверка формы на пустое значение*/
    $('#button').on('click', function (event) {
        $('.empty-field').each(function (){
            if($(this).val() != ''){
                $(this).removeClass('empty');
            } else {
                $(this).addClass('empty');
                event.preventDefault();
            }
        })
    })

    $('.contact_form__submit').hide();

    $('#email').keyup(function (){
        if(validateEmailContact()){
            $('#email').removeClass('invalidField');
            $('.contact_form__submit').show();
        } else{
            $("#email").addClass('invalidField');
            $('.contact_form__submit').hide();
        }
    })
    function validateEmailContact(){
        var emailContact = $('#email').val();
        var regEx = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if(regEx.test(emailContact)){
            return true;
        }else{
            return false;
        }
    }
    /*Проверка формы на пустое значение*/
    /*Burger*/
    $('.header__menu-burger').on('click', function (){
        $('.header__menu').toggleClass('active');
    })
    /*Burger*/
});