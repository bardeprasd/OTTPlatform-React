import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Hbody: React.FC = () => {
  return (
    // Outer container with a black background, flex layout, and top/bottom borders
    <div style={{ background: '#000', width: '100%', minHeight: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '10px solid #888', borderBottom:'10px solid #888' }}>
      {/* Inner container with flex layout, max width, and black background */}
      <Container sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1100px', alignItems: 'center', width: '100%', background: '#000' }}>
        {/* Left side paper with white text, width, and padding */}
        <Paper sx={{ fontSize: '1.4rem', color: '#fff', width: '50%', padding: '0 3rem 0 0', background: '#000' }}>
          {/* Heading */}
          <Typography variant="h2">Enjoy on your TV.</Typography>
          {/* Description */}
          <Typography variant="body1">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </Typography>
        </Paper>
        {/* Right side box with a black background, relative position, and top margin */}
        <Box sx={{ position: 'relative', maxWidth: '50%', background: '#000' ,marginTop:'30px'}}>
          {/* Image layout */}
          <img id="tv-layout" src='/tv.png' alt="tv-layout" style={{ border: '0', height: 'auto', maxWidth: '100%' }} />

          {/* Video overlay */}
          <video autoPlay loop muted id="tv-animation" src='/TV.mp4' style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: 'auto' }}></video>
        </Box>
      </Container>
    </div>
  );
};

export default Hbody;
