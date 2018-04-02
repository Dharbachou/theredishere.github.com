$(document).ready(function () {
    setBlur();
});

$(window).resize(function(){
	setBlur();
});


function setBlur() {
	if(!$('div').is('.blur__background')){
		return;
	}

	var
		imgWidth = $('.blur__background').width(),
		blur = $('.blur__form'),
		blurSection = $('.blur'),
		posTop = blurSection.offset().top - blur.offset().top + 50,
		posLeft = blurSection.offset().left - blur.offset().left;

	blur.css({
		'background-size' : imgWidth + 'px' + ' ' + 'auto',
		'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
	});
}