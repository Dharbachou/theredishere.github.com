$(document).ready(function() {

    $('.results-btn').click(function() {
        var target = $(this).attr('href')
        console.log(target);

        if ($(target + ' .results-content').hasClass('active')) {
            $(target + ' .results-content').removeClass('active');
            $(target + ' .dark-circle').removeClass('active-circle');
            $(target + ' .results-item').removeClass('active-item');
            $(target + ' .results-btn span').removeClass('rotate');
        } else {
            $(target + ' .results-content').addClass('active');
            $(target + ' .dark-circle').addClass('active-circle');
            $(target + ' .results-item').addClass('active-item');
            $(target + ' .results-btn span').addClass('rotate');
        }
        if ($(target).hasClass('open')) {
            $(target).removeClass('open');
        } else {
            $(target).addClass('open');
        }
        event.preventDefault()
    });
    var tab = $('.work-system-tabs a');
    $(tab).click(function() { 
        $(tab).removeClass('active-menu');
        $(this).addClass('active-menu'); 
        event.preventDefault();
    });
    tab.click(function() { 
        var target = $(this).attr('href'); 
        $('.system-tabs').hide(); 
        $(target).show(); 
        event.preventDefault();
    });
var stepsTab = $('.steps-tab'); //Создаём переменную tab

    $(stepsTab).on('click', function() { //При клике на tab
        var targetbg = $(this).attr('id');
        var targetimg = $('#' + targetbg + ' .steps-icon');
        console.log(targetbg);
        console.log(targetimg);
        $(stepsTab).removeClass('active-tab'); //У всех элементов с tab удаляем класс active-menu
        $('.hide-steps').removeClass('showed');
        $('.steps-img').removeClass('bgred');
        $('.steps-icon').removeClass('icon-1c');
        $('.steps-icon').removeClass('icon-2c');
        $('.steps-icon').removeClass('icon-3c');
        $('.steps-icon').removeClass('icon-4c');
        $('.steps-icon').removeClass('icon-5c');
        if ($(targetimg).hasClass('icon-1')) {
            $(targetimg).addClass('icon-1c');
            console.log($(targetimg).hasClass('icon-1'));
        } else {
            if ($(targetimg).hasClass('icon-2')) {
                $(targetimg).addClass('icon-2c')
            } else {
                if ($(targetimg).hasClass('icon-3')) {
                    $(targetimg).addClass('icon-3c')
                } else {
                    if ($(targetimg).hasClass('icon-4')) {
                        $(targetimg).addClass('icon-4c')
                    } else {
                        if ($(targetimg).hasClass('icon-5')) {
                            $(targetimg).addClass('icon-5c')
                        }
                    }
                }
            }
        }
        if($(window).width() < '740')
        {
            $('#' + targetbg + ' .hide-steps').addClass('showed');
        }
        $('#' + targetbg + ' .steps-img').addClass('bgred');
        $(this).addClass('active-tab'); //Всем элементам с tab добавляем класс active-menu

    });

    //SLIDER CONTENT

    stepsTab.click(function() { //При клике на tab
        var target = $(this).attr('data-tab'); //Создаём переменную target, в которую запишем id
        $('.steps-row').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
        event.preventDefault();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > '100')
        {
            $('.menu-link').attr('id', 'bg__menu');
            
        }
        if ($(this).scrollTop() < '100')
        {
            $('.menu-link').removeAttr('id');
        }
        if ($(this).scrollTop() > $(window).height() && $(window).width() >= '740') {
            $('.fix-menu').addClass('slide');
            $('.totop').fadeIn();
        } else {
            $('.fix-menu').removeClass('slide');
            $('.totop').fadeOut();
        }
    });
    $(".menu-main > li > a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $(".sub-menu a").on("click", function(event) {
        event.preventDefault();
        var top = $('#work-sys').offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    $('.menu-slide').mouseenter(function() {
        $('.sub-menu').fadeIn();
    });
    $('.menu-slide').mouseleave(function() {
        $('.sub-menu').fadeOut();
    });
    var menuTab = $('.sub-menu a');
    $(menuTab).click(function() { 
        var target = $(this).attr('href');
        $(tab).removeClass('active-menu'); 
        $('.work-system-tabs a').each(function() {
            if ($(this).attr('href') == target) {
                var targetSlide = $(this)
            }
            $(targetSlide).addClass('active-menu');
        });
        event.preventDefault();
    });
    menuTab.click(function() { 
        var target = $(this).attr('href'); 
        console.log()
        $('.system-tabs').fadeOut(); 
        $(target).fadeIn(); 
        event.preventDefault();
    });
    $('.main-btn').click(function(){
        $('.modal-form').fadeIn();
        $('.modal-wrap').addClass('modal-active');
        $('body').css('overflow', 'hidden');
        event.stopPropagation();
    });

     $('.close').click(function(){
        $('.modal-form').fadeOut();
        $('.modal-wrap').removeClass('modal-active');
        $('body').css('overflow', 'auto');
        event.stopPropagation();
    });
     $('.modal-wrap').click(function(){
        event.stopPropagation();
     });
    $(document).click(function(event){
        $('.modal-form').fadeOut();
        $('.modal-wrap').removeClass('modal-active');
        $('body').css('overflow', 'auto');
    }); 

    
        {var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var nav_link = $('.menu a'); 

    link.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
    link_active.click(function(){
        link.removeClass('menu-link_active');
    });
    nav_link.click(function(){
        link.removeClass('menu-link_active');
        menu.removeClass('menu_active');
    });
}

});
