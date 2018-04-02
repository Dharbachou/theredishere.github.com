$( document ).ready(function() {
    var btn_login = $('#btn_login'),
        btn_back = $('#btn_back'),
        card_back = $('#font'),
        card_font = $('#back');


    btn_login.click((e)=>{
        e.preventDefault();
        card_back.addClass("flip-card__back-side_act");
        card_font.addClass("flip-card__font-side_act");
        btn_login.css({
            "transform": "translate3d(0, -100px, 0)",
        });
    });

    btn_back.click((e)=>{
        e.preventDefault();
        card_back.removeClass("flip-card__back-side_act");
        card_font.removeClass("flip-card__font-side_act");
        btn_login.css({
            "transform": "translate3d(0, 0px, 0)"
        });
    })

});