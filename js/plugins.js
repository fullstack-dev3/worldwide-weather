+function(){
	var elBgImg = "[data-bg-image]";
	$(elBgImg).each(function(){
		var image = $(this).data("bg-image");
		$(this).css("background-image", "url("+image+")");
	});
}(jQuery);