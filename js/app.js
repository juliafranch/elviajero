$(document).ready(function() {

    $(".menuicon").on("click", obrirMenu);
    $(".closeicon").on("click", tancarMenu);

    if ($(window).width() >= 1024) {
        $(".statbar").prependTo("body");
        $(".categories").appendTo(".menubar");
        $(".searchicon").css("display","none");

        $(".menuicon").off("click", obrirMenu);
        $(".closeicon").off("click", tancarMenu);

        $(".menuicon").on("click", toggleMenu);
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
        $(".categories").prependTo(".menucontent");
        $(".searchicon").css("display","block");

        $(".menuicon").off("click", toggleMenu);

        $(".menuicon").on("click", obrirMenu);
        $(".closeicon").on("click", tancarMenu);
    }

    if ($(window).width() > 1024) {
        $(".statbar").prependTo("body");
        $(".categories").appendTo(".menubar");
        $(".searchicon").css("display","none");

        $(".menuicon").off("click", obrirMenu);
        $(".closeicon").off("click", tancarMenu);

        $(".menuicon").on("click", toggleMenu);
    }
});

function obrirMenu() {
    $(".menu").addClass("open");
}

function tancarMenu() {
    $(".menu").removeClass("open");
}

function toggleMenu() {
    $(".menu").toggleClass("open");
}
