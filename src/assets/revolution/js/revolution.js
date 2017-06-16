jQuery(document).ready(function() {
	jQuery("#slider1").revolution({
		sliderType : "standard",
		sliderLayout : "auto",
		delay : 9000,
		navigation : {
			thumbnails : {
				enable : true,
				hide_onleave : false,
				wrapper_padding : 10,
				width : 150,
				height : 100,
				min_width : 150
			}
		},
		responsiveLevels : [1240, 1024, 778, 480],
		gridwidth : [1240, 1024, 778, 480],
		gridheight : [820, 600, 550, 500]
	});
});
