var offset,
	screenWidth = $(window).width();


jQuery(document).ready(function($) {
	
	//Funcion rellenar helado
	function votaciones(obj, text, offset){

		//set de color
	    $(obj+' stop').attr('offset', offset+'%');
		//set de texto
	    $(text).html(offset+'%');

	    //Cambio de color de texto cuando se rellena la figura en mobile

	    if ( screenWidth <= 620 ) {

	    	setTimeout(function() {

	    		
	    		if (offset >= 60 ) {

	    				$(text).addClass('text-white');

	    		}else{

	    				$(text).removeClass('text-white');

	    		};

	    	}, 10);
	    };
	};

	//Helado Negro
	votaciones('#cblack', '.status-black .percentage', 60 );

	//Helado Rosa
	votaciones('#cpink', '.status-pink .percentage', 40 );


	//Simular Click en mobile

	if (screenWidth <= 620 ) {

		$('.side').click(function() {
			
			var url = $('a', this).attr('href');

			window.open(url,'toolbar=0,resizable=1,status=0,width=640,height=528');


		});

	};

});