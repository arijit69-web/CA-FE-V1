import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Jobs from "./Jobs";
import Card from "../components/Card";
import { FiMapPin, FiSearch, FiBriefcase, FiMenu, FiX } from "react-icons/fi";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v1/jobs/all-jobs`)
      .then((res) => res.json())
      .then((response) => {
        if (response.success && Array.isArray(response.data)) {
          setJobs(response.data);
        } else {
          setJobs([]);
          console.error("Unexpected data format:", response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setIsLoading(false);
      });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocationQuery(event.target.value);
  };

  const filteredItems = jobs.filter((job) => {
    const titleMatch = job.jobTitle.toLowerCase().includes(query.toLowerCase());
    const locationMatch = job.jobLocation.toLowerCase().includes(locationQuery.toLowerCase());

    if (!query && !locationQuery) return true;
    if (query && !locationQuery) return titleMatch;
    if (!query && locationQuery) return locationMatch;
    return titleMatch && locationMatch;
  });

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query || locationQuery) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          experienceLevel,
          maxPrice,
          postingDate,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          postingDate === selected ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div className="flex flex-col h-screen bg-gray-50 sm:pt-[1%]  md:pt-[3%] lg:pt-[5vh]  xl:pt-[5vh]">
      {/* Content Section */}
      <div className="flex-grow flex overflow-hidden xl:pt-[0vh] lg:pt-[0%]">
        {/* Sidebar */}
        <div
          className={`fixed  sm:top-0 md:top-5 lg:top-2 xl:pt:0 left-0 h-full bg-white shadow-lg z-20 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } sm:relative sm:translate-x-0 sm:w-1/4`}
        >
          <div className="relative p-4 pt-20 flex justify-end items-end sm:hidden">

            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
          <Sidebar
            handleChange={handleChange}
            handleClick={handleClick}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>

        {/* Jobs Section */}
        <div className="flex-1 pt-14 sm:pt-14 md:pt-8 lg:pt-4  flex flex-col">
          <div className="bg-white shadow-sm p-4">
            <div className="flex flex-row gap-2 items-center">
              {/* Sidebar Toggle */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 bg-gray-100 rounded-lg sm:hidden"
              >
                <FiMenu size={24} />
              </button>
              {/* Search Section */}
              <form className="flex flex-row gap-2  lg:w-[70%] ">
                <div className="flex-1 relative">
                  <div className="absolute  inset-y-0 left-3 flex items-center pointer-events-none">
                    <FiBriefcase className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-500 transition-all text-gray-700 placeholder-gray-400"
                    placeholder="Search job title.."
                    onChange={handleInputChange}
                    value={query}
                  />
                </div>
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <FiMapPin className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-green-500 transition-all text-gray-700 placeholder-gray-400"
                    placeholder="Location..."
                    onChange={handleLocationChange}
                    value={locationQuery}
                  />
                </div>
              </form>
              {/* Available Jobs Text */}
              <div className="text-gray-600 text-sm whitespace-nowrap">
                {isLoading ? "Loading jobs..." : `${filteredItems.length} Jobs`}
              </div>
            </div>
          </div>
          {/* job cards */}
          {isLoading ? (
            <div className="flex-grow flex justify-between items-center">
              <div className="loading-spinner"></div>
            </div>
          ) : result.length > 0 ? (
            <div className="flex-grow  w-[100%] overflow-y-auto ">
              <div className="space-y-4">
                <Jobs result={result} />
              </div>
            </div>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <div className="max-w-md text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Jobs Found
                </h3>
                <p className="text-gray-600">
                  We couldn't find any jobs matching your search criteria. Try adjusting your filters or search terms.
                </p>
              </div>
            </div>
          )}

          {/* Pagination */}
          <div className="bg-white shadow-sm p-2 flex justify-center items-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600 px-4">
              Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
