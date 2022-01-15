import React from "react";
import CurrentImage from "../Components/CurrentImage";
import CurrentInfo from "../Components/CurrentInfo";
import Forecast from "../Components/Forecast";
import "./Style/weather.css";

const Weather = (props) => {
  const flipped = props.flipped;
  const tiempo = props.weatherData;
  const forecastData = props.forecastData;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const day = new Date().getDay();
  const code = tiempo.weather[0].id;
  return (
    <div className="flip-card">
      <div className={flipped ? "flip-card-inner-flipped" : "flip-card-inner"}>
        <div className="flip-card-front">
          <p>{date}</p>
          <p>{time}</p>
          <p>{tiempo.name}</p>
          <CurrentImage code={code} />
          <p>{tiempo.weather[0].description}</p>
          <p style={{ fontWeight: "500", fontSize: "3rem" }}>
            {Math.floor(tiempo.main.temp)}°C
          </p>
          <p style={{ paddingBottom: "10px" }}>
            {day === 1 ? "Lunes" : null}
            {day === 2 ? "Martes" : null}
            {day === 3 ? "Miercoles" : null}
            {day === 4 ? "Jueves" : null}
            {day === 5 ? "Viernes" : null}
            {day === 6 ? "Sabado" : null}
            {day === 0 ? "Domingo" : null}
          </p>
          <div className="info">
            <CurrentInfo tiempo={tiempo} />
          </div>
        </div>
        <div className="flip-card-back">
          {forecastData ? (
            <Forecast key={forecastData.dt} forecastData={forecastData} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Weather;
