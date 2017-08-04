$(".scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".footer").offset().top},
        'slow');
});
