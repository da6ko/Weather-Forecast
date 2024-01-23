const apiKey = 'api-key';
let city = 'city-name'; 

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

function updateWeatherInfo(cityName, description, temperature) {
  const weatherInfoElement = document.getElementById('weather-info');
  weatherInfoElement.innerHTML = `
    <p>Weather in ${cityName}: ${description}</p>
    <p>Temperature: ${temperature}°C</p>
  `;
}

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const weatherData = await response.json();

    const cityName = weatherData.name;
    const temperature = weatherData.main.temp;
    const description = weatherData.weather[0].description;

    updateWeatherInfo(cityName, description, temperature);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

function searchWeather() {
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  if (cityName) {
    city = cityName;
    getWeatherData(city);
  } else {
    alert('Please enter a city name.');
  }
}

getWeatherData(city);
