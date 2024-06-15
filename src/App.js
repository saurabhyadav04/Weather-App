import React from 'react';
import { Date as Datefunction} from './Components/Date';
import Clock from 'react-live-clock';
import "./Style.css";
import bg from './Image.js/bg.jpg'

function App({cityname, temp, windSpeed, humidity, visibility, weatherConditon}) {

  let date = new Date();
  let formatDate = Datefunction(date);
  
  return (
    <div>
      <div className="container">
        <div className="firstContainer">
      <img src={bg} alt="" className="backgroundImage"/>
      <div className="date">{formatDate}</div>
      <div className="time"><Clock format="HH:mm:ss" interval={1000} ticking={true} timezone={'Asia/Kolkata'}/></div>
      <div className="cityNameContainer">
        <div className="cityName">{cityname}</div>
        <div className="in">IN</div>
      </div>
      </div>
      <div className="temp">{temp}°c </div>
        <div className="sideContainer">
          <div className="weatherContainer">
            <div className="WeatherCondition"> { weatherConditon} </div> 
          </div>
            <div className="sideColoum">
              <div className="cityContainer">
                <div className="cityNameInSideColoum">{cityname}, <span> IN </span></div>
            </div>
            <hr />
              <div className="temperature">Temperature <p> {temp}°c ({ weatherConditon} )  </p></div><hr />
              <div className="WindSpeed">Wind Speed  <p>{windSpeed}  km/h </p></div><hr />
              <div className="Humidity">Humidity <p>{humidity} % </p></div><hr />
              <div className="Visibility">Visibility <p> {visibility}  mi </p> </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default App;
