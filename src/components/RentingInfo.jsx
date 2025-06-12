import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const sections = [
  {
    title: "Car Rental Companies",
    items: [
      "Ace Car Rental",
      "Alamo Car Rental",
      "Avis Car Rental",
      "Budget Car Rental",
      "Enterprise Car Rental",
      "Europcar Car Rental",
      "Fox Car Rental",
      "Hertz Car Rental",
      "NU Car Rental",
      "Payless Car Rental",
      "Sixt Car Rental",
      "Thrifty Car Rental",
      "U-Save Car Rental",
      "National Car Rental",
    ],
  },
  {
    title: "Popular Destinations",
    items: [
      "Car Rental Orlando Airport",
      "Car Rental Fort Myers Airport",
      "Car Rental Tampa Airport",
      "Car Rental Miami Airport",
      "Car Rental Phoenix Airport",
      "Car Rental Denver Airport",
      "Car Rental Las Vegas Airport",
      "Car Rental Toronto Airport",
      "Car Rental Dallas Airport",
      "Car Rental Nashville Airport",
      "Car Rental Palm Springs Airport",
      "Car Rental Edmonton Airport",
      "Car Rental Newark Airport",
      "Car Rental LAX Airport",
      "Car Rental SJO Airport",
      "Cheap Car Rental Orlando",
      "Cheap Car Rental Miami",
      "Cheap Car Rental Fort Lauderdale",
      "Cheap Car Rental Tampa",
      "Cheap Car Rental Los Angeles",
      "Cheap Car Rental New York",
      "Cheap Car Rental Phoenix",
      "Cheap Car Rental Atlanta",
      "Cheap Car Rental Toronto",
      "Cheap Car Rental Dallas",
      "Cheap Car Rental Houston",
      "Cheap Car Rental Melbourne",
      "Cheap Car Rental San Francisco",
      "Cheap Car Rental Chicago",
      "Cheap Car Rental Seattle",
    ],
  },
  {
    title: "Popular Car Types",
    items: [
      "4 Wheel Drive Car Rental",
      "Pickup Truck Rental",
      "15 Passenger Van Rental",
      "12 Passenger Van Rental",
      "SUV Rental",
      "Minivan Rental",
      "Van Rental",
      "Full Size SUV Rental",
      "Luxury Car Rental",
      "Passenger Van Rental",
    ],
  },
];

const RentingInfo = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-2xl font-semibold text-center mb-10">
        What you need to know about renting a car
      </h2>

      <div className="max-w-3xl mx-auto  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            {/* Accordion header */}
            <button
              onClick={() => toggleSection(idx)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 text-base"
            >
              <span>{section.title}</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion content */}
            {openIndex === idx && (
              <div className="pb-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-blue-800">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="block hover:underline cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RentingInfo;
