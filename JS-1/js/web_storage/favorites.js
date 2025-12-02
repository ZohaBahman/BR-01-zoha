fetchMovies().then(movies => {
    const container = document.getElementById("favorites");
    const favIds = getFavorites();

    const favMovies = movies.filter(m => favIds.includes(m.id));

    if (favMovies.length === 0) {
        container.innerHTML = "<p>No favorites added yet.</p>";
        return;
    }

    favMovies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";

        div.innerHTML = `
            <h3>${movie.title}</h3>
            <p>${movie.year}</p>
            <button onclick="removeFavorite(${movie.id})">Remove</button>
        `;

        container.appendChild(div);
    });
});

// SAME FAVORITE FUNCTIONS AS main.js
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}

function removeFavorite(id) {
    let favs = getFavorites();
    favs = favs.filter(x => x !== id);
    saveFavorites(favs);
    location.reload();
}
