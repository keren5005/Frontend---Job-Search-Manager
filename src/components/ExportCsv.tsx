import React from 'react';
import { Parser } from 'json2csv';

type Job = {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  dateApplied: string;
  notes?: string;
};


type ExportCsvProps = {
  jobApplications: Job[];
};

const ExportCsv: React.FC<ExportCsvProps> = ({ jobApplications }) => {
  const exportToCsv = () => {
    const fields = ['title', 'company', 'status', 'dateApplied', 'notes'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(jobApplications);

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'job-applications.csv');
    link.click();
  };

  return <button onClick={exportToCsv}>Export to CSV</button>;
};

export default ExportCsv;
