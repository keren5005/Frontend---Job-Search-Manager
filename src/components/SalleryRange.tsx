import React, { useState } from 'react';
import axios from 'axios';

type SalaryResult = {
  salary_min: number;
  salary_max: number;
};

const SalaryRange = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState<SalaryResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSalaryRange = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/us/search/1`, // Adjust to your region if needed
        {
          params: {
            app_id: '6d4aef15', // Replace with your Adzuna App ID
            app_key: 'c809672957d91020285e6e6f903ffc11', // Replace with your Adzuna API Key
            what: jobTitle,
            where: location,
            sort_by: 'salary', // Fetching the jobs sorted by salary to get an idea of the range
            results_per_page: 1, // Limiting the results, can be adjusted based on your needs
          },
        }
      );

      if (response.data && response.data.results && response.data.results.length > 0) {
        const result = response.data.results[0];
        setSalaryRange({
          salary_min: result.salary_min || 0,
          salary_max: result.salary_max || 0,
        });
      } else {
        setError('No salary data available for the given job title and location.');
      }
    } catch (err) {
      console.error('Error fetching salary data:', err);
      setError('Failed to fetch salary data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchSalaryRange();
  };

  return (
    <div>
      <h2>Salary Range Estimator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Job Title:
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title (e.g., developer, engineer)"
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location (e.g., San Francisco, CA)"
            />
          </label>
        </div>
        <button type="submit">Get Salary Range</button>
      </form>

      {loading && <p>Loading salary data...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {salaryRange && (
        <div>
          <h3>Estimated Salary Range:</h3>
          <p>
            ${salaryRange.salary_min.toLocaleString()} - $
            {salaryRange.salary_max.toLocaleString()} per year
          </p>
        </div>
      )}
    </div>
  );
};

export default SalaryRange;
