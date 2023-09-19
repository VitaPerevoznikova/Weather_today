// Координаты
export function getWeatherByCoords(lat, lon) {
  const API_KEY = '1a7262597e69ba4722faa59c5d71518c';
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang={lang}`;

  return fetch(BASE_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}

// Город

export function getWeatherByQuery(city) {
  const API_KEY = '1a7262597e69ba4722faa59c5d71518c';
  const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  return fetch(BASE_URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}

// import axios from "axios";

// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = '1a7262597e69ba4722faa59c5d71518c';

// export async function fetchWeather(lat, lon, city) {
//     const url = `${BASE_URL}?q=${city}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang={lang}`;
//     const response = await axios.get(url);
//     return response.data;
//   };


