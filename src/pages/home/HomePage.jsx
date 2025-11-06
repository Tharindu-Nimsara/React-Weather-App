import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";
import axios from "axios";

export default function HomePage() {
  const [geoRes, setGeoRes] = useState(); //  geo result (array)
  const [location, setLocation] = useState(); // selected location
  const [weatherData, setWeatherData] = useState(); // weather data
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  const searchLocation = (locationText) => {
    //get city text from user input and send it to geolocation api to get lon and lat
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locationText}&limit=5&appid=${apiKey}`
      )
      .then((res) => {
        setGeoRes(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => console.error("Error fetching geo location:", err));
  };

  useEffect(() => {
    // set city and country
    if (!geoRes) return;
    const locationObject = {
      city: geoRes.name,
      country: geoRes.country,
    };
    setLocation(locationObject);

    //getting weather data
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoRes.lat}&lon=${geoRes.lon}&appid=${apiKey}`
      )
      .then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching weather data:", err));
  }, [geoRes, apiKey]);


   //for testing
  useEffect(() => {
    if (weatherData) console.log("✅ weatherData:", weatherData);
  }, [weatherData]);

  useEffect(() => {
    if (location) console.log("✅ location:", location);
  }, [location]);

  return (
    <div className="bg-[#1F2937] min-h-screen flex flex-col items-center justify-center gap-10 py-10">
      <SearchBox onSearchLocation={searchLocation} />
      <WeatherCard  />
    </div>
  );
}
