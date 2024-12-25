import { FiCalendar, FiClock, FiDollarSign, FiMapPin, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { _id, companyLogo, jobTitle, companyName, jobLocation, employmentType, minPrice, maxPrice, postingDate, jobUrl } = data;

  return (
    <div>
      <section className="card">
        <Link className=" flex gap-4 flex-col sm:flex-row items-start">
          <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden">
            <img src={companyLogo} alt={jobTitle} className="w-full h-full object-contain" />
          </div>
          <div className="flex-grow flex flex-col">
            <h4 className="text-primary mb-1">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{jobTitle}</h3>

            <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2"><FiMapPin /> {jobLocation}</span> &nbsp;
              <span className="flex items-center gap-2"><FiClock /> {employmentType}</span>&nbsp;
              <span className="flex items-center gap-2"><b>&#8377; {minPrice}Lpa - {maxPrice}Lpa</b></span>&nbsp;
              <span className="flex items-center gap-2"><FiCalendar /> {postingDate}</span>
            </div>

            <p className="text-base text-primary/70">{""}</p>
          </div>
          <div className="flex-shrink-0 mt-2 sm:mt-0">
            <button
              onClick={() => window.open(jobUrl, "_blank", "noopener,noreferrer")}
              className="inline-block text-white bg-green hover:bg-green px-4 py-2 rounded-md text-center"
            >
              Apply
            </button>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Card;