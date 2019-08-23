$(window).scroll(function () {

  var scrollTop = $(window).scrollTop();

  if (scrollTop > 200) {
    $('.header').css('display', 'block');
    $('.header').addClass('fixed-to-top');

  } else if (scrollTop == 0) {

    $('.header').removeClass('fixed-to-top');
  }
});