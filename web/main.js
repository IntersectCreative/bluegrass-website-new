$(window).scroll(function () {

  var scrollTop = $(window).scrollTop();

  if (scrollTop > 1) {
    $('.header').css('display', 'flex');
    $('.header').addClass('fixed-to-top');
    $('.header').addClass('scrolled');
    $('.navbar-toggler').addClass('navbar-toggler-scrolled');

  } else if (scrollTop == 0) {

    $('.header').removeClass('fixed-to-top');
    $('.header').removeClass('scrolled');
    $('.navbar-toggler').removeClass('navbar-toggler-scrolled');

  }

});


// Type functionality for Services Pages
$(function () {
  $('[data-typer-targets]').typer();
});


//scrolling sidebar for blog and stops before footer
$(document).ready(function(){
  $("#sticker").sticky({topSpacing:100, bottomSpacing:3000});
});

//form drop down
$("#generalContactButton").click(function(){
  $("#generalContact").toggle(600);
});

//application drop down
$("#applicationButton").click(function(){
  $("#application").toggle(600);
});

//application drop down
$(".question").click(function(){
  $(this).next('.answer').toggleClass('preToggle postToggle');
  return false;
});

//navbar hamburger menu turns white upon click
$('.navbar-toggler').click(function(){
$(".navbar-toggler").addClass('navbar-toggler-scrolled');
$('.header').addClass('fixed-to-top');
$('.header').addClass('scrolled');

});