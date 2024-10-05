import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const HomePage = () => {
  const heroSectionStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '80px 20px',
    background: 'linear-gradient(120deg, #2980b9, #6dd5fa)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100vh',
  };

  const gifSectionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '50px',
    flexWrap: 'wrap',
  };

  const gifStyle: React.CSSProperties = {
    width: '200px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '15px 30px',
    backgroundColor: '#ffcc00',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    color: 'black',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#2980b9',
    color: 'white',
  };

  const navLinkStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
  };

  return (
    <div style={heroSectionStyle}>
      {/* Navigation bar */}
      <nav style={navStyle}>
        <a href="/" style={navLinkStyle}>Home</a>
        <a href="/manage" style={navLinkStyle}>Manage Jobs</a>
        <a href="/job-offers" style={navLinkStyle}>Job Offers</a>
        <a href="/salary-range" style={navLinkStyle}>Salary Range</a> {/* New Link */}
      </nav>

      {/* Hero content */}
      <h1>Welcome to Job Search Manager</h1>
      <p>Track your applications and take control of your job search.</p>

      {/* GIF section */}
      <div style={gifSectionStyle}>
        <img
          src="https://media0.giphy.com/media/RiykPw9tgdOylwFgUe/200w.gif?cid=6c09b952t1ayg7h2qqr0imnnodlif3fqaos54mljgjdivx35&ep=v1_gifs_search&rid=200w.gif&ct=g"
          alt="Productivity GIF"
          style={gifStyle}
        />
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjRsemk3eG9yandtZDJheGQ4djFxcWIwaGQ0cGlmZ3NpOHY5d3kzZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UzPjxxHJC8uZUzW6U6/giphy.webp"
          alt="Success GIF"
          style={gifStyle}
        />
      </div>

      {/* Call to action buttons */}
      <Link to="/job-offers">
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff9900'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffcc00'}
        >
          View Job Offers
        </button>
      </Link>

      <Link to="/salary-range">
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff9900'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffcc00'}
        >
          Search by Salary Range
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
