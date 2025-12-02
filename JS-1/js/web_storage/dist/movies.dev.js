"use strict";

// Simulated AJAX fetch – replace with real API if needed
function fetchMovies() {
  return fetch("movies.json").then(function (response) {
    return response.json();
  });
}