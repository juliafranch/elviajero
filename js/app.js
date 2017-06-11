var scrollAnterior = 0;
var intervalHighlight;
var searchContainer = $("<form/>").addClass("searchcont");
var searchInput = $("<input/>").attr("type","text").attr("placeholder","Buscar").addClass("searchin");
var searchIcon = $("<div/>").addClass("siconwhite");

var interests;

searchContainer.append(searchInput);
searchContainer.append(searchIcon);

$(document).ready(function() {

    $(".menuicon").on("click", obrirMenu);
    $(".closeicon").on("click", tancarMenu);

    if (window.innerWidth >= 1024) {
        redimensionaDesktop();
        if (window.innerWidth < 1440) {
            changeHighlightItem();
        } else {
            clearInterval(intervalHighlight);
        }
    }

    $(document).scroll(function() {
      var scrollActual = $(document).scrollTop();

      if (window.innerWidth<768) {

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
        if (window.innerWidth < 1024) {
            redimensionaMobile();
        }

        if (window.innerWidth >= 1024) {
            redimensionaDesktop();

            if (window.innerWidth >= 1440) {
                clearInterval(intervalHighlight);
                $(".imagebox").removeClass("hide");
            } else if (window.innerWidth < 1440){
                changeHighlightItem();
            }
        }
    });

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
    $(".interests").appendTo(".related");
    interests = $(".interests");
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
    interests.insertBefore("aside");
}

function changeHighlightItem() {
    $(".interests-wrapper").children().first().addClass("hide");
    var isFirst;
    intervalHighlight = setInterval(function () {
        if (isFirst) {
            $(".interests-wrapper").children().first().addClass("hide");
            $(".interests-wrapper").children().last().removeClass("hide");
            isFirst = false;
        } else {
            $(".interests-wrapper").children().last().addClass("hide");
            $(".interests-wrapper").children().first().removeClass("hide");
            isFirst = true;
        }
    }, 3000);
}
