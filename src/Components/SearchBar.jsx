import React from "react";
import { useState } from "react";
import "../Components/Style/searchbar.css";

const SearchBar = (props) => {
  const getWeatherByCity = props.getWeatherByCity;
  const [citySelected, setCitySelected] = useState("");
  const handleCityChange = (e) => {
    setCitySelected(e.target.value);
  };
  const getCityData = (e) => {
    e.preventDefault();
    getWeatherByCity(citySelected);
    setCitySelected("");
  };
  return (
    <div className="search-container">
      <form action="" onSubmit={getCityData}>
        <input
          value={citySelected}
          onChange={handleCityChange}
          type="text"
          name="location"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
