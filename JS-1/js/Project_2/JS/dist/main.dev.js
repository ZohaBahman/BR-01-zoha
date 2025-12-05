"use strict";

$(document).ready(function () {
  $('.hero_text').slick({
    vertical: true,
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true
  });
  $('.scroll_down_btn').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#what_we_do').offset().top
    }, 800);
  });
});
$(document).ready(function () {
  $('.news_slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.news_arrow_prev'),
    nextArrow: $('.news_arrow_next')
  });
});