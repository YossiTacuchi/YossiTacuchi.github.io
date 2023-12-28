jQuery(document).ready(function ($) {
    detectNav();
    detectMenuRes();

    $(window).on("scroll", function () {
        detectNav();
    });
    $(window).resize(function(){
        detectMenuRes();
    });
    
    

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

jQuery(window).load(function ($) {
    console.log("readyyy");
});