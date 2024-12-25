import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Jobs from "./Jobs";
import Card from "../components/Card";
import Newsletter from "../components/Newsletter";
import { FiMapPin, FiSearch, FiBriefcase } from "react-icons/fi";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]); // Initialize as an empty array

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch job data from API
  useEffect(() => {
    setIsLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v1/jobs/all-jobs`)
      .then((res) => res.json())
      .then((response) => {
        console.log("API response:", response); // Log the response to confirm the structure
        if (response.success && Array.isArray(response.data)) {
          setJobs(response.data); // Set jobs as an array of job objects
        } else {
          setJobs([]); // Fallback to empty array if data is invalid
          console.error("Unexpected data format:", response);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setJobs([]); // Fallback to empty array on error
        setIsLoading(false);
      });
  }, []);

  // Input Filter for searching jobs
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = jobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  // Radio Filtering (by selected category)
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button Filtering (by selected category)
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Pagination logic
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

    // Apply input filter
    if (query) {
      filteredJobs = filteredItems;
    }

    // Apply selected category filter
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
    <div className="container mx-auto px-4 pb-26">
      {/* Job Search Bar */}
      <div className="sticky right-16 mt-12 w-full md:w-3/5 ml-[21%] max-w-4xl mx-auto mb-6">
        <form className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Job search input */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FiBriefcase className="text-gray-400 group-hover:text-green transition-colors" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-200 focus:border-green focus:ring-1 focus:ring-green transition-all"
                placeholder="Job title or keywords"
                onChange={handleInputChange}
                value={query}
              />
            </div>

            {/* Location input */}
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400 group-hover:text-green transition-colors" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-200 focus:border-green focus:ring-1 focus:ring-green transition-all"
                placeholder="Location"
              />
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="bg-green text-white px-8 py-3 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FiSearch className="w-5 h-5" />
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-3">


        {/* Jobs Section */}
        <div className="w-full md:w-2/3 space-y-1 md:fixed left-0 md:left-[25%] top-[137px] h-[60vh]">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <div className="loading-spinner"></div>
            </div>
          ) : result.length > 0 ? (
            <>
              <div className="bg-white p-4 rounded shadow-md">
                <div className="max-h-[78vh] overflow-auto">
                  <Jobs result={result} />
                  {/* Pagination */}
                  <div className="flex justify-center items-center space-x-4 bg-white p-1 rounded shadow-md">
                    <button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="disabled:opacity-50 hover:underline"
                    >
                      Previous
                    </button>
                    <span>
                      Page {currentPage} of{" "}
                      {Math.ceil(filteredItems.length / itemsPerPage)}
                    </span>
                    <button
                      onClick={nextPage}
                      disabled={
                        currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                      }
                      className="disabled:opacity-50 hover:underline"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-4 rounded shadow-md">
              <h3 className="text-lg font-bold mb-2">Jobs</h3>
              <p>No jobs found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
