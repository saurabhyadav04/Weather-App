import { useState, useEffect } from 'react'
import App from '../App';
import SearchField from './SearchField';

function WeatherData() {
  const [weatherData, setWeatherData] = useState();
  const [cityname, setCityName] = useState("Mumbai");

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=e3c13b9e05bb87e4bd6763e37492f586`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Please enter a valid city name.');
        }
        return response.json();
      })
      .then((data) => setWeatherData(data))
      .catch((error) => {
        alert(error.message);
        setCityName(cityname); // Reset cityname to last value of city
      });
  }, [cityname]);

  if (weatherData == null) {
    return <p className='Loading'>Loading...</p>
  }

  const tempInCelsius = Math.round(weatherData.main.temp - 275);
  const windSpeed = Math.round(weatherData.wind.speed);
  const humidity = Math.round(weatherData.main.humidity);
  const visibility = Math.round(weatherData.visibility);

  return (
    <>
      <div >
        <SearchField cityname={cityname} setCityName={setCityName} />
        <App cityname={weatherData.name} temp={tempInCelsius} windSpeed={windSpeed} humidity={humidity} visibility={visibility} weatherConditon={weatherData.weather[0].main} />
      </div>
    </>
  )
}

export default WeatherData;