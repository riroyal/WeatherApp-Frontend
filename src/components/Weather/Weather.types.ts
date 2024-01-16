import { pullWeatherData } from "./WeatherContainer.action";

export type weatherDetails = {
  locationName: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  icon: string;
};

export interface WeatherState {
  readonly weatherDetails: weatherDetails;
  readonly loading: boolean;
  readonly hasErrors: boolean;
}

export interface PropsFromState {
  weatherDetails: weatherDetails;
  loading: boolean;
  hasErrors: boolean;
}

export interface PropsFromDispatch {
  //onClick(): void;
  pullWeatherData: typeof pullWeatherData;
}

export type WeatherProps = PropsFromState & PropsFromDispatch;
