import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_SUCCESS,
} from "./Weather.action.types";

//------------------------------------API
const fetchPosts = function* () {
  let remoteData;
  let inputValue = (
    document.getElementById("locationInput") as HTMLInputElement
  ).value;

  let weatherApi = "https://localhost:7232/Weather" + "?location=" + inputValue;

  yield axios.get(weatherApi).then((resp) => {
    remoteData = resp.data;
  });

  yield put({ type: GET_WEATHER_DATA_SUCCESS, payload: remoteData });
};

export function* getWeatherDataWatcher() {
  yield takeLatest(GET_WEATHER_DATA, fetchPosts);
}
