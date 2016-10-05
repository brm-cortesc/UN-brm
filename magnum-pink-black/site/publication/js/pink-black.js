//Checa si es safari//
// var isSafari = !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome;

jQuery(document).ready(function($) {
	//Cargamos los sprites estáticos
	sprite('black-home', 'images/black-sprite.png', 264, 610, 8448, 1,1);

	sprite('pink-home', 'images/pink-sprite.png', 264, 660, 10824, 1,1);


	//animaciones de fondo separadas
	var moverPink = function () {
		//animacion al seleccionar la sección
		var total = 50;

		if( total <= 100){
			
			setInterval(function () {
				
				$('.page-pink-black').css({
					'background-color': '#f04883',
					'background-image': 'linear-gradient(to right, #f04883 '+total+'%, #21111c 50%)'
				});

				total++

				if( total == 150){
					$('body').children()
						.velocity('fadeOut',
							{duration: '250',
							complete: function () {
								window.location = "pink.html";
							}
					});
				}

			},10);


		};
	};

	var moverBlack = function () {
			//animacion al seleccionar la sección

		var total = 50;

		if( total <= 100){
			
			setInterval(function () {
				
				$('.page-pink-black').css('background-image', 'linear-gradient(to right, #f04883 '+total+'%, #21111c '+total+'%)');

				total--
				

				if( total == -50){
					$('body').children()
						.velocity('fadeOut',
							{duration: '250',
							complete: function () {
								window.location = "black.html";
							}
						});

				}

			},10);


		};
	};
	

	//animacion de sprites on hover
	$('.btn, .helado').mouseover(function() {


		if( $(this).hasClass('btn-ver-black') || $(this).children('.btn-ver-black').length > 0){
			sprite('black-home', 'images/black-sprite.png', 264, 610, 8448, 32,3);


		}else if( $(this).hasClass('btn-ver-pink') || $(this).children('.btn-ver-pink').length > 0 ){
			
			sprite('pink-home', 'images/pink-sprite.png', 264, 660, 10824, 41,2);
		}

	});

	//static on mouse leave
	$('.btn, .helado').mouseleave(function() {
		if( $(this).hasClass('btn-ver-black')  || $(this).children('.btn-ver-black').length > 0 ){
			sprite('black-home', 'images/black-sprite.png', 264, 610, 8448, 1,1);


		}else if( $(this).hasClass('btn-ver-pink') || $(this).children('.btn-ver-pink').length > 0  ){
			
			sprite('pink-home', 'images/pink-sprite.png', 264, 660, 10824, 1,1);
		}
		
	});

	//Click en la paleta
	$('.helado').click(function() {
		
		if( $(this).children('.btn-ver-pink').length > 0 ){

			// $(this).children('.btn-ver-pink').click();
			if(!!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome ){
			window.location = "pink.html";

			}
			moverPink();

		}

		if( $(this).children('.btn-ver-black').length > 0 ){

			if(!!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome ){
			window.location = "black.html";

			}


			moverBlack();

		}

	});





	
	$('.btn-ver-pink').click(function(e) {
		
		e.preventDefault();

		if(!!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome ){
			window.location = "pink.html";

		}

		moverPink();

		

	});


	$('.btn-ver-black').click(function(e) {
		
		e.preventDefault();

		if(!!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && typeof document.body.style.webkitFilter !== "undefined" && !window.chrome ){
			window.location = "black.html";

		}

	
		moverBlack();

	});



});