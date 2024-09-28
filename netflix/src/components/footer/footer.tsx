import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';

// Define the FooterProps interface, even though it's currently empty
interface FooterProps {}

// Footer component
const Footer: React.FC<FooterProps> = () => {
  return (
    // Outer container for the footer
    <Box
      sx={{
        bgcolor: '#0b0000',
        color: '#fff',
        padding: '20px',
      }}
    >
      {/* First row of content */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {/* Contact information */}
        <Typography variant="body2" sx={{ fontSize: '14px', marginBottom: '10px' }}>
          <a href="tel:+0007009291684" style={{ textDecoration: 'none', color: '#fff' }}>
            Questions? Contact US 000-700-929-164
          </a>
        </Typography>
      </Box>

      {/* Second row of content */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: '20px', // Add margin to separate the two sections
        }}
      >
        {/* Lists of links */}
        <List sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {['FAQ','Facebook'].map((text, index) => (
            <ListItem key={index} sx={{ marginBottom: '10px', fontSize: '14px' }}>
              <a href={`#${text}`} style={{ textDecoration: 'none', color: '#fff' }}>
                {text}
              </a>
            </ListItem>
          ))}
        </List>
        <List sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[ 'Only on Netflix','Instagram'].map((text, index) => (
            <ListItem key={index} sx={{ marginBottom: '10px', fontSize: '14px' }}>
              <a href={`#${text}`} style={{ textDecoration: 'none', color: '#fff' }}>
                {text}
              </a>
            </ListItem>
          ))}
        </List>
        <List sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {[ 'Ways to watch', 'Twitter'].map((text, index) => (
            <ListItem key={index} sx={{ marginBottom: '10px', fontSize: '14px' }}>
              <a href={`#${text}`} style={{ textDecoration: 'none', color: '#fff' }}>
                {text}
              </a>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

// Export the Footer component
export default Footer;
