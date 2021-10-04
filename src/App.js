import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./Components/Weather";

function App() {
  const [weatherData, setWeatherData] = useState([]);
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

  const [active, setActive] = useState(false);
  const handleActive = async () => {
    try {
       const request = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=abe863571cad4532a7803e2971ef9856`
      );
      const datos = request.data;
      setWeatherData(datos);
      console.log(datos);
      console.log(weatherData);
    } catch (error) {
      console.log("error", error);
    }
    setActive(true);
  };
  return (
    <div className="App">
      <button onClick={handleActive}><i className="fas fa-redo-alt"></i></button>
      {active ? <Weather weatherData={weatherData} /> : null}
    </div>
  );
}

export default App;
