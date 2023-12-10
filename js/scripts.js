jQuery(document).ready(function ($) {
    $(window).on("scroll", function () {
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
    })
});