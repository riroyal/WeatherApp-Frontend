import { useDispatch } from "react-redux";
import { WeatherProps } from "./Weather.types";
import "./WeatherDetails.css";

import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";

import { getWeatherData } from "./WeatherContainer.action";
import { useEffect, useState } from "react";

export const WeatherDetails = ({ weatherDetails }: WeatherProps) => {
  const dispatch = useDispatch();

  const search = () => {
    dispatch(getWeatherData());
  };

  const [locationInputValue, setLocationInputValue] = useState("London");
  const [icon, setIcon] = useState(clear_icon);

  useEffect(() => {
    if (weatherDetails.icon === "01d" || weatherDetails.icon === "01d") {
      setIcon(clear_icon);
    } else if (weatherDetails.icon === "02d" || weatherDetails.icon === "02n") {
      setIcon(cloud_icon);
    } else if (weatherDetails.icon === "03d" || weatherDetails.icon === "03n") {
      setIcon(drizzle_icon);
    } else if (weatherDetails.icon === "04d" || weatherDetails.icon === "04n") {
      setIcon(drizzle_icon);
    } else if (weatherDetails.icon === "09d" || weatherDetails.icon === "09n") {
      setIcon(rain_icon);
    } else if (weatherDetails.icon === "10d" || weatherDetails.icon === "10n") {
      setIcon(rain_icon);
    } else if (weatherDetails.icon === "13d" || weatherDetails.icon === "13n") {
      setIcon(snow_icon);
    } else {
      setIcon(clear_icon);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <input
            type="text"
            id="locationInput"
            value={locationInputValue}
            onChange={(e) => setLocationInputValue(e.target.value)}
          />
          <button onClick={() => search()}>Search</button>
        </div>
        <div>Location name: {weatherDetails.locationName}</div>
        <div>
          <img src={icon} alt="" />
        </div>
        <ul>
          <li>
            Temperature <span>{Math.round(weatherDetails.temperature)}°c</span>
          </li>
          <li>
            Humidity <span>{Math.round(weatherDetails.humidity)}%</span>
          </li>
          <li>
            Wind speed <span>{Math.round(weatherDetails.windSpeed)} mph</span>
          </li>
        </ul>
      </div>
    </>
  );
};
