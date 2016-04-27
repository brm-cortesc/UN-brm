jQuery(document).ready(function($) {
	$("#registro").validate({

		       // debug: true,

		      /*Contenedor y clase donde se pinta el error*/
		      errorElement: "div",
		      errorClass: "mensaje",

		      /*Campos para validar en form para pedir fiesta*/

		    rules: {
		           nombre:       {required: true, accept: "[a-zA-Z]+" },
		           fecha:          {required: true},  
		           terminos:          {required: true}, 
		           email:       {required: true, email: true}	          
		           },

		    /*Mensajes en caso de dar error para cada input*/

		    messages: {
		      nombre:      {required: "debes ingresar tu nombre", accept: "solo ingresa texto"},
		      email:      {required: "debes ingresar un email", email: "Ingresa un email válido"},
		      terminos:         {required: "Debes aceptar los términos y condiciones"},
		      fecha:         {required: "Indica una fecha"}
		     

		           },

		    errorPlacement: function (error, element) {

		      if( element.attr('name') == 'terminos'){

		        error.insertAfter(element.parent());

		      }else{

		        error.insertAfter(element);
		      }

		    }


		});
});