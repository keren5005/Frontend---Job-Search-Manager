import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse, Container, Grid, Box } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/JobSearchTips.css';

const JobSearchTips = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const categoryIcons = {
    answers: <HelpOutlineIcon style={{ fontSize: 40 }} />,
    theory: <SchoolIcon style={{ fontSize: 40 }} />,
    coding: <CodeIcon style={{ fontSize: 40 }} />,
    projects: <BuildIcon style={{ fontSize: 40 }} />,
    interview: <WorkIcon style={{ fontSize: 40 }} />,
  };

  return (
    <Container className="container">
      <Typography variant="h3" component="h1" gutterBottom>
        Job Search Tips for Juniors
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Category: Where to Find Answers */}
        <Grid item xs={12} sm={6}>
          <Box className="category-box" onClick={() => handleCategoryToggle('answers')}>
            {categoryIcons['answers']}
            <Typography variant="h5">Where to Find Answers and Help</Typography>
          </Box>
          <Collapse in={openCategory === 'answers'}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="body1">
                  Discover the best forums and communities for finding help when you are stuck:
                </Typography>
                <div className="button-container">
                  <Button href="https://stackoverflow.com" target="_blank" className="custom-button">
                    Stack Overflow
                  </Button>
                  <Button href="https://www.geeksforgeeks.org" target="_blank" className="custom-button">
                    GeeksforGeeks
                  </Button>
                  <Button href="https://github.com" target="_blank" className="custom-button">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Where to Learn Theory */}
        <Grid item xs={12} sm={6}>
          <Box className="category-box" onClick={() => handleCategoryToggle('theory')}>
            {categoryIcons['theory']}
            <Typography variant="h5">Where to Learn Theory</Typography>
          </Box>
          <Collapse in={openCategory === 'theory'}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="body1">
                  Gain deep theoretical knowledge by exploring these learning platforms:
                </Typography>
                <div className="button-container">
                  <Button href="https://www.coursera.org" target="_blank" className="custom-button">
                    Coursera
                  </Button>
                  <Button href="https://www.edx.org" target="_blank" className="custom-button">
                    edX
                  </Button>
                  <Button href="https://ocw.mit.edu" target="_blank" className="custom-button">
                    MIT OpenCourseWare
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Where to Practice Coding */}
        <Grid item xs={12} sm={6}>
          <Box className="category-box" onClick={() => handleCategoryToggle('coding')}>
            {categoryIcons['coding']}
            <Typography variant="h5">Where to Practice Coding</Typography>
          </Box>
          <Collapse in={openCategory === 'coding'}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="body1">
                  Hone your coding skills with challenges and exercises:
                </Typography>
                <div className="button-container">
                  <Button href="https://leetcode.com/studyplan/leetcode-75/" target="_blank" className="custom-button">
                    LeetCode 75
                  </Button>
                  <Button href="https://www.hackerrank.com" target="_blank" className="custom-button">
                    HackerRank
                  </Button>
                  <Button href="https://www.codewars.com" target="_blank" className="custom-button">
                    Codewars
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Collapse>
        </Grid>

        {/* Category: Interview Preparation */}
        <Grid item xs={12}>
          <Box className="category-box" onClick={() => handleCategoryToggle('interview')}>
            {categoryIcons['interview']}
            <Typography variant="h5">Interview Preparation</Typography>
          </Box>
          <Collapse in={openCategory === 'interview'}>
            <Card className="custom-card">
              <CardContent>
                <Typography variant="body1">
                  Prepare for interviews with these essential resources:
                </Typography>
                <div className="button-container">
                  <Button href="https://github.com/AatmikJain/ComputerScienceBooks/blob/master/Cracking%20the%20Coding%20Interview.pdf" target="_blank" className="custom-button">
                    Cracking the Coding Interview
                  </Button>
                  <Button href="https://github.com/careercup/CtCI-6th-Edition" target="_blank" className="custom-button">
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
