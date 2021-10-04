import React from "react";
import clearDay from "./Imagenes/clear.svg";
import clearNight from "./Imagenes/clear-night.svg";
import fog from "./Imagenes/fog.svg";
import hail from "./Imagenes/hail.svg";
import showers from "./Imagenes/showers.svg";
import sleet from "./Imagenes/sleet.svg";
import snow from "./Imagenes/snow.svg";
import heavyCloudDay from "./Imagenes/heavy-cloud-day.svg";
import heavyCloudNight from "./Imagenes/heavy-cloud-night.svg";
import lightCloudDay from "./Imagenes/light-cloud-day.svg";
import lightCloudNight from "./Imagenes/light-cloud-night.svg";
import heavyRainDay from "./Imagenes/heavy-rain-day.svg";
import heavyRainNight from "./Imagenes/heavy-rain-night.svg";
import lightRainDay from "./Imagenes/light-rain-day.svg";
import lightRainNight from "./Imagenes/light-rain-night.svg";
import thunderstormDay from "./Imagenes/thunderstorms-day.svg";
import thunderstormNight from "./Imagenes/thunderstorms-night.svg";
import "./Style/Weather.css";

const Weather = (props) => {
  const tiempo = props.weatherData;
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const hours = new Date().getHours();
  const day = new Date().getDay();
  const code = tiempo.weather[0].id;
  // const renderizadorConditional = () => {
  //   if (code === 800 && hours >= 6 && hours < 20) {
  //     return <img src={clearDay} alt="situation" />;
  //   } else if ((code === 800 && hours >= 20) || hours < 6) {
  //     return <img src={clearNight} alt="situation" />;
  //   } else if (code === 741) {
  //     return <img src={fog} alt="situation" />;
  //   } else if (code >= 612 && code <= 622) {
  //     return <img src={hail} alt="situation" />;
  //   } else if (code === 803 || (code === 804 && hours >= 6 && hours < 20)) {
  //     return <img src={heavyCloudDay} alt="situation" />;
  //   } else if (code === 803 || (code === 804 && hours >= 20 && hours < 6)) {
  //     return <img src={heavyCloudNight} alt="situation" />;
  //   } else if (code === 801 || (code === 802 && hours >= 20 && hours < 6)) {
  //     return <img src={lightCloudNight} alt="situation" />;
  //   } else if (code === 801 || (code === 802 && hours >= 6 && hours < 20)) {
  //     return <img src={lightCloudDay} alt="situation" />;
  //   } else if (code >= 502 && code <= 531 && hours >= 20 && hours < 6) {
  //     return <img src={heavyRainNight} alt="situation" />;
  //   } else if (code >= 502 && code <= 531 && hours >= 6 && hours < 20) {
  //     return <img src={heavyRainDay} alt="situation" />;
  //   } else if (code === 500 || (code === 501 && hours >= 6 && hours < 20)) {
  //     return <img src={lightRainDay} alt="situation" />;
  //   } else if (code === 500 || (code === 501 && hours >= 20 && hours < 6)) {
  //     return <img src={lightRainNight} alt="situation" />;
  //   } else if (code >= 300 && code <= 321) {
  //     return <img src={showers} alt="situation" />;
  //   } else if (code === 611) {
  //     return <img src={sleet} alt="situation" />;
  //   } else if (code >= 200 && code <= 232 && hours >= 6 && hours < 20) {
  //     return <img src={thunderstormDay} alt="situation" />;
  //   } else if (code >= 200 && code <= 232 && hours >= 20 && hours < 6) {
  //     return <img src={thunderstormNight} alt="situation" />;
  //   } else {
  //     return <img src={snow} alt="situation" />;
  //   }
  // };
  return (
    <div className="datas">
      <p>{date}</p>
      <p>{time}</p>
      <p>{tiempo.name}</p>
      {/* {renderizadorConditional()} */}
      {(code === 800 && hours >= 6 && hours < 20) ? <img src={clearDay} alt="situation" /> : null}
      {(code === 800 && hours >= 20 && hours < 6) ? <img src={clearNight} alt="situation" /> : null}

      {(code === 741) ? <img src={fog} alt="situation" /> : null}

      {(code >= 612 && code <= 622) ? <img src={hail} alt="situation" /> : null}

      {(code >= 300 && code <= 321) ? <img src={showers} alt="situation" /> : null}

      {(code >= 600 && code <= 622) ? <img src={sleet} alt="situation" /> : null}

      {(code === 611) ? <img src={snow} alt="situation" /> : null}

      {((code === 803 || code === 804) && (hours >= 6 && hours < 20)) ? <img src={heavyCloudDay} alt="situation" /> : null}
      {((code === 803 || code === 804) && (hours >= 20 && hours < 6)) ? <img src={heavyCloudNight} alt="situation" /> : null}

      {((code === 801 || code === 802) && (hours >= 20 && hours < 6)) ? <img src={lightCloudNight} alt="situation" /> : null}
      {((code === 801 || code === 802) && (hours >= 6 && hours < 20)) ? <img src={lightCloudDay} alt="situation" /> : null}


      {((code >= 502 && code <= 531) && (hours >= 6 && hours < 20)) ? <img src={heavyRainDay} alt="situation" /> : null}
      {((code >= 502 && code <= 531) && (hours >= 20 && hours < 6)) ? <img src={heavyRainNight} alt="situation" /> : null}

      {((code === 500 || code === 501) && (hours >= 6 && hours < 20)) ? <img src={lightRainDay} alt="situation" /> : null}
      {((code === 500 || code === 501) && (hours >= 20 && hours < 6)) ? <img src={lightRainNight} alt="situation" /> : null}

      {((code >= 200 && code <= 232) && (hours >= 6 && hours < 20)) ? <img src={thunderstormDay} alt="situation" /> : null}
      {((code >= 200 && code <= 232) && (hours >= 20 && hours < 6)) ? <img src={thunderstormNight} alt="situation" /> : null}

      <p>{tiempo.weather[0].description}</p>
      <p style={{ fontWeight: "500", fontSize: "3rem" }}>
        {tiempo.main.temp}°C
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
        {/* wind speed */}
        <p>
          <i className="fas fa-wind text-xl text-white animate-pulse"></i>
          <br />
          {tiempo.wind.speed} km/h
        </p>
        <p>
          {/* visibility */}
          <i className="fas fa-sun text-xl text-white animate-pulse"></i>
          <br />
          {tiempo.visibility}
        </p>
        <p>
          {/* humidity */}
          <i className="fas fa-tint fa-2x"></i>
          <br />
          {tiempo.main.humidity} %
        </p>
        <p>
          {/* percipitation */}
          <i className="fas fa-cloud-rain fa-2x"></i>
          <br />
          {tiempo.main.pressure} %
        </p>
      </div>
    </div>
  );
};

export default Weather;
