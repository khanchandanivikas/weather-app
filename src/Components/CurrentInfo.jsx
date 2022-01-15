import React from "react";

const CurrentInfo = (props) => {
  const tiempo = props.tiempo;
  return (
    <>
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
        {tiempo.main.pressure}
      </p>
    </>
  );
};

export default CurrentInfo;
