import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({ data }) => {
  const {
    _id,
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
    <div className="w-full lg:w-[70%] p">
      <section className="card   bg-white rounded-lg  shadow-sm p-1 flex flex-col sm:flex-row ">
        <Link className="flex flex-col sm:flex-row gap-4 items-start w-full">
          {/* Logo */}
          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
            <img
              src={companyLogo}
              alt={jobTitle}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Job Details */}
          <div className="flex-grow flex flex-col">
            <h4 className="text-primary mb-1 font-medium">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin /> {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {employmentType}
              </span>
              <span className="flex items-center gap-2 font-bold">
                &#8377; {minPrice - { maxPrice }}
              </span>
              {postingDate && (
                <span className="flex items-center gap-2">
                  <FiCalendar /> {postingDate}
                </span>
              )}

            </div>
          </div>
          {/* Apply Button */}
          <div className="flex-shrink-0 mt-0 sm:mt-0">
            <button
              onClick={() => window.open(jobUrl, "_blank", "noopener,noreferrer")}
              className="inline-flex items-center text-white bg-zinc-700 hover:bg- px-4 py-2 rounded-md text-center"
            >
              <FaExternalLinkAlt className="mr-2" />
              Apply
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;
