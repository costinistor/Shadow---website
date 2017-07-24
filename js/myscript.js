// JavaScript Document
$(document).ready(function(){
	var nav = $('.nav-bar');
	$('.mobile-nav').click(function(){
		nav.slideToggle();
	});
	
	$(window).resize(function(){
		if($(window).width() >= 680){
			nav.show();
		}
		else
		{
			nav.hide();
		}
	});
});