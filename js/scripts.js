jQuery(document).ready(function ($) {
    detectNav();
    detectMenuRes();

    $(window).on("scroll", function () {
        detectNav();
    });
    $(window).resize(function(){
        detectMenuRes();
    });
    
    //Video home

    $('.btn-play').on('click', function() {
        $('video').trigger('play');
        $('.video-poster').removeClass('bg-video');
  
        $('.btn-play').toggleClass('hidden');
        $('.btn-pause').toggleClass('hidden');
      });
  
      $('.btn-pause').on('click', function() {
        $('video').trigger('pause');
        $('.video-poster').addClass('bg-video');
  
        $('.btn-play').toggleClass('hidden');
        $('.btn-pause').toggleClass('hidden');
      });
    
      //Contacto form

      $(".btn-enviar-contacto").click(function() {
        // Obtén los datos del formulario
        var formData = $(".form-contacto").serialize();
        alert("btn contacto");
        // Envía los datos al servidor (aquí debes tener un script en el servidor para procesar estos datos)
        $.ajax({
            type: "POST",
            url: "https://yossitacuchi.github.io/backend/procesar_contacto.php", // Reemplaza con la URL de tu script de procesamiento en el servidor
            data: formData,
            success: function(response) {
                // Maneja la respuesta del servidor aquí
                console.log(response);
                alert("¡Formulario enviado con éxito!");
            },
            error: function(error) {
                // Maneja los errores aquí
                console.log(error);
                alert("Hubo un error al enviar el formulario.");
            }
        });
    });

    function detectNav(){
        if(!$('.navbar').hasClass('navbar-info')){
            if ($(document).scrollTop() > 50) {
                $(".navbar").addClass('bg-light').removeClass('bg-transparent');
                $('.btn-contacto1').removeClass('hide');
                $('.btn-contacto2').addClass('hide');
            }
            else {
                $(".navbar").addClass('bg-transparent').removeClass('bg-light');
                $('.btn-contacto1').addClass('hide');
                $('.btn-contacto2').removeClass('hide');
            }
        }else{
            $('.btn-contacto1').removeClass('hide');
            $('.btn-contacto2').addClass('hide');
        }
    }

    function detectMenuRes(){
        if (window.matchMedia('screen and (max-width: 991px)').matches) {
            $('.nav-drop-servicios').attr("id","navbarDropdownMobile");
        }
    }
});

