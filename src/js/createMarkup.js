import { format } from 'date-fns';

export function createMarkup({
  name,
  main,
  sys,
  clouds,
  weather,
  timezone,
  dt,
}) {
  const userTimezoneOffset = new Date().getTimezoneOffset() * 60;
  const userTimezone = timezone + userTimezoneOffset;
  
  const sunrise = new Date((sys.sunrise + userTimezone) * 1000);
  const sunset = new Date((sys.sunset + userTimezone) * 1000);
  const sunriseFormatted = format(sunrise, 'HH:mm');
  const sunsetFormatted = format(sunset, 'HH:mm');

  const userTime = new Date((dt + userTimezone) * 1000);
  const date = format(userTime, 'HH:mm EEEE, d MMMM yyyy');

  return /*html*/ `<li class="weather-item">
              <h2>${name}</h2>
              <h4 class="weather-main-forecast">${weather[0].main}</h4>
          </li>
         <li>
         <img src="https://openweathermap.org/img/wn/${
           weather[0].icon
         }@2x.png" alt="${weather[0].description}" />
         </li>
         <li class="weather-item weather-item--row">
           <p class="weather-item--text">Country:  </p>
       <p class="weather-item--text">${sys.country}</p>
          </li>
          <li class="weather-item weather-item--row">
              <p class="weather-item--text">Sunrise: </p>
              <p class="weather-item--text">${sunriseFormatted}</p>
          </li>
          <l- class="weather-item weather-item--row">
              <p class="weather-item--text">Sunset: </p>
              <p class="weather-item--text">${sunsetFormatted}</p>
          </l-
          <li class="weather-item weather-item--row">
              <p class="weather-item--text">Clouds: </p>
              <p class="weather-item--text">${clouds.all}%</p>
          </li>
          <li class="weather-item">
           <h3>${main.temp.toFixed(1)} C<sup>&#176;</sup></h3>
        <div class="temp-container">
        <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${main.temp_min.toFixed(1)} C<sup>&#176;</sup></h4>
        </div>
        <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${main.temp_max.toFixed(1)} С<sup>&#176;</sup></h4>
        </div>
        </div>
          </li>
          <li class="weather-item"><p class="date">${date}</p></li>`;
}