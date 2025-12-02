"use strict";

// Storage utility functions
var Storage = {
  // Get all favorite movie IDs
  getFavorites: function getFavorites() {
    return JSON.parse(localStorage.getItem('favoriteMovies')) || [];
  },
  // Add movie to favorites
  addToFavorites: function addToFavorites(movieId) {
    var favorites = Storage.getFavorites();

    if (!favorites.includes(movieId)) {
      favorites.push(movieId);
      localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
      return true;
    }

    return false;
  },
  // Remove movie from favorites
  removeFromFavorites: function removeFromFavorites(movieId) {
    var favorites = Storage.getFavorites();
    favorites = favorites.filter(function (id) {
      return id !== movieId;
    });
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  },
  // Check if movie is favorite
  isFavorite: function isFavorite(movieId) {
    var favorites = Storage.getFavorites();
    return favorites.includes(movieId);
  },
  // Toggle favorite status
  toggleFavorite: function toggleFavorite(movieId) {
    if (Storage.isFavorite(movieId)) {
      Storage.removeFromFavorites(movieId);
      return false;
    } else {
      Storage.addToFavorites(movieId);
      return true;
    }
  }
};