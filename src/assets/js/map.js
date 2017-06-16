$(function() {"use strict";
	var owl;
	var myCenter;
	var sync1;
	var sync2;
	var filterValue;
	/********* add map **********/

	var myCenter = new google.maps.LatLng(28.615336, 77.219565);

	function initialize() {

		try {
			var mapProp = {
				center : myCenter,
				zoom : 5,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("map"), mapProp);

			var marker = new google.maps.Marker({
				position : myCenter,
			});

			marker.setMap(map);
		} catch(e) {
			//alert(e)
		}

	}

	initialize();

})

