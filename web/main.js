$(window).scroll(function () {

  var scrollTop = $(window).scrollTop();

  if (scrollTop > 200) {
    $('.header').css('display', 'flex');
    $('.header').addClass('fixed-to-top');
    $('.header').addClass('scrolled');

  } else if (scrollTop == 0) {

    $('.header').removeClass('fixed-to-top');
    $('.header').removeClass('scrolled');

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



  