jQuery(document).ready(function($) {

  var showText = function (target, message, index, interval) {
    if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
    }

    $(function () {

    showText("#msg", "Creative agency for forward thinking brands", 0, 50);

  });

  $('#shiftright').on('click', function(e) {

    e.preventDefault();

    $('.art-book').css('display', 'none');
    $('#screen-left').hide().fadeIn();

  });


  $("#fade-top1").hide().fadeIn(500);
  $("#fade-top2").hide().fadeIn(1500);
  $("#fade-top3").hide().fadeIn(3000);
  $("#fade-top4").hide().fadeIn(4500);

  $(".sidebar a").on('click', function(e) {

    e.preventDefault();

    var toShow = $(this).attr('href');

    $(".awards-name").slideUp();
    $(toShow).css('display', 'flex');
    $(toShow).slideDown()
  });

  $(".content1").css("display", "flex");

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
