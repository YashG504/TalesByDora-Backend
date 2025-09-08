// In: src/components/ItineraryList.tsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

// Match your schema
interface Itinerary {
  _id: string;
  name: string;
  description: string;
  highlights: string[];
  rating: number;
  days: string;
  nights: string;
  price: string;
  images: string[];
  category: string;
  time: string;
  numberOfRating?: string;
}

export default function ItineraryList() {
  const navigate = useNavigate();
  const { destination } = useParams<{ destination: string }>();

  const [itineraries, setItineraries] = useState<Itinerary[]>([]);
  const [loading, setLoading] = useState(true);

  const [maxPrice, setMaxPrice] = useState(300000);
  const [duration, setDuration] = useState<[number, number] | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchItineraries = async () => {
      if (!destination) return;
      setLoading(true);
      try {
        const response = await axios.get(`/api/itineraries/${destination}`);
        setItineraries(response.data);
      } catch (error) {
        console.error("Failed to fetch itineraries:", error);
        setItineraries([]);
      } finally {
        setLoading(false);
      }
    };
    fetchItineraries();
  }, [destination]);

  const handleViewDetails = (item: Itinerary) => {
    navigate(`/itinerary/${item._id}`, { state: { itinerary: item } });
  };

  const toggleSelection = (
    value: any,
    list: any[],
    setList: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    setList((prevList) =>
      prevList.includes(value)
        ? prevList.filter((item) => item !== value)
        : [...prevList, value]
    );
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <StarIcon
          key={`full-${i}`}
          className="text-[#FFC107] text-base"
          style={{ fontFamily: "Poppins, sans-serif" }}
        />
      ) : (
        <StarOutlineIcon
          key={`empty-${i}`}
          className="text-[#BDBDBD] text-base"
          style={{ fontFamily: "Poppins, sans-serif" }}
        />
      )
    );

  const filteredData = itineraries.filter((item) => {
    const priceOk = parseInt(item.price) <= maxPrice;
    const durationOk =
      !duration ||
      (parseInt(item.days) === duration[0] &&
        parseInt(item.nights) === duration[1]);
    const ratingOk =
      selectedRatings.length === 0 || selectedRatings.includes(item.rating);
    const categoryOk =
      selectedCategories.length === 0 ||
      (item.category &&
        item.category
          .split(",")
          .some((cat) => selectedCategories.includes(cat.trim())));
    return priceOk && durationOk && ratingOk && categoryOk;
  });

  if (loading) {
    if (destination) {
      return (
        <div className="text-center py-20 font-poppins">
          Loading Itineraries...
        </div>
      );
    }
    return null;
  }

  return (
    <div className="flex flex-col bg-white w-full h-fit py-5 px-4 md:px-8 lg:px-[50px] font-poppins">
      {/* Mobile filter toggle */}
      <div className="lg:hidden flex justify-center py-4">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="bg-[#024e7ed0] text-white p-3 rounded-xl w-full font-medium"
        >
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row w-full gap-8 py-5">
        {/* Left Filter Panel */}
        <div
          className={`left w-full lg:basis-64 border border-white shadow-2xl rounded-2xl h-fit ${
            isFilterOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="bg-[#024e7ed0] rounded-t-2xl flex flex-col items-center justify-center gap-4 p-4 font-semibold text-sm text-white">
            <span>When are you traveling?</span>
            <button className="bg-white rounded-2xl p-3 text-xs w-[200px] text-black font-medium">
              February 05 ~ March 14
            </button>
          </div>

          <div className="flex flex-col gap-4 p-4 text-black text-sm">
            <span className="font-semibold text-base">Trip Category</span>
            <div className="flex flex-col gap-1">
              {[
                "Honeymoon",
                "Family",
                "Culture & Art",
                "BackPacker",
                "Adventure",
                "Wellness",
              ].map((type, i) => (
                <label
                  key={i}
                  className="flex flex-row items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#024e7ed0]"
                    checked={selectedCategories.includes(type)}
                    onChange={() =>
                      toggleSelection(type, selectedCategories, setSelectedCategories)
                    }
                  />
                  {type}
                </label>
              ))}
            </div>
            <span className="text-[#024e7ed0] font-semibold cursor-pointer">
              See More
            </span>
          </div>

          {/* Price Filter */}
          <div className="border-t border-[#024e7ed0] mx-6 py-4 flex flex-col gap-3 text-sm">
            <span className="font-semibold">Filter Price</span>
            <input
              type="range"
              min="0"
              max="300000"
              step="5000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#024e7ed0]"
            />
            <span className="text-sm text-gray-600">
              Up to: <strong>₹{maxPrice.toLocaleString()}</strong>
            </span>
          </div>

          {/* Duration Filter */}
          <div className="border-t border-[#024e7ed0] mx-6 py-4 flex flex-col gap-2 text-sm">
            <span className="font-semibold">Duration</span>
            {[
              [3, 2],
              [4, 3],
              [5, 4],
              [6, 5],
              [7, 6],
              [8, 7],
              [9, 8],
              [10, 9],
            ].map(([d, n], i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#024e7ed0]"
                  checked={duration?.[0] === d && duration?.[1] === n}
                  onChange={() =>
                    setDuration((prev) => (prev?.[0] === d ? null : [d, n]))
                  }
                />
                {d} Days {n} Nights
              </label>
            ))}
          </div>

          {/* Ratings Filter */}
          <div className="border-t border-[#024e7ed0] mx-6 py-4 flex flex-col gap-2 text-sm">
            <span className="font-semibold">Ratings</span>
            {[5, 4, 3].map((rate, i) => (
              <label key={i} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#024e7ed0]"
                  checked={selectedRatings.includes(rate)}
                  onChange={() =>
                    toggleSelection(rate, selectedRatings, setSelectedRatings)
                  }
                />
                {rate} Stars
              </label>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="right w-full lg:basis-192 mb-4 flex-1 font-normal">
          <div className="flex flex-row justify-between items-center text-xs p-2 text-gray-600">
            <span>{filteredData.length} results</span>
            <span>Sort by: Featured</span>
          </div>

          <div className="flex flex-col gap-6">
            {filteredData.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row pt-2 rounded-2xl border shadow-xl border-[#E7E6E6]"
              >
                {/* Image */}
                <div className="w-full md:basis-1/3 md:h-64 rounded-lg p-2">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="bg-fill w-full h-[230px] object-cover rounded-2xl"
                  />
                </div>

               {/* Middle Content */}
<div className="w-full md:basis-1/3 md:h-64 rounded-lg p-2 flex flex-col gap-3 text-sm">
  <h6 className="px-2 font-semibold text-base">{item.name}</h6>
  <h2 className="px-2 text-gray-800 font-medium text-sm leading-relaxed">
    {item.description}
  </h2>

  {/* Ratings */}
  <div className="flex flex-row items-center gap-1 px-2">
    {renderStars(item.rating)}
    <span className="text-xs text-gray-600">
      <strong>{item.rating}</strong> ({item.numberOfRating})
    </span>
  </div>

  {/* Highlights */}
  <p className="px-2 text-xs text-gray-600">{item.highlights[0]}</p>

 
</div>

                {/* Divider */}
                <div className="h-[1px] md:h-[100%] bg-[#E7E6E6] w-full md:w-[1px]"></div>

    {/* Right Price & Button */}
<div className="w-full md:basis-1/3 md:h-64 rounded-lg p-4 flex flex-row md:flex-col justify-between items-center text-sm">
  <div className="flex flex-col items-center gap-3">
    {/* Guarantees (large screens: above duration) */}
    <div className="hidden lg:flex flex-row gap-3 text-[#024e7ed0] text-xs font-semibold">
      <span>Best Price Guarantee</span>
      <span>Free Cancellation</span>
    </div>

    {/* Duration (highlighted) */}
    <div className="mt-2 text-sm font-bold text-black">
      {item.time}
    </div>

    {/* Guarantees (small screens: below duration) */}
    <div className="flex lg:hidden flex-row gap-3 text-[#024e7ed0] text-xs font-semibold">
      <span>Best Price Guarantee</span>
      <span>Free Cancellation</span>
    </div>
  </div>

  <div className="flex flex-col items-center gap-5 justify-between">
    <div className="flex flex-col items-center">
      <span>
        From <strong>₹{item.price}</strong>
      </span>
    </div>
    <div>
      <button
        onClick={() => handleViewDetails(item)}
        className="p-3 rounded-2xl w-50 border text-[#024e7ed0] border-[#024e7ed0] hover:bg-[#024e7ed0] hover:text-white transition-colors font-medium text-sm"
      >
        View Details
      </button>
    </div>
  </div>
</div>


                </div>
            ))}

            {filteredData.length === 0 && (
              <p className="text-center text-gray-500 py-10 font-medium">
                No tours match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
