const cityInput = document.getElementById("input-value");
const WEATHER_DETAILS = document.querySelector(".weather-details");

// Function to get the details of the input value
async function getDetails(event) {
  event.preventDefault();

  try {
    const city = cityInput.value;
    const response = await fetch("/private_key");
    const WEATHER_API = await response.json();

    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API.key}`
    );
    const data = await weatherData.json();

    const { main, weather } = data;

    const weatherUpdate = `
        <h1>WEATHER IN <span>${city.toUpperCase()}</span></h1>
        <p>Temperature: <span>${main.temp}</span></p>
        <p>Description: <span>${weather[0].description.toUpperCase()}</span> </p>
        <p>Loction: <span>${city.toUpperCase()}</span></p>
    `;

    WEATHER_DETAILS.innerHTML = weatherUpdate;
  } catch (error) {
    if (!cityInput.value) {
      const errMsg = "<h1>Please enter a <span>text</span></h1>";
      WEATHER_DETAILS.innerHTML = `
      ${errMsg} 
      `;
    }
    error;
  } finally {
    cityInput.value = "";
  }
}

// Attach the function to the button click event
const button = document.querySelector("button");
button.addEventListener("click", (event) => getDetails(event));
