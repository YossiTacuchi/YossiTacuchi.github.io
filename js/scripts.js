jQuery(document).ready(function ($) {
    detectNav();
    $(window).on("scroll", function () {
        detectNav();
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
    }
});