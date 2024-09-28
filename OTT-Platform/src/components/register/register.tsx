// Importing necessary React hooks, components, and styles
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import bannerImage12 from '../../images/banner.png';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Functional component for the registration form
const RegistrationForm = () => {
  // State to manage registration error messages
  const [registrationError, setRegistrationError] = useState<string | null>(null);

  // Formik hook for form handling and validation
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        // Creating an authentication instance
        const auth = getAuth();
        // Creating a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        // Accessing the user information from the user credential
        const user = userCredential.user;

        //  can perform additional actions after successful registration

        console.log('User registration successful:', user);

        // Alert message on successful registration
        alert('Registration successful!');
      } catch (error: any) {
        // Handle registration errors
        console.error('Firebase Authentication Error:', error);
        setRegistrationError(error.message);
      }
    },
  });

  // Rendering the registration form component
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${bannerImage12})`,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        
         
      }}
    >
      <div
        style={{
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          width: '300px',
          textAlign: 'center',
        }}
      >
        <form onSubmit={formik.handleSubmit} >
          {/* Registration form header */}
          <h4 style={{ fontSize: '30px' ,color:'white' }}>Register</h4>
          
          {/* Email input field */}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            style={{ marginBottom: '10px', borderRadius: '5px' , backgroundColor:'#A9A9A9' }}
            // InputProps={{
            //   style: { color: 'black' },
            // }}
          />

          {/* Password input field */}
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            type="password"
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            style={{ marginBottom: '10px', borderRadius: '5px', backgroundColor:'#A9A9A9' }}
            // InputProps={{
            //   style: { color: 'black' },
            // }}
          />

          {/* Confirm password input field */}
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            margin="normal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            style={{ marginBottom: '10px', borderRadius: '5px', backgroundColor:'#A9A9A9' }}
            // InputProps={{
            //   style: { color: 'black' },
            // }}
          />

          {/* Submit button for registration */}
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: '#E50914',
              color: 'white',
              marginRight: '10px',
            }}
          >
            Register
          </Button>

          {/* Display registration error, if any */}
          {registrationError && (
            <p style={{ color: 'red' }}>{registrationError}</p>
          )}

          {/* Link to login page for existing users */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" style={{ color: '#E50914', marginTop:'5px' }}>
              Already have an account?
            </Button>
          </Link>
        </form>
      </div>
    </Box>
  );
};

// Exporting the registration form component
export default RegistrationForm;
