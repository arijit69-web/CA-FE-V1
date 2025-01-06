import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Jobs from "./Jobs";
import Card from "../components/Card";
import { FiMapPin, FiSearch, FiBriefcase, FiMenu, FiX } from "react-icons/fi";
import './Home.css'

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content Container */}
      <div className="flex flex-col h-screen pt-4 lg:pt-6">
        {/* Content Section */}
        <div className="flex-grow flex overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed sm:top-0 md:top-5 lg:top-2 left-0 h-full bg-gray-900 border-r border-emerald-500/20 shadow-xl z-20 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
              } sm:relative sm:translate-x-0 sm:w-1/4`}
          >
            <div className="relative p-4 pt-20 flex justify-end items-end sm:hidden">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
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
          <div className="flex-1  pt-11 sm:pt-14 md:pt-8 lg:pt-9 flex flex-col">
            {/* Search Bar Section */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl mx-1 py-4 px-2 lg:p-6 shadow-lg">
              <div className="flex flex-row gap-1 items-center justify-evenly">
                {/* Sidebar Toggle */}
                <button
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg sm:hidden transition-colors"
                >
                  <FiMenu size={24} className="text-emerald-400" />
                </button>

                {/* Search Form */}
                <form className="flex flex-1 flex-row gap-1 lg:w-[70%]">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
                      <FiBriefcase className="w-5 h-5 text-emerald-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-emerald-500/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all text-gray-100 placeholder-gray-400 text-sm"
                      placeholder="Search job title..."
                      onChange={handleInputChange}
                      value={query}
                    />
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <FiMapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 border border-emerald-500/20 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all text-gray-100 placeholder-gray-400 text-sm"
                      placeholder="Location..."
                      onChange={handleLocationChange}
                      value={locationQuery}
                    />
                  </div>
                </form>

                {/* Job Count */}
                <div className="text-emerald-400 text-sm font-medium whitespace-nowrap">
                  {isLoading ? "Loading jobs..." : `${filteredItems.length} Jobs`}
                </div>
              </div>
            </div>

            {/* Results Section */}
            {isLoading ? (
              <div className="flex-grow flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              </div>
            ) : result.length > 0 ? (
              <div className="flex-grow w-full overflow-y-auto px-4">
                <div className="space-y-8 py-6">
                  <Jobs result={result} />
                </div>
              </div>
            ) : (
              <div className="flex-grow flex items-center justify-center px-4">
                <div className="max-w-md text-center p-8 bg-gray-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                    No Jobs Found
                  </h3>
                  <p className="text-gray-300">
                    We couldn't find any jobs matching your search criteria. Try adjusting your filters or search terms.
                  </p>
                </div>
              </div>
            )}

            {/* Pagination */}
            <div className="  mb-1 p-2 flex justify-center items-center gap-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 text-sm font-medium text-emerald-400 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-emerald-500/20"
              >
                Previous
              </button>
              <span className="text-sm text-emerald-400 font-medium">
                Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                className="px-4 py-2 text-sm font-medium text-emerald-400 bg-gray-800 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-emerald-500/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


};

export default Home;
