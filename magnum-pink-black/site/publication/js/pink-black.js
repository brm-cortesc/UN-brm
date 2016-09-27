jQuery(document).ready(function($) {


	
	$('.btn-ver-pink').click(function(e) {
		
		e.preventDefault();

		//animacion al seleccionar la sección
		var total = 50;

		if( total <= 100){
			
			setInterval(function () {
				
				$('.page-magnum-pink-black').css({
					'background-color': '#f04883',
					'background-image': 'url("../images/pattern.svg"), linear-gradient(to right, #f04883 '+total+'%, #21111c 50%)'
				});

				total++

				if( total == 150){
					$('body').children()
						.velocity('fadeOut',
							{duration: '500',
							complete: function () {
								window.location = "pink.html";
							}
					});
				}

			},10);


		};

	});


	$('.btn-ver-black').click(function(e) {
		
		e.preventDefault();

		//animacion al seleccionar la sección

		var total = 50;

		if( total <= 100){
			
			setInterval(function () {
				
				$('.page-magnum-pink-black').css('background-image', 'url("../images/pattern.svg"), linear-gradient(to right, #f04883 '+total+'%, #21111c '+total+'%)');

				total--
				

				if( total == -50){
					$('body').children()
						.velocity('fadeOut',
							{duration: '500',
							complete: function () {
								window.location = "black.html";
							}
						});

				}

			},10);


		};

	});



});