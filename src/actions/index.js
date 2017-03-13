import axios from 'axios';

const API_KEY = 'd8f3a8a53fef64adfe52123351499b80';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    //use single variable to hold action type so that action type is never overwritten
    payload: request
  };
}
