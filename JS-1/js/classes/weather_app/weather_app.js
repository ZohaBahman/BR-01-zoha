const WEATHER_KEY = '8e7c3a28ade34eb4b4e132750251411';
const WEATHER_BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

function getWeather() {
    const city = cityInput.value.trim();
    
    if (city === "") {
        showError("Please enter a city name");
        return;
    }


    fetch(`${WEATHER_BASE_URL}?key=${WEATHER_KEY}&q=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            showError(error.message);
        });
}

function displayWeather(data) {
    const { location, current } = data;
    
    const weatherHTML = `
        <div class="weather-card">
            <div class="location">
                <h2>${location.name}, ${location.country}</h2>
                <p class="local-time">Local Time: ${location.localtime}</p>
            </div>
            
            <div class="weather-main">
                <div class="temperature">
                    <span class="temp">${Math.round(current.temp_c)}°C</span>
                </div>
                
                <div class="condition">
                    <img src="${current.condition.icon}" alt="${current.condition.text}" class="weather-icon">
                    <p class="condition-text">${current.condition.text}</p>
                </div>
            </div>
        </div>
    `;
    
    weatherResult.innerHTML = weatherHTML;
}

function showError(message) {
    weatherResult.innerHTML = `<div class="error">${message}</div>`;
}
   