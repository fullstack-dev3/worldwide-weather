+function(){
	var elBgImg = "[data-bg-image]";
	$(elBgImg).each(function(){
		var image = $(this).data("bg-image");
		$(this).css("background-image", "url("+image+")");
	});

  var elBgClr = "[data-bg-color]";
	$(elBgClr).each(function(){
		var color = $(this).data("bg-color");
		$(this).css("background-color", color );
	});
}(jQuery);