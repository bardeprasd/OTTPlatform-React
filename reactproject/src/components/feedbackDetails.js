
import React from 'react';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const FeedbackDetail = () => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h5">Generic Website Rating</Typography>
      <Typography variant="body1">Views: 40</Typography>
      <Typography variant="body1">Submitted: 3</Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Feedback 1"
            secondary="The website is user-friendly and easy to navigate."
          />
        </ListItem>
        {/* Map through feedback list */}
      </List>
    </Paper>
  );
};

export default FeedbackDetail;
