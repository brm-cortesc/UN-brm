var limit=100, // Max number of stars
screenWidth = $(window).width();
body=document.getElementById('sparks');


loop={
      //initilizeing
      start:function(){
      for (var i=0; i <= limit; i++) {
         var spark=this.newSpark();
         spark.style.top=this.rand()*100+"%";
         spark.style.left=this.rand()*100+"%";
         spark.style.webkitAnimationDelay=this.rand()+"s";
         spark.style.mozAnimationDelay=this.rand()+"s";
         body.appendChild(spark);
      };
    },
     //to get random number
    rand:function(){
        return Math.random();
    },
     //createing html dom
     newSpark:function(){
        var d = document.createElement('div');
          d.innerHTML = '<div class="spark"></div>';
          return d.firstChild;
        },
};


jQuery(document).ready(function($) {

/* Oculta sección femenino y muestra masculino*/
  jQuery("#btnMasculino").click(function(event) {
    jQuery(".genero-F").hide(900);
    jQuery(".genero-M").show(900);
  });
/* Oculta sección masculino y muestra femenino*/
  jQuery("#btnFemenino").click(function(event) {
    jQuery(".genero-M").hide(900);
    jQuery(".genero-F").show(900);
  });
  
/*initialize sparks animation for desktop only*/
  if( screenWidth > 768 ){
    loop.start();
  }


/* Ejemplo de galería */
$('.glyphicon-picture').magnificPopup({
  type:'image',
  gallery:{enabled:true}

});

/*cambio de estado activo de botones de galería*/


var galeriaBtn = $('.selector-interna .galeria a'),
    tribunaBtn = $('.selector-interna .tribuna a'),
    galeria = $('#local'),
    tribuna = $('#redes'),
    urlGaleria = window.location.hash;


    galeriaBtn.click(function(e) {

      // e.preventDefault();
      e.stopPropagation();

      $('.selector-interna article').removeClass('active');
      $(this).parent().addClass('active');

      galeria.removeClass('hidden');
      tribuna.addClass('hidden');

    });

    tribunaBtn.click(function(e) {

      // e.preventDefault();
      e.stopPropagation();

      $('.selector-interna article').removeClass('active');
      $(this).parent().addClass('active');

      tribuna.removeClass('hidden');
      galeria.addClass('hidden');

    });


    if ( urlGaleria == '#galeria'  ) {

        galeriaBtn.parent().addClass('active');
        galeria.removeClass('hidden');
        tribuna.addClass('hidden');

    }else if(urlGaleria == '#tribuna'){

      tribunaBtn.parent().addClass('active');
      tribuna.removeClass('hidden');
      galeria.addClass('hidden');

    };


    //Acordeon//
    var acc = document.getElementsByClassName("btn-acordeon");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(e){
            e.preventDefault();
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
      }
    }


    /*Funcion para prevenir frame jacking*/

    /*=====================================================*/
    var __pcja_style = document.createElement('style');
    __pcja_style.type = 'text/css';
    __pcja_style.id = 'bfbs_cja';
    var __pcja_css = 'html{ display:none !important; }';
    if (__pcja_style.styleSheet){
      __pcja_style.styleSheet.cssText = __pcja_css;
    }else{
      __pcja_style.appendChild(document.createTextNode(__pcja_css));
    }

    document.getElementsByTagName("head")[0].appendChild(__pcja_style);
    if( self === top ){
      var __bfbs_cja = document.getElementById( 'bfbs_cja' );
      __bfbs_cja.parentNode.removeChild( document.getElementById( 'bfbs_cja' ) );
    }else{
      top.location = self.location;
    }

    /*Función para verificar el dominio XSF*/
    try {
      if (top.location.hostname != self.location.hostname) throw 1;
    } catch (e) {
      top.location.href = self.location.href;
    }

});