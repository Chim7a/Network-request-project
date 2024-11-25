import dotenv from "dotenv/config";
import axios from "axios";

const cityInput = document.getElementById("input-value");

// Function to get the details of the input value
async function getDetails(event) {
  event.preventDefault();
  try {
    const city = cityInput.value;
    const weatherData = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}`
    );
    if (city) {
      console.log("Input Value: ", weatherData); // Logs the value entered by the user
    }
  } catch (error) {
    console.error("Input element not found!");
  } finally {
    cityInput.value = "";
  }
}

// Attach the function to the button click event
const button = document.querySelector("button");
button.addEventListener("click", (event) => getDetails(event));
