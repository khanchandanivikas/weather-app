import React from "react";
import "../Components/Style/forecast.css";
import ForecastImage from "../Components/ForecastImage";

const Forecast = (props) => {
  const forecastData = props.forecastData;
  return (
    <div className="forecast-container">
      {forecastData.map((data) => {
        return (
          <div key={data.dt} className="daily-forecast">
            <p>{data.dt_txt}</p>
            <div>
              <ForecastImage data={data} />
              <div>
                <p>{data.weather[0].main}</p>
                <p>
                  {Math.floor(data.main.temp_min)}°C{" "}
                  <span>{Math.floor(data.main.temp_max)}°C</span>
                </p>
              </div>
              <p style={{ fontWeight: "500", fontSize: "1.4rem" }}>
                {Math.floor(data.main.temp)}°C
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
