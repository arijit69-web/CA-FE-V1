import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchJobs = async () => {
      if (!user?.email) return;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v1/jobs/my-jobs/${user.email}`);

        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }

        const data = await response.json();

        // Check if data is successful and contains the expected job data
        if (data.success && Array.isArray(data.data)) {
          setJobs(data.data);
          setFilteredJobs(data.data);
        } else {
          setError('Invalid data format received.');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [user?.email]);

  const handleSearch = () => {
    const filtered = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URI}/api/v1/jobs/job/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error('Failed to delete job');
      }

      const data = await response.json();
      if (data.acknowledged) {
        const updatedJobs = jobs.filter((job) => job._id !== id);
        setJobs(updatedJobs);
        setFilteredJobs(updatedJobs);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 mt-20">
      <div className="my-jobs-container">
        <h1 className="text-center p-4 text-2xl font-bold">My Jobs</h1>

        <div className="search-box p-2 text-center mb-2">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search by job title..."
            type="text"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-2 rounded ml-2"
          >
            Search
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4">
            Error: {error}
          </div>
        )}

        <section className="py-1">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex md:flex-row gap-4 flex-col items-center justify-between">
                  <h3 className="font-semibold text-lg">
                    All Jobs ({filteredJobs.length})
                  </h3>
                  <Link
                    to="/post-job"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Post A New Job
                  </Link>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                {isLoading ? (
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                  </div>
                ) : (
                  <>
                    {currentJobs.length === 0 ? (
                      <div className="text-center py-8">
                        No jobs found. Try a different search term.
                      </div>
                    ) : (
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">No.</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Company</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Salary</th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {currentJobs.map((job, index) => (
                            <tr key={job._id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 text-sm">{indexOfFirstItem + index + 1}</td>
                              <td className="px-6 py-4 text-sm">{job.jobTitle}</td>
                              <td className="px-6 py-4 text-sm">{job.companyName}</td>
                              <td className="px-6 py-4 text-sm">${job.minPrice}k - ${job.maxPrice}k</td>
                              <td className="px-6 py-4 text-sm space-x-2">
                                <Link
                                  to={`/edit-job/${job._id}`}
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this job?')) {
                                      handleDelete(job._id);
                                    }
                                  }}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {!isLoading && currentJobs.length > 0 && (
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${currentPage === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${currentPage === totalPages
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MyJobs;
