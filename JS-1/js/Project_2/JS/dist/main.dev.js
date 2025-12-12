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
  }); //leaflet

  var map = L.map('map').setView([40.680875, -73.933305], 12);
  L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var customIcon = L.icon({
    iconUrl: './assets/map_pin.svg',
    iconSize: [106, 106],
    // size of the icon
    iconAnchor: [22, 94],
    // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

  });
  L.marker([40.680875, -73.933305], {
    icon: customIcon
  }).addTo(map);
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
}); // lightGallery(document.getElementById('lightgallery'), {
//   plugins: [lgZoom, lgThumbnail],
//   licensekey: 'your_license_key',
//   speed: 500,
// });