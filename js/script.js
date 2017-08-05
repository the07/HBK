jQuery(document).ready(function($) {

  $("#fade-top1").hide().fadeIn(500);
  $("#fade-top2").hide().fadeIn(1500);
  $("#fade-top3").hide().fadeIn(3000);
  $("#fade-top4").hide().fadeIn(4500);

  $("#scroll").on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 2000, 'swing', function () {
      window.location.hash = target;
    });
  });
});
