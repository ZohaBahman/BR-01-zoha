"use strict";

fetchMovies().then(function (movies) {
  var container = document.getElementById("favorites");
  var favIds = getFavorites();
  var favMovies = movies.filter(function (m) {
    return favIds.includes(m.id);
  });

  if (favMovies.length === 0) {
    container.innerHTML = "<p>No favorites added yet.</p>";
    return;
  }

  favMovies.forEach(function (movie) {
    var div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = "\n            <h3>".concat(movie.title, "</h3>\n            <p>").concat(movie.year, "</p>\n            <button onclick=\"removeFavorite(").concat(movie.id, ")\">Remove</button>\n        ");
    container.appendChild(div);
  });
}); // SAME FAVORITE FUNCTIONS AS main.js

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

function removeFavorite(id) {
  var favs = getFavorites();
  favs = favs.filter(function (x) {
    return x !== id;
  });
  saveFavorites(favs);
  location.reload();
}