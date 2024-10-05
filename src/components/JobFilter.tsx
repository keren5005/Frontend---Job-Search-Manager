type JobFilterProps = {
    onFilter: (status: string) => void;  // Callback to filter jobs by status
  };
  
  const JobFilter: React.FC<JobFilterProps> = ({ onFilter }) => {
    return (
      <select onChange={(e) => onFilter(e.target.value)}>
        <option value="">All Jobs</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    );
  };
  
  export default JobFilter;
  