// Load the movie list and render them
fetchMovies().then(movies => {
    const container = document.getElementById("movies");
    
    movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";

        const isFav = isFavorite(movie.id);

        div.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <button onclick="toggleFavorite(${movie.id})">
                ${isFav ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        `;

        container.appendChild(div);
    });
});

// FAVORITE STORAGE FUNCTIONS
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
    let favs = getFavorites();

    if (favs.includes(id)) {
        favs = favs.filter(x => x !== id);
    } else {
        favs.push(id);
    }

    saveFavorites(favs);
    location.reload(); // refresh to update buttons
}
