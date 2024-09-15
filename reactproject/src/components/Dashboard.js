import { Button, Card, CardContent, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';


const Dashboard = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Button startIcon={<AddIcon />} variant="outlined" fullWidth>
                New Form
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {/* Map through existing forms here */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Delivery</Typography>
              <Typography>Submitted: 10</Typography>
              <Typography>Viewed: 55</Typography>
              <Typography>Date Published: 08/24/2024</Typography>
              <Button variant="contained" color="primary" fullWidth>
                View Submission
              </Button>
              <Button variant="outlined" color="secondary" fullWidth>
                Edit
              </Button>
              <Button variant="outlined" color="error" fullWidth>
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
