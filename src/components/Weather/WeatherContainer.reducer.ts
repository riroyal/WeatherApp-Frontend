import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_SUCCESS,
} from "./Weather.action.types";
import { PropsFromState } from "./Weather.types";

const initialState: PropsFromState = {
  weatherDetails: {
    locationName: "",
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    icon: "04d",
  },
  loading: false,
  hasErrors: false,
};
const reducer = (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_WEATHER_DATA: {
      return {
        ...state,
        loading: true,
        hasErrors: false,
      };
    }
    case GET_WEATHER_DATA_SUCCESS: {
      return {
        ...state,
        weatherDetails: action.payload,
        loading: false,
        hasErrors: false,
      };
    }
    default:
      return state;
  }
};

export { reducer as WeatherReducer };
