"use client";

import React, { useState } from "react";
import { City } from "country-state-city";

export default function SwissCityStreetSearch() {
  const [cityQuery, setCityQuery] = useState("");
  const [streetQuery, setStreetQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [streetSuggestions, setStreetSuggestions] = useState([]);
  const [cityOpen, setCityOpen] = useState(false);
  const [streetOpen, setStreetOpen] = useState(false);

  // Get all cities of Switzerland
  const swissCities = City.getCitiesOfCountry("CH");

  // Handle city input
  const handleCityInput = (e) => {
    const value = e.target.value;
    setCityQuery(value);

    if (value.length >= 1) {
      const filtered = swissCities.filter((c) =>
        c.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(filtered);
      setCityOpen(true);
    } else {
      setFilteredCities([]);
      setCityOpen(false);
    }
  };

  // Handle street input (fetch from OpenStreetMap)
  const handleStreetInput = async (e) => {
    const value = e.target.value;
    setStreetQuery(value);

    if (value.length >= 1 && cityQuery) {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?street=${value}&city=${cityQuery}&country=Switzerland&format=json&addressdetails=1&limit=5`
        );
        const data = await res.json();
        setStreetSuggestions(data);
        setStreetOpen(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      setStreetSuggestions([]);
      setStreetOpen(false);
    }
  };

  return (
    <div className="space-y-4 w-full max-w-sm">
      {/* City input */}
      <div className="relative">
        <input
          type="text"
          value={cityQuery}
          onChange={handleCityInput}
          onFocus={() => cityQuery.length >= 1 && setCityOpen(true)}
          onBlur={() => setTimeout(() => setCityOpen(false), 150)}
          placeholder="Type Swiss city..."
          className="w-full border rounded py-2 px-4"
        />

        {cityOpen && filteredCities.length > 0 && (
          <div className="absolute mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-10">
            {filteredCities.map((city, idx) => (
              <button
                key={idx}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setCityQuery(city.name);
                  setCityOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                {city.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Street input */}
      <div className="relative">
        <input
          type="text"
          value={streetQuery}
          onChange={handleStreetInput}
          onFocus={() => streetQuery.length >= 2 && setStreetOpen(true)}
          onBlur={() => setTimeout(() => setStreetOpen(false), 150)}
          placeholder="Type street name..."
          className="w-full border rounded py-2 px-4"
          disabled={!cityQuery} // prevent typing street before city
        />

        {streetOpen && streetSuggestions.length > 0 && (
          <div className="absolute mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-10">
            {streetSuggestions.map((street, idx) => (
              <button
                key={idx}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setStreetQuery(street.display_name);
                  setStreetOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                {street.display_name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
