import React, { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign, Calendar } from "lucide-react";

const Sidebar = ({ handleChange, handleClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({
    location: "Location",
    salaryType: "Any",
    salaryRange: "Any",
    experience: "Any experience",
    employmentType: "Employment Type",
    jobPostingDate: "Date of Posting",
  });

  const options = {
    location: [
      { value: "", label: "All" },
      { value: "gurgaon", label: "Gurgaon" },
      { value: "bengaluru", label: "Bengaluru" },
      { value: "hyderabad", label: "Hyderabad" },
      { value: "mumbai", label: "Mumbai" },
    ],
    salaryType: [
      { value: "", label: "Any" },
      { value: "hourly", label: "Hourly" },
      { value: "monthly", label: "Monthly" },
      { value: "yearly", label: "Yearly" },
    ],
    salaryRange: [
      { value: "", label: "Any" },
      { value: "30", label: "< 30,000" },
      { value: "50", label: "< 50,000" },
      { value: "80", label: "< 80,000" },
      { value: "100", label: "< 100,000" },
    ],
    experience: [
      { value: "", label: "Any experience" },
      { value: "Internship", label: "Internship" },
      { value: "remote", label: "Work remotely" },
    ],
    employmentType: [
      { value: "", label: "Any" },
      { value: "full-time", label: "Full-time" },
      { value: "part-time", label: "Part-time" },
      { value: "freelance", label: "Freelance" },
      { value: "contract", label: "Contract" },
    ],
    jobPostingDate: [
      { value: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10), label: "Last 24 hours" },
      { value: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), label: "Last 7 days" },
      { value: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10), label: "Last Month" },
    ],
  };

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleOptionSelect = (category, value, label) => {
    setSelectedOptions((prevState) => ({ ...prevState, [category]: label }));
    handleChange({ target: { value } });
    setIsDropdownOpen((prevState) => ({ ...prevState, [category]: false }));
  };

  return (
    <div className="h-[calc(100vh-2rem)] overflow-y-auto p-4 lg:pt-14 bg-slate-950 text-emerald-300">
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-4 text-emerald-500">Filters</h3>
        {Object.keys(options).map((key) => (
          <div key={key} className="border border-emerald-700 rounded-lg w-">
            <button
              onClick={() => toggleDropdown(key)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-emerald-900 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <h4 className="text-lg font-medium">{selectedOptions[key]}</h4>
              {isDropdownOpen[key] ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              className={`transition-all duration-300 overflow-hidden ${isDropdownOpen[key] ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
            >
              {options[key].map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionSelect(key, option.value, option.label)}
                  className={`cursor-pointer px-3 py-2 rounded-md transition-colors duration-300 hover:bg-emerald-800 flex items-center gap-2 ${selectedOptions[key] === option.label ? "bg-emerald-700" : ""
                    }`}
                >
                  <input
                    type="radio"
                    id={`${key}-${option.value}`}
                    name={key}
                    value={option.value}
                    checked={selectedOptions[key] === option.label}
                    readOnly
                    className="accent-emerald-500"
                  />
                  <label htmlFor={`${key}-${option.value}`} className="cursor-pointer">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
