function showTemperature(response) {
  let currentLocation = response.data.name;
  let changeCity = document.querySelector("h1");
  changeCity.innerHTML = currentLocation;

  let temperature = Math.round(response.data.main.temp);
  let temperatureToday = document.querySelector("#temperature-today");
  temperatureToday.innerHTML = `${temperature}°C`;
}

function showCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#search-city");
  let changeCity = document.querySelector("h1");
  changeCity.innerHTML = inputCity.value;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${changeCity.innerHTML}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

let apiKey = "5c61649dea57cefed42274d1ed21af15";
let units = "metric";

navigator.geolocation.getCurrentPosition(showPosition);

let cityForm = document.querySelector("#search-engine");
cityForm.addEventListener("submit", showCity);

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", showCity);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", showTemperature);

let currentTime = document.querySelector("#current-time");

let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "Mai",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

currentTime.innerHTML = `${day}, ${month} ${date}, ${year}, ${hours}:${minutes}`;
