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

const CurrentImage = (props) => {
  const code = props.code;
  const hours = new Date().getHours();
  return (
    <>
      {code === 800 && (hours >= 6 && hours) < 20 ? (
        <img src={clearDay} alt="situation" />
      ) : null}

      {code === 800 && hours >= 20 ? (
        <img src={clearNight} alt="situation" />
      ) : null}
      {code === 800 && hours < 6 ? (
        <img src={clearNight} alt="situation" />
      ) : null}

      {code === 741 ? <img src={fog} alt="situation" /> : null}

      {code >= 612 && code <= 622 ? <img src={hail} alt="situation" /> : null}

      {code >= 300 && code <= 321 ? (
        <img src={showers} alt="situation" />
      ) : null}

      {code >= 600 && code <= 622 ? <img src={sleet} alt="situation" /> : null}

      {code === 611 ? <img src={snow} alt="situation" /> : null}

      {code === 803 && hours >= 6 && hours < 20 ? (
        <img src={heavyCloudDay} alt="situation" />
      ) : null}

      {code === 804 && hours >= 6 && hours < 20 ? (
        <img src={heavyCloudDay} alt="situation" />
      ) : null}

      {code === 803 && hours >= 20 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {code === 803 && hours < 6 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {code === 804 && hours >= 20 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}
      {code === 804 && hours < 6 ? (
        <img src={heavyCloudNight} alt="situation" />
      ) : null}

      {code === 801 && hours >= 20 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}
      {code === 801 && hours < 6 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}

      {code === 802 && hours >= 20 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}
      {code === 802 && hours < 6 ? (
        <img src={lightCloudNight} alt="situation" />
      ) : null}

      {code === 801 && hours >= 6 && hours < 20 ? (
        <img src={lightCloudDay} alt="situation" />
      ) : null}

      {code === 802 && hours >= 6 && hours < 20 ? (
        <img src={lightCloudDay} alt="situation" />
      ) : null}

      {code >= 502 && code <= 531 && hours >= 6 && hours < 20 ? (
        <img src={heavyRainDay} alt="situation" />
      ) : null}

      {code >= 502 && code <= 531 && hours >= 20 ? (
        <img src={heavyRainNight} alt="situation" />
      ) : null}
      {code >= 502 && code <= 531 && hours < 6 ? (
        <img src={heavyRainNight} alt="situation" />
      ) : null}

      {code === 500 && hours >= 6 && hours < 20 ? (
        <img src={lightRainDay} alt="situation" />
      ) : null}

      {code === 501 && hours >= 6 && hours < 20 ? (
        <img src={lightRainDay} alt="situation" />
      ) : null}

      {code === 500 && hours >= 20 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}
      {code === 500 && hours < 6 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}

      {code === 501 && hours >= 20 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}
      {code === 501 && hours < 6 ? (
        <img src={lightRainNight} alt="situation" />
      ) : null}

      {code >= 200 && code <= 232 && hours >= 6 && hours < 20 ? (
        <img src={thunderstormDay} alt="situation" />
      ) : null}

      {code >= 200 && code <= 232 && hours >= 20 ? (
        <img src={thunderstormNight} alt="situation" />
      ) : null}
      {code >= 200 && code <= 232 && hours < 6 ? (
        <img src={thunderstormNight} alt="situation" />
      ) : null}
    </>
  );
};

export default CurrentImage;
