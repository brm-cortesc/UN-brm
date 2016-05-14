var equipoLocal = $('.team-local .usuario'),
	equipoVisitante = $('.team-visitante .usuario')

jQuery(document).ready(function($) {
	
	$('.btn-cambio').click(function(event) {

		event.preventDefault();
		event.stopPropagation();

		$('.glyphicon-refresh').velocity({

			rotateZ: '180deg'
		}, {
			duration: 500,
			easing: 'easeInOutSine',
			complete: function (element) {
				$('.glyphicon-refresh').velocity('reverse');
			}
		});

		/*Mostramos  - ocultamos los equipos*/
		$('.team-tlocal, .team-tvisitante').toggleClass('team-active');
		$('.team-local, .team-visitante').toggleClass('hidden');

		/*Reseteamos la animacion*/
		if( $('.team-local').hasClass('hidden') ) {
			equipoLocal.velocity('reverse');

		/*Corremos la animacion*/
		}if ( !$('.team-local').hasClass('hidden') ) {

				equipoLocal.velocity({

					opacity: 1

				},{

					duration: 1000,
					easing: 'easeInOutSine',

				});
				
		/*reseteamos la animacion*/
		}if ( $('.team-visitante').hasClass('hidden') ){

			equipoVisitante.velocity('reverse');

		/*corremos la animacion*/
		}if ( !$('.team-visitante').hasClass('hidden') ) {

				equipoVisitante.velocity({

					opacity: 1

				},{

					duration: 1000,
					easing: 'easeInOutSine',

			});

		};

	});


	/*corremos la primera animacion*/
	equipoLocal.velocity({
		opacity: 1

		},{

			duration: 1000,
			easing: 'easeInOutSine',

		});




});