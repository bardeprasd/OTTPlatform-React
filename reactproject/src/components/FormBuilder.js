
import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import PublishIcon from '@mui/icons-material/Publish';

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  const handleAddField = (type) => {
    setFields([...fields, { type, label: '', required: false }]);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Create Feedback Form
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ border: '1px solid #ccc', padding: 2 }}>
            {fields.map((field, index) => (
              <div key={index}>
                <TextField
                  fullWidth
                  label="Field Label"
                  variant="outlined"
                  value={field.label}
                  onChange={(e) =>
                    setFields(
                      fields.map((f, i) =>
                        i === index ? { ...f, label: e.target.value } : f
                      )
                    )
                  }
                  margin="normal"
                />
                {/* Other field options like required, error messages */}
              </div>
            ))}
            <Button onClick={() => handleAddField('textarea')} variant="outlined">
              Add Text Area
            </Button>
            {/* Repeat for other field types */}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            fullWidth
            sx={{ mb: 2 }}
          >
            Save
          </Button>
          <Button variant="contained" color="success" startIcon={<PublishIcon />} fullWidth>
            Publish
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormBuilder;
