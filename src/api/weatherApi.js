import axios from "axios";

const geocodingUrl = "https://geocoding-api.open-meteo.com/v1/search";
const forecastUrl = "https://api.open-meteo.com/v1/forecast";

// Находит город и возвращает его координаты.
export async function searchCity(cityName) {
  const response = await axios.get(geocodingUrl, {
    params: {
      name: cityName,
      count: 1,
      language: "ru",
      format: "json",
    },
  });

  const city = response.data.results?.[0];

  if (!city) {
    throw new Error("Город не найден. Проверь название.");
  }

  return city;
}

// Получает текущую погоду и прогноз на 7 дней.
export async function getForecastByCity(city) {
  const response = await axios.get(forecastUrl, {
    params: {
      latitude: city.latitude,
      longitude: city.longitude,
      current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
      daily: "weather_code,temperature_2m_max,temperature_2m_min",
      forecast_days: 7,
      timezone: "auto",
    },
  });

  return response.data;
}