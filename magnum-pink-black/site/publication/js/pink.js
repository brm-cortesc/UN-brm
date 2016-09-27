jQuery(document).ready(function($) {

	$('body')
		.velocity('fadeIn',
			{duration: '500'
		});

	//Carga del sprite
	sprite('pink', 'images/pink-sprite.png', 264, 660, 10824, 3);


	//Array de gifs
	var gifs =[
		['images/gif/pink/pink-1.gif','Some random text 1'],
		['images/gif/pink/pink-2.gif','Some random text 2'],
		['images/gif/pink/pink-3.gif','Some random text 3'],
		['images/gif/pink/pink-4.gif','Some random text 4'],
		['images/gif/pink/pink-5.gif','Some random text 5'],
		['images/gif/pink/pink-6.gif','Some random text 6'],
		['images/gif/pink/pink-7.gif','Some random text 7'],
		['images/gif/pink/pink-8.gif','Some random text 8'],
		['images/gif/pink/pink-9.gif','Some random text 9'],
		['images/gif/pink/pink-10.gif','Some random text 10'],
		['images/gif/pink/pink-11.gif','Some random text 11'],
		['images/gif/pink/pink-12.gif','Some random text 12'],
		['images/gif/pink/pink-13.gif','Some random text 13'],
		['images/gif/pink/pink-14.gif','Some random text 14'],
		['images/gif/pink/pink-15.gif','Some random text 15']
	];

	var imgContainer = $('.img-gif img'),
		txtContainer = $('.text-comparte');

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

	//se ejecuta al cargar la página
	cambiar();

	$('.btn-reload').click(function(e) {
		//se ejecuta al hacer click
		// imgContainer.attr('src', 'images/');
		e.preventDefault();
		cambiar();

	});


});



