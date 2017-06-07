var scrollAnterior = 0;

var searchContainer = $("<form/>").addClass("searchcont");
var searchInput = $("<input/>").attr("type","text").attr("placeholder","Buscar").addClass("searchin");
var searchIcon = $("<div/>").addClass("siconwhite");

searchContainer.append(searchInput);
searchContainer.append(searchIcon);

$(document).ready(function() {

    $(".menuicon").on("click", obrirMenu);
    $(".closeicon").on("click", tancarMenu);

    if ($(window).width() >= 1024) {
        redimensionaDesktop();
    }

    $("aside").css("float","right");
});

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
        redimensionaMobile();
    }

    if ($(window).width() > 1024) {
        redimensionaDesktop();
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

function redimensionaDesktop() {
    $(".menuicon").css("background","url(img/filter.svg) center no-repeat");
    $(".statbar").prependTo("body");
    $(".categories").appendTo(".menubar");
    $(".searchicon").css("display","none");

    $(".menuicon").off("click", obrirMenu);
    $(".closeicon").off("click", tancarMenu);

    $(".menuicon").on("click", toggleMenu);

    $(".highlight").prepend(searchContainer);

    //$(".interests").appendTo(".related");
    $(".interests").remove();
}

function redimensionaMobile() {
    $(".menuicon").css("background","url(img/menu.svg) center no-repeat");
    $(".statbar").prependTo(".menu");
    $(".categories").prependTo(".menucontent");
    $(".searchicon").css("display","block");

    $(".menuicon").off("click", toggleMenu);

    $(".menuicon").on("click", obrirMenu);
    $(".closeicon").on("click", tancarMenu);

    $(".searchcont").remove();
}
