import React, { useState } from 'react';
import axios from 'axios';
import '../styles/JobOffers.css'; // Import the CSS file

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  url: string;
};

const JobOffers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchQuery, setSearchQuery] = useState('developer');
  const [filterLocation, setFilterLocation] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAdzunaJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1`,
        {
          params: {
            app_id: '6d4aef15',
            app_key: 'c809672957d91020285e6e6f903ffc11',
            results_per_page: 10,
            what: searchQuery,
            where: filterLocation,
          },
        }
      );
      const jobs = response.data.results;
      setJobs(
        jobs.map((job: any) => ({
          id: job.id,
          title: job.title,
          company: job.company.display_name,
          location: job.location.display_name,
          url: job.redirect_url,
        }))
      );
    } catch (error) {
      console.error('Error fetching Adzuna jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAdzunaJobs();
  };

  return (
    <div className="job-offers-container">
      <h2 className="job-offers-title">Job Offers</h2>

      {/* Search and Filter Form */}
      <form onSubmit={handleSearch} className="job-search-form">
        <input
          type="text"
          placeholder="Search by job title or keyword"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading Indicator */}
      {loading && <p className="loading-message">Loading jobs...</p>}

      {/* Display Jobs */}
      {!loading && jobs.length > 0 ? (
        <ul className="job-list">
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <a href={job.url} target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No jobs found. Try a different search.</p>
      )}
    </div>
  );
};

export default JobOffers;
