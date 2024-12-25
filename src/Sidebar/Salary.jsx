import React, { useState } from "react";
import { ChevronDown, ChevronUp, DollarSign } from "lucide-react";

const Salary = ({ handleChange = () => { }, handleClick = () => { } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSalaryType, setSelectedSalaryType] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");

  const salaryTypes = [
    { value: "", label: "Any" },
    { value: "hourly", label: "Hourly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const salaryRanges = [
    { value: "", label: "Any" },
    { value: "30", label: "< 30,000" },
    { value: "50", label: "< 50,000" },
    { value: "80", label: "< 80,000" },
    { value: "100", label: "< 100,000" },
  ];

  const handleSalaryTypeSelect = (value) => {
    setSelectedSalaryType(value);
    handleClick({ target: { value } });
  };

  const handleSalaryRangeSelect = (value) => {
    setSelectedSalaryRange(value);
    handleChange({ target: { value } });
    setIsOpen(false);
  };

  return (
    <div className="border rounded-lg w-full">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-gray-500" />
          <h4 className="text-lg font-medium">Salary</h4>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <span className="text-gray-600 text-sm">
              {salaryTypes.find((type) => type.value === selectedSalaryType)?.label || "Type"}
            </span>
            <span className="text-gray-600 text-sm">
              {salaryRanges.find((range) => range.value === selectedSalaryRange)?.label || "Range"}
            </span>
          </div>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </button>

      {/* Dropdown Content */}
      <div
        className={`
          grid grid-cols-2 gap-4 px-4 pb-4 overflow-hidden transition-all duration-300 
          ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}
        `}
      >
        {/* Salary Type Section */}
        <div>
          <h5 className="text-md font-semibold mb-2">Salary Type</h5>
          {salaryTypes.map((type) => (
            <div
              key={type.value}
              onClick={() => handleSalaryTypeSelect(type.value)}
              className={`
                cursor-pointer px-3 py-2 rounded-md transition-colors 
                ${selectedSalaryType === type.value
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"}
              `}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value={type.value}
                  checked={selectedSalaryType === type.value}
                  onChange={() => handleSalaryTypeSelect(type.value)}
                  className="hidden"
                />
                <span
                  className={`
                    w-4 h-4 border rounded-full flex items-center justify-center
                    ${selectedSalaryType === type.value
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300"}
                  `}
                >
                  {selectedSalaryType === type.value && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                <span>{type.label}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Salary Range Section */}
        <div>
          <h5 className="text-md font-semibold mb-2">Salary Range</h5>
          {salaryRanges.map((range) => (
            <div
              key={range.value}
              onClick={() => handleSalaryRangeSelect(range.value)}
              className={`
                cursor-pointer px-3 py-2 rounded-md transition-colors 
                ${selectedSalaryRange === range.value
                  ? "bg-blue-50 text-blue-600"
                  : "hover:bg-gray-100"}
              `}
            >
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value={range.value}
                  checked={selectedSalaryRange === range.value}
                  onChange={() => handleSalaryRangeSelect(range.value)}
                  className="hidden"
                />
                <span
                  className={`
                    w-4 h-4 border rounded-full flex items-center justify-center
                    ${selectedSalaryRange === range.value
                      ? "bg-blue-600 border-blue-600"
                      : "border-gray-300"}
                  `}
                >
                  {selectedSalaryRange === range.value && (
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  )}
                </span>
                <span>{range.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Salary;
