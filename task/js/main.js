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
        $('.accordion_item_title_block').css({
            borderRadius: "9px"
        });
        $(this + ' span').addClass('flaticon-up-arrow');
        $(target).slideDown( "slow", function() {
            // Animation complete.
        });
    });
});