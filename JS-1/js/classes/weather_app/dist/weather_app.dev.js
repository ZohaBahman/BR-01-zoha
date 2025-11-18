"use strict";

var WEATHER_KEY = '8e7c3a28ade34eb4b4e132750251411';
var WEATHER_BASE_URL = 'https://api.weatherapi.com/v1/current.json';
var searchBtn = document.getElementById("searchBtn");
var cityInput = document.getElementById("cityInput");
var weatherResult = document.getElementById("weatherResult");
searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getWeather();
  }
});

function getWeather() {
  var city = cityInput.value.trim();

  if (city === "") {
    showError("Please enter a city name");
    return;
  }

  fetch("".concat(WEATHER_BASE_URL, "?key=").concat(WEATHER_KEY, "&q=").concat(city)).then(function (response) {
    if (!response.ok) {
      throw new Error('City not found');
    }

    return response.json();
  }).then(function (data) {
    displayWeather(data);
  })["catch"](function (error) {
    showError(error.message);
  });
}

function displayWeather(data) {
  var location = data.location,
      current = data.current;
  var weatherHTML = "\n        <div class=\"weather-card\">\n            <div class=\"location\">\n                <h2>".concat(location.name, ", ").concat(location.country, "</h2>\n                <p class=\"local-time\">Local Time: ").concat(location.localtime, "</p>\n            </div>\n            \n            <div class=\"weather-main\">\n                <div class=\"temperature\">\n                    <span class=\"temp\">").concat(Math.round(current.temp_c), "\xB0C</span>\n                </div>\n                \n                <div class=\"condition\">\n                    <img src=\"").concat(current.condition.icon, "\" alt=\"").concat(current.condition.text, "\" class=\"weather-icon\">\n                    <p class=\"condition-text\">").concat(current.condition.text, "</p>\n                </div>\n            </div>\n        </div>\n    ");
  weatherResult.innerHTML = weatherHTML;
}

function showError(message) {
  weatherResult.innerHTML = "<div class=\"error\">".concat(message, "</div>");
}