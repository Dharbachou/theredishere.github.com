$(document).ready(function(){
	var tab = $('.tab');
	tab.click(function(){
		var target = $(this).attr('href');
		$('.content').hide();
		$(target).show();
	});
});