import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

const EmploymentType = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  const employmentTypes = [
    { value: '', label: 'Any' },
    { value: 'full-time', label: 'Full-time' },
    { value: 'temporary', label: 'Temporary' },
    { value: 'part-time', label: 'Part-time' },
  ];

  const handleTypeSelect = (value) => {
    setSelectedType(value);
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
          <Briefcase className="h-5 w-5 text-gray-500" />
          <h4 className="text-lg font-medium">Employment Type</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">
            {employmentTypes.find(type => type.value === selectedType)?.label || 'Any'}
          </span>
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
          px-4 pb-4 space-y-2 overflow-hidden transition-all duration-300 
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {employmentTypes.map((type) => (
          <div
            key={type.value}
            onClick={() => handleTypeSelect(type.value)}
            className={`
              cursor-pointer px-3 py-2 rounded-md transition-colors 
              ${selectedType === type.value
                ? 'bg-blue-50 text-blue-600'
                : 'hover:bg-gray-100'}
            `}
          >
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={type.value}
                checked={selectedType === type.value}
                onChange={() => handleTypeSelect(type.value)}
                className="hidden"
              />
              <span
                className={`
                  w-4 h-4 border rounded-full flex items-center justify-center
                  ${selectedType === type.value
                    ? 'bg-blue-600 border-blue-600'
                    : 'border-gray-300'}
                `}
              >
                {selectedType === type.value && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </span>
              <span>{type.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmploymentType;