type Job = {
    id: number;
    title: string;
    company: string;
    status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
    dateApplied: string;
    notes?: string;
  };
  
  type JobListProps = {
    jobs: Job[];
    onDeleteJob: (id: number) => void;  // Callback to delete job
  };
  
  const JobList: React.FC<JobListProps> = ({ jobs, onDeleteJob }) => {
    return (
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h3>{job.title} at {job.company}</h3>
            <p>Status: {job.status}</p>
            <p>Date Applied: {job.dateApplied}</p>
            {job.notes && <p>Notes: {job.notes}</p>}
            <button onClick={() => onDeleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default JobList;
  