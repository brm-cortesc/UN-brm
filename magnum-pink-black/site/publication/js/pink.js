jQuery(document).ready(function($) {

	$('body')
		.velocity('fadeIn',
			{duration: '500'
		});

	//Carga del sprite
	sprite('pink', 'images/pink-sprite.png', 264, 660, 10824, 41,2);


	//Array de gifs
	var gifs =[
		['images/gif/pink/pink-1.gif','¡Toma la iniciativa, invítalo a ver esa película!'],
		['images/gif/pink/pink-2.gif','¡Invita a tu mejor amiga!'],
		['images/gif/pink/pink-3.gif','¡Dile sí a tus amigos y comparte este momento con ellos!'],
		['images/gif/pink/pink-4.gif','¡Ve con tus amigas y cambia de look!'],
		['images/gif/pink/pink-5.gif','¡Baila con tus broders!'],
		['images/gif/pink/pink-6.gif','¡Compártelo con los dormilones!'],
		['images/gif/pink/pink-7.gif','¡Comparte una nueva selfie con tus amigas!'],
		['images/gif/pink/pink-8.gif','¡Invita a todos tus amigos!'],
		['images/gif/pink/pink-9.gif','¡Rompe la rutina y vive este momento con tus amigos!'],
		['images/gif/pink/pink-10.gif','¿A quién invitarás a la película?'],
		['images/gif/pink/pink-11.gif','¡Compártelo con tus amigos… incluso tu mascota!'],
		['images/gif/pink/pink-12.gif','Las tardes en la playa se disfrutan más con amigos ¡Invítalos! '],
		['images/gif/pink/pink-13.gif','¡Ve con tus amigas!'],
		['images/gif/pink/pink-14.gif','¡Comparte con alguien una tarde de relax!'],
		['images/gif/pink/pink-15.gif','¡Vive una tarde en el mall con tus amigas!']
	];

	var imgContainer = $('.img-gif img'),
		txtContainer = $('.text-comparte'),
		i = 0;

	// Función para traer una imagen random

	var cambiar = function () {
		window.clearInterval(filler);
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

	

	//filler del helado cargador
	var offset,
		screenWidth = $(window).width(),
		text = $('.percentage');

	var filler = function () {

		if (i <= 100){
			loader('#cpink', '.status .percentage', i );
			i++

		}
		if( i === 100 ){

			i = 0
			// cambiar();
		}
		else{
			clearInterval(filler);
		}


		
	};

	//loader

	var cargador = function () {

		i = 0;
		clearInterval(filler);


		if (i <= 100) {

			setInterval(filler, 25);		

		}else{


			clearInterval(filler);

			
			loader('#cpink', '.status-pink .percentage', 0);

			$('.loader').addClass('hidden');

		};
	};



	$('.btn').click(function(e) {
		//se ejecuta al hacer click
		e.preventDefault();
		clearInterval(filler);

		
		if ( $(this).hasClass('btn-reload') ) {
			
			imgContainer.attr('src', 'images/span.png');
			clearInterval(filler);								
			
			$('.img-gif').imagesLoaded()
				.progress(function (instance, image ) {
					cargador();
					$('.loader').removeClass('hidden');
				})
				.done(function () {							
					clearInterval(filler);
					cambiar();
				});


		}else if($(this).hasClass('btn-ver-black')) {
			
			$('body')
				.velocity({
					backgroundColor: '#21111c',
				},
					{duration: '250'
				})
				.velocity('fadeOut',
					{duration: '250',
					complete: function () {
						
						window.location = 'black.html'
					}
				});
		};

	});

	//Traemos primera imagen
	cambiar();

	$('.img-gif').imagesLoaded()
		.progress(function (instance, image ) {
			cargador();			
			$('.loader').removeClass('hidden');
		})
		.done(function (instance) {

			clearInterval(filler);
			
		});




});



