document.addEventListener('DOMContentLoaded', function(){
        // Определяем переменную map
    var map;

    // Функция initMap которая отрисует карту на странице
    function initMap() {

        // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
        map = new google.maps.Map(document.getElementById('map'), {
            // При создании объекта карты необходимо указать его свойства
            // center - определяем точку на которой карта будет центрироваться
            center: {lat: 53.8934451, lng: 27.5699369},
            // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
            zoom: 14,
            zoomControl: false,
            disableDoubleClickZoom: false,
            mapTypeControl: false,
            scaleControl: false,
            scrollwheel: false,
            panControl: false,
            streetViewControl: false,
            draggable : true,
            overviewMapControl: false,
            overviewMapControlOptions: {
                opened: false,
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles : [
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#444444"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#f2f2f2"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "labels.text",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 45
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#00bfa5"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        }
                    ]
        });

                            // Создаем маркер на карте
        var marker = new google.maps.Marker({

            // Определяем позицию маркера
            position: {lat: 53.8934451, lng: 27.5699369 },

            // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
            map: map,

            // Пишем название маркера - появится если навести на него курсор и немного подождать
            title: 'Наш маркер: Большой театр',
            icon: 'blueIcon'
        });
    }
});