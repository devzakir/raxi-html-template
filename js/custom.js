(function ($) {
    "use strict";
    //VenoBox Lightbox
    $('.venobox').venobox();
    // Bootstrap Scroolspy 
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });
    // Active Class Add
    $('.menu li').click(function() {
        $('.menu li').removeClass('active');
        $(this).addClass('active');
    });
    $(".menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // Sticky Menu Settings
    $("#abt, #abtm, #smw, #src, #prt, #cnt").on("click", function () {
        $(".full_header").addClass("sticky");
    })
    $("#hom").on("click", function () {
        $(".full_header").removeClass("sticky");
    })
    $("#hom").on("click", function () {
        $("#about").slideUp(1000);
        $("#home").slideDown(1000);
        $("#service").slideUp(1100);
        $("#portfolio").slideUp(1000);
        $("#contact").slideUp(1000);
    });
    $("#abt,#abtm").on("click", function () {
        $("#about").slideDown(1000);
        $("#home").slideUp(1000);
        $("#service").slideUp(1100);
        $("#portfolio").slideUp(1000);
        $("#contact").slideUp(1000);
    });
    $("#src").on("click", function () {
        $("#about").slideUp(1000);
        $("#home").slideUp(1000);
        $("#service").slideDown(1000);
        $("#portfolio").slideUp(1000);
        $("#contact").slideUp(1000);
    });
    $("#prt,#smw").on("click", function () {
        $("#about").slideUp(1000);
        $("#home").slideUp(1000);
        $("#service").slideUp(1000);
        $("#portfolio").slideDown(1000);
        $("#contact").slideUp(1000);
    });
    $("#cnt").on("click", function () {
        $("#about").slideUp(1000);
        $("#home").slideUp(1000);
        $("#service").slideUp(1000);
        $("#portfolio").slideUp(1000);
        $("#contact").slideDown(1000);
    });
})(jQuery);
