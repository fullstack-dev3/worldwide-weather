(function($, document, window){
	
	$(document).ready(function(){
    $(".mobile-navigation").append($(".main-navigation .menu").clone());

    $(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
  });

  $(window).load(function(){

	});
})(jQuery, document, window);