jQuery(document).ready(function($) {

	$('body')
		.velocity('fadeIn',
			{duration: '500'
		});


	//Cargamos el sprite
	sprite('black', 'images/black-sprite.png', 264, 610, 8448, 32, 3);

	//Array de gifs
	var gifs =[
		['images/gif/black/black-1.gif','Some random text 1'],
		['images/gif/black/black-2.gif','Some random text 2'],
		['images/gif/black/black-3.gif','Some random text 3'],
		['images/gif/black/black-4.gif','Some random text 4'],
		['images/gif/black/black-5.gif','Some random text 5'],
		['images/gif/black/black-6.gif','Some random text 6'],
		['images/gif/black/black-7.gif','Some random text 7'],
		['images/gif/black/black-8.gif','Some random text 8'],
		['images/gif/black/black-9.gif','Some random text 9'],
		['images/gif/black/black-10.gif','Some random text 10'],
		['images/gif/black/black-11.gif','Some random text 11'],
		['images/gif/black/black-12.gif','Some random text 12'],
		['images/gif/black/black-13.gif','Some random text 13'],
		['images/gif/black/black-14.gif','Some random text 14'],
		['images/gif/black/black-15.gif','Some random text 15']
	];

	var imgContainer = $('.img-gif img'),
			txtContainer = $('.text-comparte'),
			i = 0;

		// Función para traer una imagen random

		var cambiar = function () {
			var max = gifs.length,
			min = 0,
			randNum;
			do{
				randNum = Math.floor(Math.random() * (max - min) + min);
			}while(gifs[randNum] >= 0){
				imgContainer.attr('src', gifs[randNum][0]);
				txtContainer.text(gifs[randNum][1]);
			};
			
		};

		//Funcion rellenar helado
		function loader(obj, text, offset){

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

		//dummy load

		var filler = function () {
			setInterval(function() {
					//animacion de numero				
				loader('#cblack', '.status .percentage', i );

				if ( i == 100 ) {
					$('.loader').addClass('hidden');
					cambiar();
					console.log(i)
				}
				
				i++
			}, 10);
		};

		var cargador = function () {

			i = 0;
			clearInterval(filler);
			
			imgContainer.attr('src', 'images/span.png');
			$('.loader').removeClass('hidden');		

			if (i <= 100) {

				filler();			

			}else{


				window.clearInterval(filler);
				
				loader('#cblack', '.status .percentage', 0);

			};
		};

		//Loader de imagenes
		var offset,
			screenWidth = $(window).width(),
			text = $('.percentage');

		$('.btn').click(function(e) {
			//se ejecuta al hacer click
			e.preventDefault();
			clearInterval(filler);

			
			if ( $(this).hasClass('btn-reload') ) {
				cargador();
			}else if($(this).hasClass('btn-ver-pink')) {
				
				$('body')
					.velocity({
						backgroundColor: '#f04883',
					},
						{duration: '250'
					})
					.velocity('fadeOut',
						{duration: '250',
						complete: function () {
							
							window.location = 'pink.html'
						}
					});
			};

		});

		//Traemos primera imagen
		cargador();



});



