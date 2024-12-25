import React, { useState } from "react";
import InputField from "../components/InputField";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

const JobPostingData = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Date calculations
  const now = new Date();
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div className="border rounded-lg">
      {/* Dropdown Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-gray-500" />
          <h4 className="text-lg font-medium">Date of posting</h4>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>

      {/* Dropdown Content */}
      <div
        className={`px-4 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
      >
        <InputField
          handleChange={handleChange}
          title="All time"
          value=""
          name="postingDate"
        />
        <InputField
          handleChange={handleChange}
          title="Last 24 hours"
          value={twentyFourHoursAgoDate}
          name="postingDate"
        />
        <InputField
          handleChange={handleChange}
          title="Last 7 days"
          value={sevenDaysAgoDate}
          name="postingDate"
        />
        <InputField
          handleChange={handleChange}
          title="Last Month"
          value={thirtyDaysAgoDate}
          name="postingDate"
        />
      </div>
    </div>
  );
};

export default JobPostingData;
