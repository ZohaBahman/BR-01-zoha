// Simulated AJAX fetch – replace with real API if needed
function fetchMovies() {
    return fetch("movies.json")
        .then(response => response.json());
}
