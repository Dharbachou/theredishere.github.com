var $body;

$(document).ready(function () {

    $body = $('body');

    var mainMenu = $('.main_menu');

    var eventtype = 'touchstart click',
        resetMenu = function () {
            mainMenu.removeClass('main_menu_open');
            $body.removeClass('menu_open');
        },
        bodyClickFn = function (evt) {
            if (!$(evt.target).parents('.main_menu, .menu_link').length) {
                resetMenu();
                $(document).off(eventtype, bodyClickFn);
            }
        };

    $body.on(eventtype, '.menu_link', function (e) {
        e.preventDefault();

        if (!mainMenu.hasClass('main_menu_open')) {
            mainMenu.addClass('main_menu_open');
            $body.addClass('menu_open');
            $(document).on(eventtype, bodyClickFn);
        } else {
            mainMenu.removeClass('main_menu_open');
            $body.removeClass('menu_open');
        }
    });

    $body.on('click', '.show_more_link_about', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000, 'swing');
    });

    $body.on('click', '.tab_link', function (e) {
        e.preventDefault();

        var self = $(this),
            parent = self.parent(),
            id = self.attr('href'),
            tabContainer;

        if (parent.closest('.section_nav').length) {
            tabContainer = parent.closest('.section_nav').next('.tab_container');
        } else {
            tabContainer = parent.closest('.tab_links').next('.tab_container')
        }

        if (!parent.hasClass('active')) {
            parent.siblings().removeClass('active');
            parent.addClass('active');
            tabContainer.find('.tab_content').hide().filter(id).fadeIn();
            if (self.closest('.section_tab_container').length) {
                var sectionNavOffset = self.closest('.section_tab_container').offset().top;
                
                $('html, body').animate({
                    scrollTop: sectionNavOffset
                }, 400);
            }
        }
    });

    //меню переход
    $body.on('click', '.more_review', function (e) {
        e.preventDefault();

        var self = $(this),
            reviewList = self.parent().prev('.reviews_list');

        self.parent().hide();
        reviewList.find('.hidden').removeClass('hidden');
    });

    //передвижение по меню
    $body.on('click', '.main_menu_link', function (e) {
        e.preventDefault();

        var self = $(this),
            href = self.attr('href');

        if (!self.hasClass('popup_open')) {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 1000, 'swing', function () {
                window.location.hash = href;
            });
        }
    });

    $body.on('click', '.show_more_link_nav', function (e) {
        e.preventDefault();

        var self = $(this),
            id = self.data('section'),
            brifNav = self.closest('.section_brif_nav'),
            sectionNav = brifNav.next('.section_tab_container').find('.section_nav');

        $('html, body').animate({
            scrollTop: sectionNav.offset().top + 'px'
        }, 1000, 'swing');

        sectionNav.find('a[href="#' + id + '"]').click();
    });


    $body.on('mouseover', '.review_one', function () {
        var self = $(this),
            reviewText = self.siblings('.review_text');

        if (reviewText.is(':hidden')) {
            reviewText.fadeIn();
        }
    }).on('mouseleave', '.review_one', function () {
        $('.review_text').fadeOut();
    });

    $('.client_logo_helper').each(function () {
        var self = $(this),
            tooltipContentHtml = self.closest('.client_logo_container').next('.client_text').html();

        self.tooltipster({
            trigger: 'hover',
            contentAsHTML: true,
            theme: 'tooltip_white',
            arrowColor: '#ffffff',
            position: 'bottom',
            offsetX: '-15px',
            offsetY: '-5px',
            content: tooltipContentHtml,
            autoClose: true,
            delay: 50
        });
    });

    //проверяет валидность формы
    $('#form_order').validate({
        focusInvalid: false,
        rules: {
            name: {
                required: true
            },
            company: {
                required: true
            },
            position: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Укажите адрес электронной почты!',
                email: 'Неправильный формат электронной почты!'
            }
        },
        errorElement: 'span',
        errorClass: 'error_text',
        errorPlacement: function (error, element) {
            if (element.is('#email')) {
                error.insertAfter(element);
            }

        },
        highlight: function (element) {
            $(element).addClass('textInput_error');
        },
        unhighlight: function (element) {
            $(element).removeClass('textInput_error');
        },
        submitHandler: function (form) {
            if (!$(form).find('.btn_send').hasClass('btn_send_sended')) {
                $(form).find('.btn_send').addClass('btn_send_sended')
            }

            $.ajax({
                url: 'form',
                data: $(form).serialize(),
                type: 'POST'
            }).done(function (result) {
                if (result['status']) {
                    $('.modal_order').addClass('modal_container_success');
                    if (typeof ga != 'undefined') {
                        ga('send', 'event', 'form', 'send');
                    }
                    if (typeof yaCounter20921035 != 'undefined') {
                        yaCounter20921035.reachGoal('form_send');
                    }
                }
            });
        }
    });

    $body.on(eventtype, '.popup_open', function (e) {
        e.preventDefault();
        if (typeof ga != 'undefined') {
            ga('send', 'event', 'form', 'open');
        }
        if (typeof yaCounter20921035 != 'undefined') {
            yaCounter20921035.reachGoal('form_open');
        }
        modalOpen($(this).attr('href'));
    });

    $body.on(eventtype, '.modal_close', function (e) {
        e.preventDefault();
        if (typeof ga != 'undefined') {
            ga('send', 'event', 'form', 'close');
        }
        if (typeof yaCounter20921035 != 'undefined') {
            yaCounter20921035.reachGoal('form_close');
        }
        modalClose();
    });

    $body.on('click', '.show_more_link_partners', function (e) {
        e.preventDefault();

        var self = $(this),
            href = self.attr('href'),
            partnersContainer = $('#partners_container');

        $('html, body').animate(
            {scrollTop: $($(this).attr('href')).offset().top},
            1000,
            'swing',
            function () {
                window.location.hash = href;
            }
        );

        setTimeout(function () {
            partnersContainer.find('.section_nav').show();
            partnersContainer.find('.tab_container').slideDown();
        }, 1000);

    });

    var modalStateOpen = false;

    function modalOpen(modalId) {
        var modalOpened = $('.modal_container').filter(modalId);
        var aroundCbox;

        if (!$('#overlay').length) {
            $body.append('<div id="overlay"></div>');
            setTimeout(function () {
                $('#overlay').fadeIn(600);
            }, 200);
        }

        if (!$('.aroundCbox').length) {
            $body.append('<div class="aroundCbox"></div>');

            aroundCbox = $('.aroundCbox');
            aroundCbox.show();
            modalOpened.appendTo(aroundCbox);

            setTimeout(function () {
                modalOpened.addClass('modal_container_open');
            }, 200);


        }

        modalStateOpen = true;

        modalFix();
        overlayClose();
    }

    function modalClose() {
        $('#overlay').fadeOut(function () {
            $(this).remove();
        });

        var s = $('.modal_container_open');
        s.removeClass('modal_container_open');

        modalStateOpen = false;

        setTimeout(function () {
            $('.aroundCbox').replaceWith(s);

            $('html').css('overflow-y', 'scroll');
            $('body').css('marginRight', 0);
        }, 200);
    }

    $(window).on('unload', function () {
        if (modalStateOpen) {
            if (typeof ga != 'undefined') {
                ga('send', 'event', 'form', 'close');
            }
            if (typeof yaCounter20921035 != 'undefined') {
                yaCounter20921035.reachGoal('form_close');
            }
        }
    });

    function overlayClose() {
        $(document).on(eventtype, function (e) {
            if ($(e.target).find('.modal_container').length) {
                modalClose();
            }
        });
    }

    function modalFix() {
        var $body = $('body');
        var oldBodyOuterWidth = $body.outerWidth(true);
        var $html = $('html');
        var oldScrollTop = $html.scrollTop();
        $html.css('overflow-y', 'hidden');
        var newBodyOuterWidth = $body.outerWidth(true);
        $body.css('margin-right', (newBodyOuterWidth - oldBodyOuterWidth) + 'px');
        $html.scrollTop(oldScrollTop); // necessary for Firefox
    }

    $body.on('click', '.to_top_link', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });

    var scrolled,
        $sectionNav = $('.section_nav'),
        $topLink = $('.to_top_link'),
        $sectionAnchor = $('.section_anchor');

    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        scrolled = parseInt(scrolled);

        $sectionNav.each(function () {
            var self = $(this),
                selfOffset = self.offset().top,
                navInner = self.find('.nav_inner'),
                resetNavOffset = self.closest('.section_tab_container').nextAll('.reset_nav').offset().top;

            if (scrolled >= selfOffset && scrolled < resetNavOffset) {
                navInner.addClass('nav_inner_fix');
            } else {
                navInner.removeClass('nav_inner_fix');
            }
        });

        if (scrolled > 800) {
            $topLink.fadeIn(400);
        } else {
            $topLink.fadeOut(400);
        }

        var bgChangeContainer = $('.bg_change');

        bgChangeContainer.each(function () {
            var self = $(this),
                bgClass,
                bgClassTop = parseInt(self.offset().top) - 110;

            if (scrolled >= bgClassTop) {
                bgChangeContainer.removeClass('bg_active');
                self.addClass('bg_active');
                bgClass = $body.find('.bg_active').data('bg');
                if (bgClass == 'bg_white') {
                    $body.removeClass('bg_black').addClass(bgClass);
                } else {
                    $body.removeClass('bg_white').addClass(bgClass);
                }
            } else if (scrolled <= 140) {
                $body.removeClass('bg_white bg_black');
            }
        });

        $sectionAnchor.each(function () {
            var id = $(this).attr('id'),
                sectionTop = parseInt($(this).offset().top);

            if ((scrolled + 100) >= sectionTop) {
                mainMenu.find('li').removeClass('active');
                mainMenu.find('a[href*=' + id + ']').parent().addClass('active');
            }
        });

    };

});

