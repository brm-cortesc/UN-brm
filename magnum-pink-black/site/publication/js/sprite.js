/*Animaciones */
(function() {

	/*Funcion anonima para hacer compatibilidad de canvas y animationsframes*/
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

var sprite = function (canvasID, imgSource,cWidth, cHeight, Width, frames, fps) {

	/*Variables, objeto img, y donde se pinta*/
			
	var element,
		objeto,
		canvas;

	var alto = 0;			

	/*Con esto hacemos correr la animacion*/
	function Loop () {

	
	  window.requestAnimationFrame(Loop);

	  element.update();
	  element.render();
	}

	/*Funciones de alto, ancho & img source*/
	
	function sprite (options) {
	
		var that = {},
			frameIndex = 0,
			tickCount = 0,
			ticksPerFrame = options.ticksPerFrame || 0,
			numberOfFrames = options.numberOfFrames || 1;
		
		that.context = options.context;
		that.width = options.width;
		that.height = options.height;
		that.image = options.image;
		
		that.update = function () {

            tickCount += 1;

            /*Con esto hacemos mover 1 frame a la izquierda el sprite para generar el movimiento*/

            if (tickCount > ticksPerFrame) {

					tickCount = 0;
					
	                // If the current frame index is in range
	                if (frameIndex < numberOfFrames - 1) {	
	                    // Go to the next frame
	                    frameIndex += 1;
	                    alto = 0; 


	                }else{
	                	frameIndex = 0;

	                    // alto = 1608;
	                    // console.log("no cumplie")

	                }
	            }
        };
		
		that.render = function () {
		
		  // Clear the canvas
		  that.context.clearRect(0, 0, that.width, that.height);
		  
		  // Draw the animation
		   that.context.drawImage(
		     that.image,// imagen que cargamos
		     frameIndex * that.width / numberOfFrames, //Ancho
		     alto,//alto
		     that.width / numberOfFrames,//esto calcula el ancho de cada frame individual
		     that.height, 
		     0,
		     0,
		     that.width / numberOfFrames,
		     that.height);
		 };
		
		return that;
	}
	
	// Get canvas
	canvas = document.getElementById(canvasID);
	canvas.width = cWidth;
	canvas.height = cHeight;
	
	// Create sprite sheet
	objeto = new Image();	
	
	// Create sprite
	element = sprite({
		context: canvas.getContext("2d"),
		width: Width,
		height: cHeight,
		image: objeto,
		numberOfFrames: frames ,
		ticksPerFrame: fps
	});
	
	// Load sprite sheet
	objeto.addEventListener("load", Loop);
	objeto.src = imgSource;

};