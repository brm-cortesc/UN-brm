jQuery(document).ready(function($) {

	$('body')
		.velocity('fadeIn',
			{duration: '500'
		});


	//Cargamos el sprite
	sprite('black', 'images/black-sprite.png', 264, 610, 8448, 32, 3);

	//Array de gifs
	var gifs =[
		['images/gif/black/black-1.gif','¡Compartelo con tu confidente!'],
		['images/gif/black/black-2.gif','¿Con quien brindaras?'],
		['images/gif/black/black-3.gif','¡Ve de shopping con tus amigas! '],
		['images/gif/black/black-4.gif','¡Comparte este dulce placer!'],
		['images/gif/black/black-5.gif','¡Comparte ese placer! '],
		['images/gif/black/black-6.gif','¡Es tiempo de shopping con amigas!'],
		['images/gif/black/black-7.gif','¡Invita a tus amigos de farra!'],
		['images/gif/black/black-8.gif','S¡Vámonos de compras!'],
		['images/gif/black/black-9.gif','Comparte una Magnun con...'],
		['images/gif/black/black-10.gif','Comparte una tarde de helado'],
		['images/gif/black/black-11.gif','¡Invita a tus amigas!'],
		['images/gif/black/black-12.gif','¡Comparte un pequeño momento de placer!'],
		['images/gif/black/black-13.gif','¡Compartelo con tus amigas!'],
		['images/gif/black/black-14.gif','Comparte este momento de placer'],
		['images/gif/black/black-15.gif','¡Practícalo con tus amigas!']
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



