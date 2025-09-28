import React, { useState, useEffect } from "react";
import { countries } from "./data/countries";
import CountryCard from "./components/CountryCard";

export default function App() {
  const [statusMap, setStatusMap] = useState({});

  // load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("countryStatus");
    if (saved) setStatusMap(JSON.parse(saved));
  }, []);

  // save when statusMap changes
  useEffect(() => {
    localStorage.setItem("countryStatus", JSON.stringify(statusMap));
  }, [statusMap]);

  const handleSetStatus = (code, status) => {
    setStatusMap(prev => ({ ...prev, [code]: status }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">World MCA Travel Tracker</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map(c => (
          <CountryCard
            key={c.code}
            country={c}
            status={statusMap[c.code] || "none"}
            onSetStatus={handleSetStatus}
          />
        ))}
      </div>
    </div>
  );
}
