ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.963841, 30.321429],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconImageOffset: [-5, -38]
        });


    myMap.geoObjects
        .add(myPlacemark);
});

$(document).ready(function () {
    $('.accordion_item_title_block').click(function () {
        var target = $(this).attr("data-href");
        $('.accordion_item_info').css({
            transition: "all 0.3s",
            display: "none"
        });
        $('.accordion_item_title_block').children('span').removeClass().addClass('flaticon-angle-arrow-down');
        $('.accordion_item_title_block').css({
            borderRadius: "9px"
        });
        $(this).css({
            borderRadius: "9px 9px 0 0"
        });
        $(this).children('span').removeClass().addClass('flaticon-up-arrow');
        $(target).slideDown( "slow", function() {
            // Animation complete.
        });
    });

    $('.go_to').click( function(event){ // ловим клик по ссылке с классом go_to
        event.preventDefault(); // вырубаем стандартное поведение
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    /* засунем сразу все элементы в переменные, чтобы скрипту не приходилось их каждый раз искать при кликах */
    var overlay = $('#overlay'); // подложка, должна быть одна на странице
    var open_modal = $('.open_modal'); // все ссылки, которые будут открывать окна
    var close = $('.modal_close, #overlay'); // все, что закрывает модальное окно, т.е. крестик и оверлэй-подложка
    var modal = $('.modal_div'); // все скрытые модальные окна

    open_modal.click( function(event){ // ловим клик по ссылке с классом open_modal
        event.preventDefault(); // вырубаем стандартное поведение
        var div = $(this).attr('href'); // возьмем строку с селектором у кликнутой ссылки
        overlay.fadeIn(400, //показываем оверлэй
            function(){ // после окончания показывания оверлэя
                $(div) // берем строку с селектором и делаем из нее jquery объект
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200); // плавно показываем
            });
    });

    close.click( function(){ // ловим клик по крестику или оверлэю
        modal // все модальные окна
            .animate({opacity: 0, top: '45%'}, 200, // плавно прячем
                function(){ // после этого
                    $(this).css('display', 'none');
                    overlay.fadeOut(400); // прячем подложку
                }
            );
    });

    $('.single-item').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
    });
    $('.single-iteml').slick();
});