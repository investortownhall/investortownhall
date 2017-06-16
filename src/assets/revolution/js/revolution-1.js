jQuery(document).ready(function() {
	jQuery("#slider1").revolution({
		sliderType : "standard",
		sliderLayout : "auto",
		delay : 9000,
		navigation : {
			
			 arrows:{
			 	 style:"",
         enable:true,
         hide_onmobile:true,
         hide_onleave:true,
         hide_delay:200,
         hide_delay_mobile:1200,
         hide_under:0,
         hide_over:9999,
         tmp:'',
			 	 
			 left:{
            h_align:"left",
            v_align:"center",
            h_offset:20,
            v_offset:0
            
         },
         
         right:{
           h_align:"right",
           v_align:"center",
           h_offset:20,
           v_offset:0
         }
			} 
		},
		responsiveLevels : [1240, 1024, 778, 480],
		gridwidth : [1240, 1024, 778, 480],
		gridheight : [820, 600, 550, 500]
	});
});
