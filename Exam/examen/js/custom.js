$(document).ready(function() {
    /*
        $('.results-btn-box').click(function() {
            var target = $(this).children().attr('href');
            var rWidth = $('.rel-col').width();
            console.log(rWidth);
    		console.log(target);
            if ($(target + ' .results-content').hasClass('active')) {
                $(target + ' .results-content').removeClass('active');
                $(target + ' .dark-circle').removeClass('active-circle');
                $(target + ' .results-item').removeClass('active-item');
                $(target + ' .results-btn span').removeClass('rotate');
                $(target).removeClass('open');
                $(target).css({ 'width': 'auto' });
                $(this).children().text('Развернуть');
            } else {
                $(target + ' .results-content').addClass('active');
                $(target + ' .dark-circle').addClass('active-circle');
                $(target).addClass('open');
                $(target + ' .results-btn span').addClass('rotate');
                $(target).css({ 'width': +rWidth + 'px' });
                $(this).children().text('Свернуть');
            }
            if ($(target).hasClass('open')) {
                $(target).removeClass('open');
            } else {
                $(target).addClass('open');
            }
            event.preventDefault()
        }); */
    $('.results-btn').click(function() {
        var rWidth = $('.rel-col').width();
        var circle = $(this).parent();
        var circleId = $(circle).attr('id');
        console.log(circleId);
        if (!$(this).hasClass('ok')) {
            $(this).addClass('ok');
            $(this).parent().addClass('open');
            $(this).parent().css({ 'width': +rWidth + 'px' });
            $(this).text('Свернуть');
            $('#' + circleId + ' .dark-circle').addClass('active-circle');
        } else {
            $(this).removeClass('ok');
            $(this).parent().removeClass('open');
            $(this).parent().css({ 'width': 'auto' });
            $(this).text('Развернуть');
            $('#' + circleId + ' .dark-circle').removeClass('active-circle');
        }
    });

    var tab = $('.work-system-tabs a'); //Создаём переменную tab

    $(tab).click(function() { //При клике на tab
        $(tab).removeClass('active-menu'); //У всех элементов с tab удаляем класс active-menu
        $(this).addClass('active-menu'); //Всем элементам с tab добавляем класс active-menu
        event.preventDefault();
    });

    //SLIDER CONTENT

    tab.click(function() { //При клике на tab
        var target = $(this).attr('href'); //Создаём переменную target, в которую запишем id
        $('.system-tabs').hide(); //Скрыть все элементы с классом .projects-content
        $(target).show(); //Показать элемент с id = target
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
        $('#' + targetbg + ' .hide-steps').addClass('showed');
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
        if ($(this).scrollTop() > $(window).height()) {
            $('.fix-menu').addClass('slide');
            $('.totop').fadeIn();
        } else {
            $('.fix-menu').removeClass('slide');
            $('.totop').fadeOut();
        }
    });

    $('.totop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    //Плавный скрол

    $(".menu-head > li > a").on("click", function(event) {
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
    $(menuTab).click(function() { //При клике на tab
        var target = $(this).attr('href');
        $(tab).removeClass('active-menu'); //У всех элементов с tab удаляем класс active-menu
        $('.work-system-tabs a').each(function() {
            if ($(this).attr('href') == target) {
                var targetSlide = $(this)
            }
            $(targetSlide).addClass('active-menu');
        });
        event.preventDefault();
    });
    menuTab.click(function() { //При клике на tab
        var target = $(this).attr('href'); //Создаём переменную target, в которую запишем id
        console.log()
        $('.system-tabs').fadeOut(); //Скрыть все элементы с классом .projects-content
        $(target).fadeIn(); //Показать элемент с id = target
        event.preventDefault();
    });
    $('.head-btn').click(function() {
        $('.modal-form').fadeIn();
        $('.modal-wrap').addClass('modal-active');
        $('body').css('overflow', 'hidden');
        event.stopPropagation();
    });

    $('.close').click(function() {
        $('.modal-form').fadeOut();
        $('.modal-wrap').removeClass('modal-active');
        $('body').css('overflow', 'auto');
        event.stopPropagation();
    });
    $('.modal-wrap').click(function() {
        event.stopPropagation();
    });
    $(document).click(function(event) {
        $('.modal-form').fadeOut();
        $('.modal-wrap').removeClass('modal-active');
        $('body').css('overflow', 'auto');
    });

    $('.sm-btn').click(function() {
        $('.xs-disable').slideToggle();
    });

    /*$('.results-btn-box').click(function() {
        var rWidth = $('.rel-col').width();

        if (!$(this).hasClass('open-text')) {
            $(this).addClass('open-text');
            $(this).parent().addClass('open');
            $(this).parent().css({ 'width': +rWidth + 'px' });
            $(this).text('Свернуть');
        } else {
            $(this).removeClass('open-text');
            $(this).parent().removeClass('open');
            $(this).parent().css({ 'width': 'auto' });
            $(this).text('Развернуть');
        }
    });

    $('.lense').click(function(){
    	var rWidth = $('.rel-col').width();
    	console.log(rWidth);
    }); */

    $('.toggle-btn').click(function() {
        $(this).toggleClass('toggle-close');
        if ($(this).hasClass('toggle-close')) {
            $('.menu-xs-box').show();
        } else {
            $('.menu-xs-box').hide();
        }
    });

    $('.menu-xs a').click(function() {
        $('.toggle-btn').removeClass('toggle-close');
        $('.menu-xs-box').hide();
    });

    $(".menu-xs > li > a").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.fixed-btn').click(function() {
        $(this).toggleClass('toggle-close');
        if ($(this).hasClass('toggle-close')) {
            $('.menu-xs-box').show();
        } else {
            $('.menu-xs-box').hide();
        }
    });

    $('.menu-xs a').click(function() {
        $('.fixed-btn').removeClass('toggle-close');
        $('.menu-xs-box').hide();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.fixed-btn').fadeIn();
        } else {
            $('.fixed-btn').fadeOut();
        }
        });
});
