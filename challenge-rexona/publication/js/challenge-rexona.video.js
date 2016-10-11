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

});