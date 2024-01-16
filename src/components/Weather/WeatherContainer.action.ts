import { GET_WEATHER_DATA } from "./Weather.action.types";

export const pullWeatherData = () => {
  return { type: "PULL_WEATHER_DATA" };
};

export const getWeatherData = () => {
  return { type: GET_WEATHER_DATA };
};
