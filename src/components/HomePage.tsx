import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/HomePage.css';
import Lottie from 'lottie-react';
import codingAnimation from './animations/coding.json'; // The coding.json file

// Import the logo
import logo from '../assets/images/image.png'; // Ensure you have placed the logo here

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
          {/* Logo Image */}
          <Box display="flex" justifyContent="center" mb={4}>
            <img src={logo} alt="Jofi - Job Finder Logo" style={{ width: '150px', height: 'auto' }} />
          </Box>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Jofi - Job Finder
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
              Your go-to platform to manage job applications, discover job offers, and track salary ranges.
            </Typography>
            <Typography variant="body1" component="p" gutterBottom>
              This application was created to simplify the job search process, allowing users to efficiently track their applications and find relevant job offers based on their skills and preferences.
            </Typography>
          </motion.div>

          {/* Button Section with hover effect */}
          <Grid container spacing={4} justifyContent="center" style={{ marginTop: '30px' }}>
            <Grid item xs={12} sm={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card className="custom-card">
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      Manage Your Job Interviews
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                      Add and track your journey to the next job.
                    </Typography>
                    <Link to="/manage-interviews">
                      <button className="button-primary">
                        Manage Job Interviews
                      </button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
              </motion.div>
            </Grid>
          </Grid>

        </Container>
      </div>
    </>
  );
};

export default HomePage;
