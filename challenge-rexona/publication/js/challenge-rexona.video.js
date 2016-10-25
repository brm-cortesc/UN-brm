	//total datos
	var total ='';
	//arreglo con datos
	var obj=[];
	//paginador
	var paginador={
		activo:'uno',
		id:0,
		idNext:1,
		idPrev:0
	};
jQuery(document).ready(function($) {
	var grid = 0;
	var vid;
	
	//obtengo los datos del json
	$.getJSON('results/d.json',function(data){
		$('#0').attr('src',data[0]['low_resolution']);
		var total=data.length;
		setTotal(total,data);
	});
	
	//jseteo las globales de total de videos y los datos relacionados
	function setTotal(a,b){
		total=a;
		$.each(b,function(key,val){
			obj.push(val);
		});
	}
	
	$('.table-select td').mouseenter(function () {
		var $that = $(this);
			$that.toggleClass('td-hover');
			$that.attr('data-grid', '1');
		grid  += parseInt($that.attr('data-grid'), 10) || 0;
		console.log(grid);	
	});

	//play all videos
	$('.btn-play').click(function(e) {
		e.preventDefault();
		$('.btn-play').velocity('fadeOut', {duration:500});
		for (var i = 0; i < $('video').length; i++) {
			vid = document.getElementById(i)
			vid.play();
		};
	});

	$('video').click(function(e) {
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
	//Funcion para cambiar el grid
/*	var cambiarGrid = function (Class, grid, widthCell) {
	};*/

	//Selector de medida
	var medidor = $('#select-grid');
	medidor.change(function () {
			$('.pagination').find('.active').removeClass('active');//se quita la clase activa para abilitar click en pag
			var gridSize = medidor.val();
			console.log(gridSize);
			pintar(gridSize,true);
			gridSize = parseInt(gridSize);
			var division = 12.9/gridSize + 'rem';
			cambiarGrid( 'video-grid-item-w-'+ gridSize, gridSize, division  );
			$('.range-select output').html(gridSize+'x'+gridSize );
		});
});

	//inyecta los videos al documento val=valor del ranga
		function pintar(val,c){
			//console.log('ejecuta pintar()');
			var vid = val*val;
			var html='';
			//si la funcion se dispara desde el cambio de grilla
			if(c){
				resetPagindor();
			}
			switch(val){
				case '1':
					console.log('opc 1');
				
					html='<div class="video-grid-item"><button class="btn btn-play glyphicon glyphicon-play-circle" type="button"></button><video id="'+paginador.id+'" name="media" poster=""><source src="'+obj[paginador.id]['low_resolution']+'" type="video/mp4"></video></video></div>';
					$('.video-grid').html(html);
					unoMasPaginador();
					break;
				case '2':
					console.log('opc 2');
				
					for (var i = 0; i < 4; i++) {
						html+='<div class="video-grid-item"><button class="btn btn-play glyphicon glyphicon-play-circle" type="button"></button><video id="'+paginador.id+'" name="media" poster=""><source src="'+obj[paginador.id]['low_resolution']+'" type="video/mp4"></video></video></div>';
						unoMasPaginador();
					}
					$('.video-grid').html(html);
					break;
				case '3':
					console.log('opc 3');
				
					for (var i = 0; i < 9; i++) {
						html+='<div class="video-grid-item"><button class="btn btn-play glyphicon glyphicon-play-circle" type="button"></button><video id="'+paginador.id+'" name="media" poster=""><source src="'+obj[paginador.id]['low_resolution']+'" type="video/mp4"></video></video></div>';
						unoMasPaginador();
					}
					$('.video-grid').html(html);
					break;
				case '4':
					console.log('opc 4');
				
					for (var i = 0; i < 16; i++) {
						html+='<div class="video-grid-item"><button class="btn btn-play glyphicon glyphicon-play-circle" type="button"></button><video id="'+paginador.id+'" name="media" poster=""><source src="'+obj[paginador.id]['low_resolution']+'" type="video/mp4"></video></video></div>';
						unoMasPaginador();
					}
					$('.video-grid').html(html);
					break;
			}//fin switch
		}//fn funcion pintar()
		
		//resetea los valores del paginador
		function resetPagindor(){
			paginador.id=0;
			paginador.idNext=1;
			paginador.idPrev=paginador.id;	
		}
		
		//aumenta los numeros del obj pagindor
		function unoMasPaginador(){
			paginador.id+=1;
			paginador.idNext+=1;
			paginador.idPrev-=paginador.id;
		}
		
		//al hcer click en los btn de pagindor
		$(document).on('click','.pag',function(){
			$('.pagination').find('.active').removeClass('active');
			
			if (!$(this).hasClass('active')) {
				$(this).addClass('active');
				var num = $(this).attr('data-num');
				var grilla =  $('#select-grid').val();
				var por = grilla*grilla;
				paginador.id=por*num;
				console.log(num,grilla);
				paginador.idNext=paginador.id+1;
				paginador.idPrev=paginador.id-1;
				pintar(grilla,false);
				var medidor = $('#select-grid');
				var gridSize = medidor.val();
				gridSize = parseInt(gridSize);
				var division = 12.9/gridSize + 'rem';
				cambiarGrid( 'video-grid-item-w-'+ gridSize, gridSize, division  );
				$('.range-select output').html(gridSize+'x'+gridSize );
			}
		});	
		
		var cambiarGrid = function (Class, grid, widthCell) {
		var col,row;
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