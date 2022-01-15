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

const ForecastImage = (props) => {
  const data = props.data;
  const hours = new Date().getHours();
  return (
    <>
      {data.weather[0].id === 800 && (hours >= 6 && hours) < 20 ? (
        <img src={clearDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 800 && hours >= 20 ? (
        <img src={clearNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 800 && hours < 6 ? (
        <img src={clearNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 741 ? <img src={fog} alt="situation" /> : null}

      {data.weather[0].id >= 612 && data.weather[0].id <= 622 ? (
        <img src={hail} alt="situation" />
      ) : null}

      {data.weather[0].id >= 300 && data.weather[0].id <= 321 ? (
        <img src={showers} alt="situation" />
      ) : null}

      {data.weather[0].id >= 600 && data.weather[0].id <= 622 ? (
        <img src={sleet} alt="situation" />
      ) : null}

      {data.weather[0].id === 611 ? <img src={snow} alt="situation" /> : null}

      {data.weather[0].id === 803 && hours >= 6 && hours < 20 ? (
        <img src={heavyCloudDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 804 && hours >= 6 && hours < 20 ? (
        <img src={heavyCloudDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 803 && hours >= 20 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 803 && hours < 6 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 804 && hours >= 20 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 804 && hours < 6 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 801 && hours >= 20 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 801 && hours < 6 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 802 && hours >= 20 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 802 && hours < 6 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 801 && hours >= 6 && hours < 20 ? (
        <img src={lightCloudDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 802 && hours >= 6 && hours < 20 ? (
        <img src={lightCloudDay} alt="situation" />
      ) : null}

      {data.weather[0].id >= 502 &&
      data.weather[0].id <= 531 &&
      hours >= 6 &&
      hours < 20 ? (
        <img src={heavyRainDay} alt="situation" />
      ) : null}

      {data.weather[0].id >= 502 && data.weather[0].id <= 531 && hours >= 20 ? (
        <img src={heavyRainNight} alt="situation" />
      ) : null}
      {data.weather[0].id >= 502 && data.weather[0].id <= 531 && hours < 6 ? (
        <img src={heavyRainNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 500 && hours >= 6 && hours < 20 ? (
        <img src={lightRainDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 501 && hours >= 6 && hours < 20 ? (
        <img src={lightRainDay} alt="situation" />
      ) : null}

      {data.weather[0].id === 500 && hours >= 20 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 500 && hours < 6 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}

      {data.weather[0].id === 501 && hours >= 20 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}
      {data.weather[0].id === 501 && hours < 6 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}

      {data.weather[0].id >= 200 &&
      data.weather[0].id <= 232 &&
      hours >= 6 &&
      hours < 20 ? (
        <img src={thunderstormDay} alt="situation" />
      ) : null}

      {data.weather[0].id >= 200 && data.weather[0].id <= 232 && hours >= 20 ? (
        <img src={thunderstormNight} alt="situation" />
      ) : null}
      {data.weather[0].id >= 200 && data.weather[0].id <= 232 && hours < 6 ? (
        <img src={thunderstormNight} alt="situation" />
      ) : null}
    </>
  );
};

export default ForecastImage;
