$(document).ready(function() {
    $(".menuicon").click(function() {
        $(".menu").toggleClass("open");
    });
});

var scrollAnterior = 0;

$(document).scroll(function() {
  var scrollActual = $(document).scrollTop();

  if (scrollActual > 20) {
      $(".menubar").css("height","55px");
  } else {
      $(".menubar").css("height","75px");
  }
});
