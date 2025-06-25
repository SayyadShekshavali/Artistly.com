"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Speaker from "../components/Speaker.jpeg";

import DJop from "../components/djop.jpeg";
import arjit from "../components/arjit.jpeg";
import sp from "../components/sp.jpeg";
import sm from "../components/sm.jpeg";
const Page = () => {
  const [artists, setArtists] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    price: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("artists");

    if (!stored) {
      const dummyArtists = [
        {
          name: "Arjith singh",
          category: "Singer",
          fee: "$1000-$5000",
          location: "Maharastra",
          image: arjit,
        },
        {
          name: "Saipallavi",
          category: "Dancer",
          fee: "$500-$1000",
          location: "kerala",
          image: sp,
        },
        {
          name: "sandeep maheshwari",
          category: "Speaker",
          fee: "$100-$500",
          location: "UttarPradesh",
          image: sm,
        },
        {
          name: "DJ operator",
          category: "DJ",
          fee: "$5000+",
          location: "hydera",
          image: DJop,
        },
        {
          name: "David Speakwell",
          category: ["Speaker"],
          fee: "$5000+",
          location: "San Francisco",
          image: Speaker,
        },
      ];
      localStorage.setItem("artists", JSON.stringify(dummyArtists));
      setArtists(dummyArtists);
      setFiltered(dummyArtists);
    } else {
      try {
        const parsed = JSON.parse(stored);
        setArtists(parsed);
        setFiltered(parsed);
      } catch (error) {
        console.error("Failed to parse artists:", error);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);

    const results = artists.filter((artist) => {
      const categoryMatch =
        newFilters.category === "" ||
        artist.category?.includes(newFilters.category);
      const locationMatch =
        newFilters.location === "" ||
        artist.location
          ?.toLowerCase()
          .includes(newFilters.location.toLowerCase());
      const priceMatch =
        newFilters.price === "" || artist.fee === newFilters.price;

      return categoryMatch && locationMatch && priceMatch;
    });

    setFiltered(results);
  };

  return (
    <div className="flex flex-col lg:flex-row p-2">
      <div className="m-3 lg:h-20 h-50 lg:w-130 w-[calc(100dvw-3rem)]  grid grid-cols-1 sm:grid-cols-3 gap-1 border p-3 rounded-lg bg-gray-50">
        <select
          name="category"
          onChange={handleChange}
          className="border p-2 m-2 rounded"
        >
          <option value="">All Categories</option>
          <option value="Singer">Singer</option>
          <option value="Dancer">Dancer</option>
          <option value="Speaker">Speaker</option>
          <option value="DJ">DJ</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="border p-2 rounded m-2 "
        />
        <select
          name="price"
          onChange={handleChange}
          className="border p-2 rounded m-2 "
        >
          <option value="">All Price Ranges</option>
          <option value="$100-$500">$100-$500</option>
          <option value="$500-$1000">$500-$1000</option>
          <option value="$1000-$5000">$1000-$5000</option>
          <option value="$5000+">$5000+</option>
        </select>
      </div>

      <div className="lg:p-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 border-1 border-black rounded-xl m-5">
        {filtered.length === 0 ? (
          <p>No matching artists found.</p>
        ) : (
          filtered.map((artist, index) => (
            <div
              key={index}
              className="p-4 shadow-xl  rounded-xl shadow bg-white flex flex-col gap-2"
            >
              <Image
                className="h-40 w-40 mx-auto rounded-lg"
                src={artist.image || "/default-profile.jpg"}
                alt={artist.name}
                width={40}
                height={40}
              />
              <h3 className="text-lg font-semibold">{artist.name}</h3>
              <p>
                <strong>Category:</strong>{" "}
                {artist.category?.join(", ") || "N/A"}
              </p>
              <p>
                <strong>Fee:</strong> {artist.fee || "Not listed"}
              </p>
              <p>
                <strong>Location:</strong> {artist.location || "Unknown"}
              </p>
              <button className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                Ask for Quote
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Page;
