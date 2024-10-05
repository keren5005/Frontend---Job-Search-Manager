import React, { useState, useEffect } from 'react';
import JobForm from './JobForm';     // Adjust the import path
import JobList from './JobList';     // Adjust the import path
import JobFilter from './JobFilter'; // Adjust the import path

type Job = {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  dateApplied: string;
  notes?: string;
};

const JobManager = () => {
  const [jobs, setJobs] = useState<Job[]>([]); // Array of job applications
  const [filterStatus, setFilterStatus] = useState<string>(''); // Status filter

  // Use localStorage to persist jobs
  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  // Add a new job to the list
  const addJob = (job: Job) => {
    setJobs([...jobs, job]);
  };

  // Delete a job by its ID
  const deleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  // Handle filtering the jobs by status
  const handleFilter = (status: string) => {
    setFilterStatus(status);
  };

  // Filter the jobs based on the selected status
  const filteredJobs = filterStatus
    ? jobs.filter((job) => job.status === filterStatus)
    : jobs;

  return (
    <div className="container mt-5">
      <h2>Manage Your Job Applications</h2>

      {/* JobForm to add new jobs */}
      <JobForm
        onAddJob={(job: Omit<Job, 'id'>) => {
          addJob({ id: Date.now(), ...job }); // Assign a unique ID to each job
        }}
      />

      {/* JobFilter to filter jobs by status */}
      <JobFilter onFilter={handleFilter} />

      {/* JobList to display jobs and delete them */}
      <JobList jobs={filteredJobs} onDeleteJob={deleteJob} />
    </div>
  );
};

export default JobManager;
