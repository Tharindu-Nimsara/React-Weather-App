import React from "react";
import SearchBox from "../../components/SearchBox";
import WeatherCard from "../../components/WeatherCard";

export default function HomePage() {
  return (
    <div className="bg-[#1F2937] min-h-screen flex flex-col items-center justify-center gap-10 py-10">
      <SearchBox />
      <WeatherCard />
    </div>
  );
}
