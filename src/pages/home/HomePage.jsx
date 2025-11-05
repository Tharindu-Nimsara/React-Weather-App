import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";
import axios from "axios";

export default function HomePage() {
  const [geoRes, setGeoRes] = useState();
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  const searchLocation = (locationText) => {
    axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${locationText}&limit=5&appid=${apiKey}`
      )
      .then((res) => {
        setGeoRes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching geo location:", err));
  };

  useEffect(() => {
    // call open weather api with lat , lon and get weather data
  }, [geoRes]);

  return (
    <div className="bg-[#1F2937] min-h-screen flex flex-col items-center justify-center gap-10 py-10">
      <SearchBox onSearchLocation={searchLocation} />
      <WeatherCard />
    </div>
  );
}
