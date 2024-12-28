import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Location = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const locationOptions = [
    { value: "", label: "All" },
    { value: "gurgaon", label: "gurgaon" },
    { value: "bengaluru", label: "Bengaluru" },
    { value: "hyderabad", label: "hyderabad" },
    { value: "mumbai", label: "mumbai" },
  ];

  const handleSelect = (value, label) => {
    setSelectedLocation(label);
    handleChange({ target: { value } }); // Notify parent of the selection
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="border rounded-lg w-full">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
      >
        <h4 className="text-lg font-medium">{selectedLocation}</h4>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Dropdown Content */}
      <div
        className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
      >
        {locationOptions.map((option) => (
          <div
            key={option.value}
            onClick={() => handleSelect(option.value, option.label)}
            className={`
              cursor-pointer px-3 py-2 rounded-md transition-colors 
              ${selectedLocation === option.label
                ? "bg-blue-50 text-green"
                : "hover:bg-gray-100"}
            `}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={option.value}
                checked={selectedLocation === option.label}
                onChange={() => handleSelect(option.value, option.label)}
                className="hidden"
              />
              <span
                className={`
                  w-4 h-4 border rounded-full flex items-center justify-center
                  ${selectedLocation === option.label
                    ? "bg-blue-600 border-blue-600"
                    : "border-gray-300"}
                `}
              >
                {selectedLocation === option.label && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span>{option.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
