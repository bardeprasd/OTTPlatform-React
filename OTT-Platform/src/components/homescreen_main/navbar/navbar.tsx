import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import SearchBar from './search_bar';

// Interface defining the props for Navbar_Internal component
interface NavbarProps {
  onSearch: (query: string) => void;
}

// Navbar_Internal component
const Navbar_Internal: React.FC<NavbarProps> = ({ onSearch }) => {
  // State to manage whether to show a transparent or black background for the navbar
  const [show, handelShow] = useState(false);
  console.log("the give data for the given show   " , show)

  // Function to handle the transition effect of the navbar based on scroll position
  const transiNavbar = () => {
    if (window.scrollY > 100) {
      handelShow(true);
    } else {
      handelShow(false);
    }
  };

  // useEffect to add and remove event listener for scroll on mount and unmount
  useEffect(() => {
    window.addEventListener('scroll', transiNavbar);
    return () => {
      window.removeEventListener('scroll', transiNavbar);
    };
  }, [show]);

  return (
    <div className="Nav">
      <div className="Header">
        {/* Box for MUI styling */}
        <Box sx={{ flexGrow: 1 }}>
          {/* AppBar component for the main navbar */}
          <AppBar
            position="fixed"
            style={{
              backgroundColor: show ? 'black' : 'transparent',
              boxShadow: 'none',
            }}
          >
            {/* Toolbar component containing navbar content */}
            <Toolbar>
              {/* Netflix logo */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                  alt="Netflix Logo"
                  style={{ width: '130px', height: '38px', marginTop: '10px' }}
                />
              </Typography>
              {/* SearchBar component for search functionality */}
              <SearchBar onSearch={onSearch} />
              {/* Avatar image */}
              <img
                style={{ height: '40px', width: '40px', position: 'fixed', right: '20px' }}
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
              />
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </div>
  );
};

export default Navbar_Internal;
