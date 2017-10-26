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
});