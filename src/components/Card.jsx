import { FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ data }) => {
  const {
    companyLogo,
    jobTitle,
    companyName,
    jobLocation,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    jobUrl,
  } = data;

  return (
    <div className="w-full lg:w-[85%] mx-auto py-4">
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg transition-shadow duration-300 p-6 border border-gray-700 overflow-hidden group hover:shadow-xl">
        {/* Frosted Glass Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-transparent to-teal-600/20 opacity-0 group-hover:opacity-100 backdrop-blur-md rounded-xl transition-opacity duration-500 pointer-events-none"></div>

        <Link
          className="relative flex flex-col sm:flex-row gap-2 lg:gap-6 items-start w-full group"
          to={jobUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Company Logo */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-white p-3 border border-gray-700 shadow-md">
            <img
              src={companyLogo}
              alt={companyName}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Job Details */}
          <div className="flex-grow space-y-1">
            {/* Title and Salary Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-500 transition-colors">
                  {jobTitle}
                </h3>
                <h4 className="text-sm text-gray-400 font-medium">{companyName}</h4>
              </div>

              {/* Salary Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-gray-900 font-medium text-sm border border-gray-600 shadow-sm">
                ₹{minPrice} - {maxPrice} LPA
              </div>
            </div>

            {/* Job Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-emerald-400" />
                <span>{jobLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-emerald-400" />
                <span>{employmentType}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-emerald-400" />
                <span>Posted: {postingDate}</span>
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="flex-shrink-0 mt-4 sm:mt-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(jobUrl, "_blank", "noopener,noreferrer");
              }}
              className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
