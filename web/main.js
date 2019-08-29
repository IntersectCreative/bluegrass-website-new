$(window).scroll(function () {

  var scrollTop = $(window).scrollTop();

  if (scrollTop > 200) {
    $('.header').css('display', 'flex');
    $('.header').addClass('fixed-to-top');
    $('.header').addClass('active');

  } else if (scrollTop == 0) {

    $('.header').removeClass('fixed-to-top');
    $('.header').removeClass('active');

  }
});