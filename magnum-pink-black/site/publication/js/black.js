jQuery(document).ready(function($) {

	$('body')
		.velocity('fadeIn',
			{duration: '500'
		});


	//Cargamos el sprite
	sprite('black', 'images/black-sprite.png', 264, 610, 8448, 32, 3);

	//Array de gifs
	var gifs =[
		['images/gif/black/black-1.gif','¡Compártelo con tu confidente!'],
		['images/gif/black/black-2.gif','¿Con quién brindarás?'],
		['images/gif/black/black-3.gif','¡Ve de shopping con tus amigas!'],
		['images/gif/black/black-4.gif','¡Comparte este delicioso placer!'],
		['images/gif/black/black-5.gif','¡Comparte este placer!'],
		['images/gif/black/black-6.gif','¡Es tiempo de shopping con amigas!'],
		['images/gif/black/black-7.gif','¡Invita a tus amigos de farra!'],
		['images/gif/black/black-8.gif','¡Vámonos de compras, lleva a todas tus amigas!'],
		['images/gif/black/black-9.gif','Comparte un Magnun con...'],
		['images/gif/black/black-10.gif','¡Las tardes de helado se comparten!'],
		['images/gif/black/black-11.gif','¡Asústate con tus amigas!'],
		['images/gif/black/black-12.gif','¡Los pequeños placeres también se comparten!'],
		['images/gif/black/black-13.gif','Este momento solo lo conocen tú y tus amigas ¡Compártelo! '],
		['images/gif/black/black-14.gif','¡Comparte este momento de placer!'],
		['images/gif/black/black-15.gif','¡Practícalo con tus amigos!']
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
			loader('#cblack', '.status .percentage', i );
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

			
			loader('#cblack', '.status-black .percentage', 0);

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



