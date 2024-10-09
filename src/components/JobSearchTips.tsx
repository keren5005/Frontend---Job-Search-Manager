import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, Container, Grid, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';

const JobSearchTips = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  // Styles
  const categoryBoxStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f5f5f5',
    backgroundSize: 'cover',
    transition: 'background-color 0.3s ease',
    marginBottom: '15px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
  };

  const categoryIcons = {
    answers: <HelpOutlineIcon style={{ fontSize: 40 }} />,
    theory: <SchoolIcon style={{ fontSize: 40 }} />,
    coding: <CodeIcon style={{ fontSize: 40 }} />,
    projects: <BuildIcon style={{ fontSize: 40 }} />,
    interview: <WorkIcon style={{ fontSize: 40 }} />,
  };

  return (
    <Container style={{ backgroundImage: `url('path-to-background-image.jpg')`, backgroundSize: 'cover', minHeight: '100vh', padding: '50px 0' }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
        Job Search Tips for Juniors
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Category: Where to Find Answers */}
        <Grid item xs={12} sm={6}>
          <Box style={categoryBoxStyle} onClick={() => handleCategoryToggle('answers')}>
            {categoryIcons['answers']}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Where to Find Answers and Help</Typography>
          </Box>
          <Collapse in={openCategory === 'answers'}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="body1">
                  Discover the best forums and communities for finding help when you are stuck:
                </Typography>
                <div style={buttonContainerStyle}>
                  <Button href="https://stackoverflow.com" target="_blank" style={buttonStyle}>Stack Overflow</Button>
                  <Button href="https://www.geeksforgeeks.org" target="_blank" style={buttonStyle}>GeeksforGeeks</Button>
                  <Button href="https://github.com" target="_blank" style={buttonStyle}>GitHub</Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Where to Learn Theory */}
        <Grid item xs={12} sm={6}>
          <Box style={categoryBoxStyle} onClick={() => handleCategoryToggle('theory')}>
            {categoryIcons['theory']}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Where to Learn Theory</Typography>
          </Box>
          <Collapse in={openCategory === 'theory'}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="body1">
                  Gain deep theoretical knowledge by exploring these learning platforms:
                </Typography>
                <div style={buttonContainerStyle}>
                  <Button href="https://www.coursera.org" target="_blank" style={buttonStyle}>Coursera</Button>
                  <Button href="https://www.edx.org" target="_blank" style={buttonStyle}>edX</Button>
                  <Button href="https://ocw.mit.edu" target="_blank" style={buttonStyle}>MIT OpenCourseWare</Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Where to Practice Coding */}
        <Grid item xs={12} sm={6}>
          <Box style={categoryBoxStyle} onClick={() => handleCategoryToggle('coding')}>
            {categoryIcons['coding']}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Where to Practice Coding</Typography>
          </Box>
          <Collapse in={openCategory === 'coding'}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="body1">
                  Hone your coding skills with challenges and exercises:
                </Typography>
                <div style={buttonContainerStyle}>
                  <Button href="https://leetcode.com/studyplan/leetcode-75/" target="_blank" style={buttonStyle}>LeetCode 75</Button>
                  <Button href="https://www.hackerrank.com" target="_blank" style={buttonStyle}>HackerRank</Button>
                  <Button href="https://www.codewars.com" target="_blank" style={buttonStyle}>Codewars</Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: How to Build Projects */}
        <Grid item xs={12} sm={6}>
          <Box style={categoryBoxStyle} onClick={() => handleCategoryToggle('projects')}>
            {categoryIcons['projects']}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>How to Build Projects</Typography>
          </Box>
          <Collapse in={openCategory === 'projects'}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="body1">
                  Explore project-based learning platforms and build your portfolio:
                </Typography>
                <div style={buttonContainerStyle}>
                  <Button href="https://www.freecodecamp.org" target="_blank" style={buttonStyle}>FreeCodeCamp</Button>
                  <Button href="https://www.theodinproject.com" target="_blank" style={buttonStyle}>The Odin Project</Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Interview Preparation */}
        <Grid item xs={12}>
          <Box style={categoryBoxStyle} onClick={() => handleCategoryToggle('interview')}>
            {categoryIcons['interview']}
            <Typography variant="h5" style={{ marginLeft: '10px' }}>Interview Preparation</Typography>
          </Box>
          <Collapse in={openCategory === 'interview'}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="body1">
                  Prepare for interviews with these essential resources:
                </Typography>
                <div style={buttonContainerStyle}>
                  <Button href="https://github.com/AatmikJain/ComputerScienceBooks/blob/master/Cracking%20the%20Coding%20Interview.pdf" target="_blank" style={buttonStyle}>
                    Cracking the Coding Interview
                  </Button>
                  <Button href="https://github.com/careercup/CtCI-6th-Edition" target="_blank" style={buttonStyle}>
                    View Answers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobSearchTips;
