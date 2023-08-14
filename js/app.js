(function($, document, window){
	
	$(document).ready(function(){
    $(".mobile-navigation").append($(".main-navigation .menu").clone());

    $(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

    let map = $(".map");
		let latitude = map.data("latitude");
		let longitude = map.data("longitude");
		if (map.length){
			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});	
		}
  });

  $(window).load(function(){

	});
})(jQuery, document, window);