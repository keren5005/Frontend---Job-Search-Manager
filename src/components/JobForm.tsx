import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';

type JobFormProps = {
  onAddJob: (job: Omit<Job, 'id'>) => void; // Function prop to pass job data to parent component
};

type Job = {
  id: number;
  title: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  dateApplied: string;
  notes?: string;
};

const JobForm: React.FC<JobFormProps> = ({ onAddJob }) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [status, setStatus] = useState<'Applied' | 'Interview' | 'Offer' | 'Rejected'>('Applied');
  const [dateApplied, setDateApplied] = useState('');
  const [notes, setNotes] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Pass the form data up to the parent component
    onAddJob({
      title,
      company,
      status,
      dateApplied,
      notes,
    });

    // Clear form fields after submission
    setTitle('');
    setCompany('');
    setStatus('Applied');
    setDateApplied('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Company"
            variant="outlined"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            select
            label="Status"
            variant="outlined"
            value={status}
            onChange={(e) => setStatus(e.target.value as 'Applied' | 'Interview' | 'Offer' | 'Rejected')}
            required
          >
            <MenuItem value="Applied">Applied</MenuItem>
            <MenuItem value="Interview">Interview</MenuItem>
            <MenuItem value="Offer">Offer</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Date Applied"
            type="date"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={dateApplied}
            onChange={(e) => setDateApplied(e.target.value)}
            required
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Notes"
            variant="outlined"
            multiline
            rows={4}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Add Job
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default JobForm;
