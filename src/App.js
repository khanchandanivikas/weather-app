import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Components/Weather";
import SearchBar from "./Components/SearchBar";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const showPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
  };
  useEffect(() => {
    showPosition();
    // eslint-disable-next-line
  }, []);
  showPosition();

  const [flipped, setFlipped] = useState(false);
  const toggleFlip = () => {
    setFlipped(!flipped);
  };

  const getForecast = async (city) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&cnt=4&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const datos = request.data;
      if (datos) {
        setForecastData(datos.list);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const [active, setActive] = useState(false);
  const handleActive = async () => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const datos = request.data;
      setWeatherData(datos);
      getForecast(datos.name);
    } catch (error) {
      console.log("error", error);
    }
    setActive(true);
  };

  const getWeatherByCity = async (city) => {
    try {
      const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      const datos = request.data;
      if (datos) {
        setWeatherData(datos);
        getForecast(city);
      }
    } catch (error) {
      console.log("error", error);
    }
    setActive(true);
  };

  return (
    <div className="App">
      <SearchBar getWeatherByCity={getWeatherByCity} />
      <div className="container">
        <button onClick={handleActive} className="btn-refresh">
          <i className="fas fa-redo-alt"></i>
        </button>
        <button onClick={toggleFlip} className="btn-flip">
          <i className="fas fa-chevron-right"></i>
        </button>
        {weatherData.length < 1 && (
          <p className="noData">No weather data available</p>
        )}
        {active ? (
          <Weather
            key={weatherData.id}
            weatherData={weatherData}
            flipped={flipped}
            forecastData={forecastData}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
