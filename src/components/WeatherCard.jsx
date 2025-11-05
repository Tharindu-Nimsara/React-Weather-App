import React from "react";
import { CloudSun, Wind, Droplets } from "lucide-react";

export default function WeatherCard() {
  return (
    <div className="flex items-center justify-center bg-transparent">
      <div className="bg-gradient-to-br from-[#3B82F6]/10 to-[#1E40AF]/20 text-white rounded-3xl p-8 w-80 shadow-2xl backdrop-blur-sm border border-white/10">
        {/* Date & Location */}
        <div className="text-center mb-6">
          <h2 className="text-lg font-medium text-gray-300">
            Wednesday, October 02
          </h2>
          <p className="text-gray-400 text-sm mt-1">Colombo, Sri Lanka</p>
        </div>

        {/* Weather Icon */}
        <div className="flex justify-center mb-4">
          <CloudSun className="w-16 h-16 text-yellow-400" />
        </div>

        {/* Weather Description */}
        <p className="text-center text-xl font-medium text-gray-200 mb-3">
          Partly Cloudy
        </p>

        {/* Temperature */}
        <h1 className="text-center text-5xl font-bold text-white mb-6">27°C</h1>

        {/* Wind & Humidity */}
        <div className="flex justify-between text-gray-300">
          {/* Wind */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-xl font-semibold text-white">78</span>
              <span className="text-xs">m/s</span>
              <Wind className="w-5 h-5 ml-1 text-blue-400" />
            </div>
            <span className="text-sm mt-1">Wind Speed</span>
          </div>

          {/* Humidity */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <span className="text-xl font-semibold text-white">89%</span>
              <Droplets className="w-5 h-5 text-blue-300" />
            </div>
            <span className="text-sm mt-1">Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}
