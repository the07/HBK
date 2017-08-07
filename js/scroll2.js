$(window).scroll(function() {

  var theta = $(window).scrollTop() / 10 % Math.PI;
  $('#title-box').css({ transform: 'rotate(-' + theta + 'rad)' });


  $('#talk').animate({
    "marginRight" : "-200px"
  });

});
