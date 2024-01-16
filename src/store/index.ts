import { combineReducers } from "redux";
import { all, fork } from "redux-saga/effects";
import { WeatherState } from "../components/Weather/Weather.types";
import { WeatherReducer } from "../components/Weather/WeatherContainer.reducer";
import { getWeatherDataWatcher } from "../components/Weather/WeatherContainer.saga";

export interface ApplicationState {
  weatherDetails: WeatherState;
}

export const rootReducer = combineReducers({
  weatherDetails: WeatherReducer,
});

export function* rootSaga() {
  const sagas = [getWeatherDataWatcher];

  yield all(
    sagas.filter((saga) => saga !== undefined).map((saga) => fork(saga))
  );
}
