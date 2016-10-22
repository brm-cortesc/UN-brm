jQuery(document).ready(function($) {	


	$('.text-slice h1 .slice-l')
		.velocity({
			opacity: 1,
			left: 0,
			easing: 'easeInSine'
		},{
			duration: 500,
			complete: function  () {
				$('.text-slice h1 .slice-r')
					.velocity({
						opacity: 1,
						right: 0
					},{
						duration: 500,
						easing: 'easeInSine'
					});
				
			}
		});
	

	var mostrarEl = function (el1, el2) {
		$(el1)
			.velocity({
				opacity: 1
			},{
				duration:500,
				display: 'block',
				easing: 'easeInOutSine'


		});

		$(el2).velocity('reverse',{
			display: 'none'
		});

	};


	//Mostar controles de video//

	$('a.btn')
		.click(function () {
			// e.preventDefault();
			$('.btn').removeClass('btn-active');
			var self = $(this);

			var target = $(this).attr('href');
			// scroll to each target
			$(target).velocity('scroll', {
			    duration: 500,
			    offset: -30,
			    easing: 'ease-in-out'
			});

			if( $(this).hasClass('btn-grid') ){
				self.addClass('btn-active');
				mostrarEl('.table-select-grid', '#search-user' );
			}

			if( $(this).hasClass('btn-buscar') ){
				self.addClass('btn-active');
				mostrarEl('#search-user', '.table-select-grid' );	
			}


	});

	/*cerrar UI con body*/
	$(document).click(function(e) {

		if (!$(e.target).is('a.btn') && $('a.btn').hasClass('btn-active')){
			$('.btn').removeClass('btn-active');

			// $('.table-select-grid').velocity('reverse',{
			// 	display: 'none'
			// });

			// $('#search-user').velocity('reverse',{
			// 	display: 'none'
			// });
		}

	});


	var donaciones = function (num) {

		$('.range .numero').html(num);

		$('.range .text').css(
			'left',  num + 2  + '%'
			);

		$('.range .fill').css(
			'width', num + '%'
			);

		// return num;

	};

	donaciones(15);

});