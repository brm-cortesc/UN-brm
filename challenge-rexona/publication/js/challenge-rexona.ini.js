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
	
		


});