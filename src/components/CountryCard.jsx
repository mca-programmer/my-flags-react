import React from "react";

export default function CountryCard({ country, status, onSetStatus }) {
  let bg = "bg-gradient-to-r from-[#2A7B9B] via-[#57C785] to-[#00D4FF]";
  if (status === "visit") bg = "bg-[#B89879]";
  if (status === "visited") bg = "bg-[#FCB045]";

  return (
    <div className={`card shadow-lg ${bg} p-4`}>
      {/* Flag */}
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`}
        className="w-full h-24 object-cover mb-2 rounded"
      />

      {/* Country Name */}
      <h3 className="text-lg font-semibold">{country.name}</h3>

      {/* ✅ Extra Details */}
      <ul className="text-sm mt-2 space-y-1 text-gray-700">
        <li><span className="font-medium">Capital:</span> {country.capital}</li>
        <li><span className="font-medium">Continent:</span> {country.continent}</li>
        <li><span className="font-medium">Currency:</span> {country.currency}</li>
        <li><span className="font-medium">Area:</span> {country.area.toLocaleString()} km²</li>
        <li><span className="font-medium">Population:</span> {country.population.toLocaleString()}</li>
      </ul>

      {/* Buttons */}
      <div className="mt-3 space-x-2">
        <button
          className={`btn btn-sm ${status === "visit" ? "btn-warning" : "btn-outline"}`}
          onClick={() => onSetStatus(country.code, "visit")}
        >
          Visit
        </button>
        <button
          className={`btn btn-sm ${status === "visited" ? "btn-success" : "btn-outline"}`}
          onClick={() => onSetStatus(country.code, "visited")}
        >
          Visited
        </button>
      </div>
    </div>
  );
}
