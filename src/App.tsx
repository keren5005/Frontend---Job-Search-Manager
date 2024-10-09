import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Import HomePage
import JobManager from './components/JobManager'; // Import JobManager
import JobOffers from './components/JobOffers'; // Import JobOffers
import SalleryRange from './components/SalleryRange'; // Import SalleryRange
import JobSearchTips from './components/JobSearchTips'; // Import JobSearchTips

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for the job manager page */}
        <Route path="/manage" element={<JobManager />} />

        {/* Route for the job offers page */}
        <Route path="/job-offers" element={<JobOffers />} />

        {/* Route for the salary range page */}
        <Route path="/salary-range" element={<SalleryRange />} />

        {/* Route for the job search tips page */}
        <Route path="/job-search-tips" element={<JobSearchTips />} />
      </Routes>
    </Router>
  );
};

export default App;
