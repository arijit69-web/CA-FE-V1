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
      <div className="relative bg-gray-100 rounded-xl shadow-lg transition-shadow duration-300 p-6 border border-gray-200 overflow-hidden group hover:shadow-xl">
        {/* Frosted Glass Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-200 opacity-0 group-hover:opacity-100 backdrop-blur-md rounded-xl transition-opacity duration-500 pointer-events-none"></div>

        <Link
          className="relative flex flex-col sm:flex-row gap-2 lg:gap-6 items-start w-full group"
          to={jobUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Company Logo */}
          <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-white p-3 border border-gray-300 shadow-sm">
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
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors">
                  {jobTitle}
                </h3>
                <h4 className="text-sm text-gray-500 font-medium">{companyName}</h4>
              </div>

              {/* Salary Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-emerald-800 to-teal-900 text-white font-medium text-sm border border-gray-300 shadow-sm">
                ₹{minPrice} - {maxPrice} LPA
              </div>
            </div>

            {/* Job Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-slate-900" />
                <span>{jobLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-slate-900" />
                <span>{employmentType}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiCalendar className="text-slate-900" />
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
              className="group relative px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
