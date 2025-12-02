"use strict";

// Load the movie list and render them
fetchMovies().then(function (movies) {
  var container = document.getElementById("movies");
  movies.forEach(function (movie) {
    var div = document.createElement("div");
    div.className = "movie";
    var isFav = isFavorite(movie.id);
    div.innerHTML = "\n            <h3>".concat(movie.title, "</h3>\n            <p>").concat(movie.year, "</p>\n            <button onclick=\"toggleFavorite(").concat(movie.id, ")\">\n                ").concat(isFav ? "Remove from Favorites" : "Add to Favorites", "\n            </button>\n        ");
    container.appendChild(div);
  });
}); // FAVORITE STORAGE FUNCTIONS

function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  var favs = getFavorites();

  if (favs.includes(id)) {
    favs = favs.filter(function (x) {
      return x !== id;
    });
  } else {
    favs.push(id);
  }

  saveFavorites(favs);
  location.reload(); // refresh to update buttons
}