$(document).ready(function(){
	var link = $('.menu-link');
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
});