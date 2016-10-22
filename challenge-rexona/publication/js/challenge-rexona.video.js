jQuery(document).ready(function($) {
	var grid = 0;
	
	$('.table-select td')
		.mouseenter(function () {

			var $that = $(this);
				$that.toggleClass('td-hover');
				$that.attr('data-grid', '1');

			grid  += parseInt($that.attr('data-grid'), 10) || 0;
			
			console.log(grid);	

		});

	var vid;


	//play all videos
	$('.btn-play')
		.click(function(e) {

			e.preventDefault();
			$('.btn-play').velocity('fadeOut', {duration:500});
			
			for (var i = 0; i < $('video').length; i++) {

				vid = document.getElementById(i)
				
				vid.play();


			};

			


		});

	$('video')
		.click(function(e) {
			for (var i = 0; i < $('video').length; i++) {

				vid = document.getElementById(i)
				
				if(vid.paused){
					vid.play();
				}else{
					vid.pause();
				}


			};
			$('.btn-play').velocity('fadeIn', {duration:500});
		});


	//Change Grid
	var medidor = $('#select-grid');

	//Funcion para cambiar el grid
	var cambiarGrid = function (Class, grid, widthCell) {
		var col,
			row;
		
		$('.video-grid-item').removeClass('video-grid-item-w-1 video-grid-item-w-2 video-grid-item-w-3 video-grid-item-w-4');
		$('.video-grid-item').addClass(Class);

		//Filas
		for( x = 0; x < grid; x++ ){
			row += '<td></td>';
		};

		//Columnas
		for( x = 0; x < grid; x++ ){
			col += '<tr>'+row+'</tr>';
		};


		$('.table-select-grid .table').html(col);
		$('.table-select-grid .table td').css({
			height: widthCell,
			width: widthCell
		});

	};

	//Selector de medida
	medidor
		.change(function () {


			var gridSize = medidor.val();

			gridSize = parseInt(gridSize);

			var division = 12.9/gridSize + 'rem';

			cambiarGrid( 'video-grid-item-w-'+ gridSize, gridSize, division  );

			$('.range-select output').html(gridSize+'x'+gridSize )


		});

});