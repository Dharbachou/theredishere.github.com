$(document).ready(function() {

    $('.call-back').on('click', function() { //При клике на ссылку .call-back
        $('.call-back').toggleClass('rotate'); //Дать/забрать .rotate
        event.preventDefault();
        event.stopPropagation();
    });

    $('.call-back').on('click', function() { //При клике на ссылку .call-back
        $('.form-box').slideToggle(300, function() { //Элемент .form-box развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
        event.preventDefault();
        event.stopPropagation();
    });

    $('.slide').on('click', function() { //При клике на ссылку .slide
        $('.slide').toggleClass('rotate'); //Дать/забрать .rotate
        event.preventDefault();
        event.stopPropagation();
    });

    $('.slide').on('click', function() { //При клике на ссылку .slide
        $('.menu-hide').slideToggle(300, function() { //Элемент .menu-hide развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
        event.preventDefault();
        event.stopPropagation();
    });

    $('.lense').on('click', function() { //При клике на ссылку .lense
        $('.lense').toggleClass('rotate360'); //Дать/забрать .rotate360
        event.preventDefault();
        event.stopPropagation();
    });

    $('.lense').on('click', function() { //При клике на ссылку .lense
        $('.search').slideToggle(300, function() { //Элемент .search развернуть/свернуть
            console.log($(this).css('display')) //В консоли вывести прежнее значение свойства display
        });
        event.preventDefault();
        event.stopPropagation();
    });

    //PROJECTS MENU

    var tab = $('.projects-menu a'); //Создаём переменную tab

    $(tab).on('click', function() { //При клике на tab
        $(tab).removeClass('active-menu'); //У всех элементов с tab удаляем класс active-menu
        $(this).addClass('active-menu'); //Всем элементам с tab добавляем класс active-menu
        event.preventDefault();
    });

    //SLIDER CONTENT

    tab.click(function() { //При клике на tab
        var target = $(this).attr('href'); //Создаём переменную target, в которую запишем id
        $('.projects-content').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
        event.preventDefault();
    });

    //CAROUSEL

    $(".projects-slider .owl-carousel").owlCarousel({
        items: 2,
        singleItem: false,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });
    $(".slider-articles-content").owlCarousel({
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });
    $(".slider-works-content").owlCarousel({
        items: 1,
        autoplay: false,
        nav: true,
        dots: false,
        dotsEach: true,
        loop: true,
        navText: ""
    });

    $(document).click(function(event) {
        $('.form-box').slideUp(300);
        $('.call-back').removeClass('rotate');
        $('.menu-hide').slideUp(300);
        $('.slide').removeClass('rotate');
        $('.search').slideUp(300);
        $('.select-list').slideUp(300);
        
    });




    //customize select
    $('.select-time').click(function() {
        $('.select-list').slideToggle(300);
        event.stopPropagation();
    });
    $('.select-list li').click(function() {
        $('.select-time div').html($(this).html()); //Меняем контент текст в div, на текст в li, на который кликнули
        $('#time').val($(this).html()); //Запишем в атрибут value текст из li, на который кликнули
        $('.select-list').slideDown(); //Свернуть select

    });

    //collapse FAQ
   

    /*
    var questTab = $('.quest')
    //collapse FAQ
    $(questTab).click(function(){
        $('.answer').addClass('disabled');
        if($(this).next().hasClass('disabled')){
            $(this).next().removeClass('disabled');
            event.preventDefault();
        } else {
            $(this).next().addClass('disabled');
        }
       
        event.stopPropagation();
    });*\
   
   /*  $(questTab).click(function() {
        $('.answer').addClass('disabled');
        $(questTab).removeClass('green')
        $('.faq-arrow').removeClass('rotate-faq')
        var target = $(this).attr('data-number');

        $(target + '+.answer').removeClass('disabled');
        console.log(target)
        $(target).addClass('green')
        $(target + ' .faq-arrow').addClass('rotate-faq')
        event.stopPropagation();
    });*/



    /* $(document).click(function(event) {
        if ($(event.target).closest(".form-box").length || $(event.target).closest(".call-back").length) return; //Условие, что бы .form-box сворачивались при нажатии в любое место и забрать класс rotate у .call-back
        $('.form-box').slideUp(300) && $('.call-back').removeClass('rotate');


        if ($(event.target).closest(".menu-hide").length || $(event.target).closest(".slide").length) return; //Условие, что бы .menu-hide сворачивались при нажатии в любое место и забрать класс rotate у .slide
        $('.menu-hide').slideUp(300) && $('.slide').removeClass('rotate');

        if ($(event.target).closest(".search").length || $(event.target).closest(".lense").length) return; //Условие, что бы .search сворачивались при нажатии в любое место    
        $('.search').slideUp(300);

        if ($(event.target).closest(".select-time").length || $(event.target).closest(".select-list").length) return; //Условие, что бы .search сворачивались при нажатии в любое место    
        $('.select-list').slideUp(300);

     
    }); */
});

