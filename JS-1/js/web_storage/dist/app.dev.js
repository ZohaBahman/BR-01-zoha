"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MoviesApp =
/*#__PURE__*/
function () {
  function MoviesApp() {
    _classCallCheck(this, MoviesApp);

    this.movies = []; // This would come from your AJAX API

    this.init();
  }

  _createClass(MoviesApp, [{
    key: "init",
    value: function init() {
      this.loadMovies();
      this.renderMovies();
    } // Load movies from API (placeholder - replace with your AJAX call)

  }, {
    key: "loadMovies",
    value: function loadMovies() {
      return regeneratorRuntime.async(function loadMovies$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Example movie data structure
              this.movies = [{
                id: 1,
                title: "Movie 1",
                poster: "poster1.jpg",
                year: 2023
              }, {
                id: 2,
                title: "Movie 2",
                poster: "poster2.jpg",
                year: 2023
              }, {
                id: 3,
                title: "Movie 3",
                poster: "poster3.jpg",
                year: 2023
              }];

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // Render movies to the page

  }, {
    key: "renderMovies",
    value: function renderMovies() {
      var _this = this;

      var container = document.getElementById('movies-container');
      container.innerHTML = '';
      this.movies.forEach(function (movie) {
        var movieElement = _this.createMovieCard(movie);

        container.appendChild(movieElement);
      });
    } // Create individual movie card

  }, {
    key: "createMovieCard",
    value: function createMovieCard(movie) {
      var _this2 = this;

      var isFav = Storage.isFavorite(movie.id);
      var card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = "\n            <img src=\"".concat(movie.poster, "\" alt=\"").concat(movie.title, "\">\n            <h3>").concat(movie.title, "</h3>\n            <p>Year: ").concat(movie.year, "</p>\n            <button class=\"favorite-btn ").concat(isFav ? 'favorited' : '', "\" \n                    data-movie-id=\"").concat(movie.id, "\">\n                ").concat(isFav ? '❤️ Remove from Favorites' : '🤍 Add to Favorites', "\n            </button>\n        "); // Add event listener to favorite button

      var favBtn = card.querySelector('.favorite-btn');
      favBtn.addEventListener('click', function () {
        return _this2.toggleFavorite(movie.id, favBtn);
      });
      return card;
    } // Toggle favorite status

  }, {
    key: "toggleFavorite",
    value: function toggleFavorite(movieId, button) {
      var isNowFavorite = Storage.toggleFavorite(movieId);

      if (isNowFavorite) {
        button.textContent = '❤️ Remove from Favorites';
        button.classList.add('favorited');
      } else {
        button.textContent = '🤍 Add to Favorites';
        button.classList.remove('favorited');
      }
    }
  }]);

  return MoviesApp;
}(); // Initialize the app when DOM is loaded


document.addEventListener('DOMContentLoaded', function () {
  new MoviesApp();
});