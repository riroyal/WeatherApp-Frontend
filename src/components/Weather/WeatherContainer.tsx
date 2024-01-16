import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { WeatherProps } from "./Weather.types";
import { ApplicationState } from "../../store";
import { WeatherDetails } from "./WeatherDetails";
import { bindActionCreators } from "redux";
import { pullWeatherData, getWeatherData } from "./WeatherContainer.action";

const WeatherContainer: React.FC<WeatherProps> = (props: WeatherProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeatherData());
  }, [dispatch]);

  const renderwWatherDetails = () => {
    if (props.loading) return <div>Loading weather details..</div>;
    if (props.hasErrors) return <p>Unable to display weather details</p>;
    return <WeatherDetails {...props} />;
  };

  return (
    <section>
      <h1>Weather details</h1>
      {renderwWatherDetails()}
    </section>
  );
};

const mapStateToProps = ({ weatherDetails }: ApplicationState) => {
  return {
    weatherDetails: weatherDetails.weatherDetails,
    loading: weatherDetails.loading,
    hasErrors: weatherDetails.hasErrors,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      pullWeatherData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
