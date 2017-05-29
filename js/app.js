$(document).ready(function() {

    $(".menuicon").click(function() {
        $(".menu").addClass("open");
    });

    $(".closeicon").click(function() {
        $(".menu").removeClass("open");
    });

    if ($(window).width() > 1024) {
        $(".statbar").prependTo("body");
    }
});

var scrollAnterior = 0;

$(document).scroll(function() {
  var scrollActual = $(document).scrollTop();

  if ($(window).width()<768) {

      if (scrollActual > 20) {
          $(".menubar").css("height","55px");
      } else {
          $(".menubar").css("height","75px");
      }

      if($(window).scrollTop() + $(window).height() == $(document).height()) {
           $(".menubar").css("height","0");
       }
  }
});

$(window).resize(function() {
    if ($(window).width() < 1024) {
        $(".statbar").prependTo(".menu");
    }

    if ($(window).width() > 1024) {
        $(".statbar").prependTo("body");
    }
});

// TODO: Fer que la barra superior desaparegui al arribar al final de pàg.
