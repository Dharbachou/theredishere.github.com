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
    var stepsTab = $('.steps-tab');
    $(stepsTab).on('click', function() { 
        var targetbg = $(this).attr('id');
        var targetimg = $('#' + targetbg + ' .steps-icon');
        console.log(targetbg);
        console.log(targetimg);
        $(stepsTab).removeClass('active-tab'); 
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
        $('#' + targetbg + ' .steps-img').addClass('bgred');
        $(this).addClass('active-tab'); 
    });
    stepsTab.click(function() { 
        var target = $(this).attr('data-tab'); 
        $('.steps-row').hide(); 
        $(target).show();
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

});
