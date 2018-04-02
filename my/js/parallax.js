$(document).ready(function () {

    var layer = $('#parallax_move').find('.layer-bg'); 
    layer.map(function (key, value) { 
        var bottomPosition = ((window.innerHeight / 2) * (key / 100));
        $(value).css({ 
            'bottom': '-' + bottomPosition + 'px', 
            'transform': 'translate3d(0px, 0px, 0)',
        });
    });

    $(window).on('mousemove', function (e) { 
        var mouse_dx = (e.pageX); 
        var mouse_dy = (e.pageY);
        var w = (window.innerWidth / 2) - mouse_dx; 
        var h = (window.innerHeight / 2) - mouse_dy; 

        layer.map(function (key, value) { 
            var bottomPosition = ((window.innerHeight / 2) * (key / 100));
            var widthPosition = w * (key / 100); 
            var heightPosition = h * (key / 100); 
            $(value).css({
                'bottom': '-' + bottomPosition + 'px', 
                'transform': 'translate3d(' + widthPosition + 'px, ' + heightPosition + 'px, 0)',
            });
        });
    });

    let scrollElem = $('#parallax_scroll').find('.layer-bg'); 
    let heroUser = $('.hero__user__block');
    let heroSection = $('.hero__section__img');

    scrollElem.map(function (key, value) { 
        var bottomPosition = ((window.innerHeight / 2) * (key / 100));
        $(value).css({
            'bottom': '-' + bottomPosition + 'px', 
            'transform': 'translate3d(0px, 0px, 0)',
        });
    });

    $(window).scroll(function(){
        var wScroll = $(window).scrollTop();
	
        scrollElem.map(function (key, value) {
            let tp = (wScroll*0.025) * (1 / (key + 1));
            if(key != 0 && key < 3)
                tp = tp * 7;
            else if(key > 3){
                tp = tp * 10;
            }
            $(value).css({
                'transform' : 'translate3d(0 ,' +  tp + '% , 0)'
            });
        });
    });
});


function slideIt(block, strafeAmount) {
    var strafe = -strafeAmount + '%',
        transormString = 'translate3d(0,' + strafe + ',0)';
    block.css({
        'transform' : transormString
    });
}
