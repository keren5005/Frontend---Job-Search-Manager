import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/HomePage.css';
import Lottie from 'lottie-react';
import codingAnimation from './animations/coding.json'; // The coding.json file

const HomePage = () => {
  return (
    <>
      {/* Navigation Toolbar with FontAwesome Icons */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Search Manager
          </Typography>
          <Button color="inherit" component={Link} to="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Button>
          <Button color="inherit" component={Link} to="/manage">
            <FontAwesomeIcon icon={faBriefcase} /> Manage Jobs
          </Button>
          <Button color="inherit" component={Link} to="/job-offers">
            <FontAwesomeIcon icon={faBriefcase} /> Job Offers
          </Button>
          <Button color="inherit" component={Link} to="/salary-range">
            <FontAwesomeIcon icon={faDollarSign} /> Salary Range
          </Button>
          <Button color="inherit" component={Link} to="/job-search-tips">
            <FontAwesomeIcon icon={faInfoCircle} /> Job Search Tips
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <div className="hero-section">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Job Search Manager
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Your go-to platform to manage job applications, discover job offers, and track salary ranges.
            </Typography>
          </motion.div>

          {/* Button Section with hover effect */}
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' }}>
            <Grid item xs={12} sm={4}>
              <Card className="custom-card">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    View Job Offers
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Explore the latest job offers tailored to your career goals.
                  </Typography>
                  <Link to="/job-offers">
                    <button className="button-primary">
                      View Job Offers
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="custom-card">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Search by Salary Range
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Find jobs based on your expected salary range.
                  </Typography>
                  <Link to="/salary-range">
                    <button className="button-primary">
                      Search by Salary Range
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="custom-card">
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Job Search Tips for Juniors
                  </Typography>
                  <Typography variant="body1" component="p" gutterBottom>
                    Learn valuable tips to boost your job search as a junior developer.
                  </Typography>
                  <Link to="/job-search-tips">
                    <button className="button-primary">
                      Job Search Tips
                    </button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Animated GIF Section */}
          <Box mt={6}>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="gif-wrapper"
            >
              <img
                src="https://media0.giphy.com/media/RiykPw9tgdOylwFgUe/200w.gif?cid=6c09b952t1ayg7h2qqr0imnnodlif3fqaos54mljgjdivx35&ep=v1_gifs_search&rid=200w.gif&ct=g"
                alt="Productivity GIF"
                className="gif-image"
              />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="gif-wrapper"
            >
              <img
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRsemk3eG9yandtZDJheGQ4djFxcWIwaGQ0cGlmZ3NpOHY5d3kzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UzPjxxHJC8uZUzW6U6/giphy.webp"
                alt="Success GIF"
                className="gif-image"
              />
            </motion.div>

            {/* Lottie Animation */}
            <Lottie animationData={codingAnimation} loop={true} className="lottie-animation" />
          </Box>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
