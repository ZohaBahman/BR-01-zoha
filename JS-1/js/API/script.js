const neighborhoodCenter = {
    lat: 59.448442,
    lng: 18.068683
};


const OPENCAGE_KEY = "31d8ce0c88364a2989b2b4e8199fc735"


const places = [
    {
        name: "Täby park hundlek",
        address: "Park in Täby, Sweden",
        category: "park"
    },
    {
        name: "Grazie",
        address: "Pizza place in Täby centrum, Sweden",
        category: "restaurant"
    },
    {
        name: "Medley Täby Simhall",
        address: "Swimming pool in Täby, Sweden",
        category: "landmark"
    }
];



let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: neighborhoodCenter,
        zoom: 13
    });

    loadPlaces();
}



function fetchLocation(place) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place.address)}&key=${OPENCAGE_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const location = data.results[0].geometry;
                addMarker(place, location);
            }
        })
        .catch(error => console.error("Geocoding error:", error));
}