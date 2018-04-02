$(document).ready(function () {
	(function(){
		var counter = 0;

		$('.slider__controls-item').on('click', function(e){
		    e.preventDefault();

			var $this = $(this),
				container = $this.closest('.slider'),
				itemsDisp = container.find('.slider__display .slider__display__img'),
				activeItemDisp = container.find('.slider__display .slider__display__img_active'),
				itemsInfo = container.find('.slider__info .slider__info__item');
				activeItemInfo = container.find('.slider__info .slider__info__item_active');
				itemsPrev = container.find('.slider__controls-item_prev .slider__controls-item__img'),
				activeItemPrev = container.find('.slider__controls-item_prev .slider__controls-item__img_active');
				itemsNext = container.find('.slider__controls-item_next .slider__controls-item__img'),
				activeItemNext = container.find('.slider__controls-item_next .slider__controls-item__img_active');

			if	($this.hasClass('slider__controls-item_prev')) {
				counter--;
				itemsNext.not('slider__display__img_active').css('top', '-100%');
				itemsPrev.not('slider__display__img_active').css('top', '100%');
			} else if ($this.hasClass('slider__controls-item_next')) {
				counter++;
				itemsNext.not('slider__display__img_active').css('top', '100%');
				itemsPrev.not('slider__display__img_active').css('top', '-100%');
			}

			if (counter >= itemsPrev.length) {
				counter = 0;
			} 
			
			if (counter < 0) {
				counter = itemsPrev.length + counter;
			}

			var reqItemDisp = itemsDisp.eq(counter);
			var reqItemInfo = itemsInfo.eq(counter);
			var reqItemPrev = itemsPrev.eq(counter);
			var reqItemNext = itemsNext.eq(counter);

			activeItemInfo.fadeOut(300, function () {
				reqItemInfo.fadeIn(300, function(){
					activeItemInfo.removeClass('slider__info__item_active');
					$(this).addClass('slider__info__item_active');
				});
			});

			activeItemDisp.fadeOut(300, function () {
				reqItemDisp.fadeIn(300, function(){
					activeItemDisp.removeClass('slider__display__img_active');
					$(this).addClass('slider__display__img_active');
				});
			});

			if	($this.hasClass('slider__controls-item_prev')) {

				activeItemPrev.animate({
					'top' : '-100%'
				}, 500);

				reqItemPrev.animate({
					'top' : '0%'
				}, 500, function () {
					activeItemPrev.removeClass('slider__controls-item__img_active').css('top', '100%');
					$(this).addClass('slider__controls-item__img_active');
				});


				activeItemNext.animate({
					'top' : '100%'
				}, 500);

				reqItemNext.animate({
					'top' : '0%'
				}, 500, function () {
					activeItemNext.removeClass('slider__controls-item__img_active').css('top', '-100%');
					$(this).addClass('slider__controls-item__img_active');
				});
			} else {
				activeItemPrev.animate({
					'top' : '100%'
				}, 500);

				reqItemPrev.animate({
					'top' : '0%'
				}, 500, function () {
					activeItemPrev.removeClass('slider__controls-item__img_active').css('top', '-100%');
					$(this).addClass('slider__controls-item__img_active');
				});


				activeItemNext.animate({
					'top' : '-100%'
				}, 500);

				reqItemNext.animate({
					'top' : '0%'
				}, 500, function () {
					activeItemNext.removeClass('slider__controls-item__img_active').css('top', '100%');
					$(this).addClass('slider__controls-item__img_active');
				});
			}

		});
	}());
});