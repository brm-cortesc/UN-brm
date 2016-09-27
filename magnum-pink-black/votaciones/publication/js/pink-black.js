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

	var ne = jQuery('.dataNegro').text(),
		i = 0,
		pi = jQuery('.dataPink').text();

	if (i <= 100) {

		setInterval(function() {
			//animacion de numero
			if ( i <= ne ) {
				//Helado Negro
				votaciones('#cblack', '.status-black .percentage', i );
				// flag = flag+1;

			}if(i  <= pi){
				//Helado Rosa
				votaciones('#cpink', '.status-pink .percentage', i );
				// flag = flag+1;
			}
			i++
		}, 10);

	};




	//Simular Click en mobile

	if (screenWidth <= 620 ) {

		$('.side').click(function() {
			
			var url = $('a', this).attr('href');

			window.open(url,'toolbar=0,resizable=1,status=0,width=640,height=528');


		});

	};

});