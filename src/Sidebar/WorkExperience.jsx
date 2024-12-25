import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WorkExperience = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState('Any experience');

  const experienceOptions = [
    { value: '', label: 'Any experience' },
    { value: 'Internship', label: 'Internship' },
    { value: 'Work remotely', label: 'Work remotely' },
  ];

  const handleSelect = (value, label) => {
    setSelectedExperience(label);
    handleChange({ target: { value } }); // Trigger the parent's change handler
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="border rounded-lg w-full">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <h4 className="text-lg font-medium">{selectedExperience}</h4>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Dropdown Content */}
      <div
        className={`
          flex flex-col gap-2 px-4 pb-4 transition-all duration-300 overflow-hidden 
          ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
        `}
      >
        {experienceOptions.map((option) => (
          <div
            key={option.value}
            onClick={() => handleSelect(option.value, option.label)}
            className={`
              cursor-pointer px-3 py-2 rounded-md transition-colors
              ${selectedExperience === option.label
                ? 'bg-blue-50 text-blue-600'
                : 'hover:bg-gray-100'}
            `}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={option.value}
                checked={selectedExperience === option.label}
                onChange={() => handleSelect(option.value, option.label)}
                className="hidden"
              />
              <span
                className={`
                  w-4 h-4 border rounded-full flex items-center justify-center
                  ${selectedExperience === option.label
                    ? 'bg-blue-600 border-blue-600'
                    : 'border-gray-300'}
                `}
              >
                {selectedExperience === option.label && (
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

export default WorkExperience;
