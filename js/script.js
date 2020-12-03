console.log("thanks for stopping by!")

$(document).ready(function() {
  setTimeout(function(){
    $('body').addClass('loaded');
  }, 1500);
});

$(window).scroll(function () {
  var nav = $(".navbar");
  var break1 = $('#home').height() - nav.height()/2;
  var break2 = break1 + $('#about').height();
  var break3 = break2 + $('#education').height();
  if ($(this).scrollTop() > break3) {
    nav.addClass('navbar2');
    nav.removeClass('navbar3');
  } else if ($(this).scrollTop() > break2) {
    nav.addClass('navbar3');
    nav.removeClass('navbar2');
  } else if ($(this).scrollTop() > break1) {
    nav.addClass('navbar2');
    nav.removeClass('navbar3');
  } else if ($(this).scrollTop() <= break1) {
    nav.removeClass('navbar2');
  }
});