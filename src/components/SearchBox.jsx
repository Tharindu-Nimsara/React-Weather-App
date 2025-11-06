import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBox({ onSearchLocation }) {
  const [location, setLocation] = useState(""); //initial value is empty string. it resolves undefined error

  const setLoactionInput = (e) => {
    setLocation(e.target.value);
  };

  const clickSearch = () => {
    if (location.trim() !== "") {
      onSearchLocation(location);
      setLocation("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      clickSearch();
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-6">Weather App</h1>

      {/* Outer container */}
      <div className="flex items-stretch bg-[#334155] rounded-2xl w-[22rem] sm:w-[24rem] md:w-[20rem] shadow-lg overflow-hidden h-12">
        {/* Input field */}
        <input
          type="text"
          placeholder="Search location"
          value={location}
          onChange={setLoactionInput}
          onKeyPress={handleKeyPress}
          className="flex-1 h-full px-5 text-lg bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
        />

        {/* Larger search button */}
        <button
          type="button"
          onClick={clickSearch}
          className="w-20 h-full flex items-center justify-center bg-[#3B82F6] hover:bg-[#2563EB] transition-all"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
