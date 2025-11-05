import React from "react";
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-7 bg-[#1F2937]">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6 tracking-wide">
        Weather App
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-[#334155] rounded-2xl p-2 w-[90%] max-w-xl shadow-lg hover:shadow-xl transition-shadow">
        <input
          type="text"
          placeholder="Search location"
          className="flex-grow px-4 py-3 text-lg text-white bg-transparent placeholder-gray-400 focus:outline-none"
        />
        <button className="p-3 bg-[#3B82F6] hover:bg-[#2563EB] rounded-xl transition-colors">
          <Search className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
