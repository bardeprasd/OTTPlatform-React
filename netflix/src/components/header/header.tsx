// Importing necessary React and Material-UI components, Firebase authentication modules, and styles
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import bannerImage12 from '../../images/banner.png';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Importing Firebase configuration
import firebaseConfig from '../authentication/firebase';

// Creating Firebase app instance and auth instance
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Form validation schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

// Functional component for the header with login/logout functionality
function Header_logout() {
  // State to manage the login modal visibility
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const navigate = useNavigate();

  // Function to close the login modal
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  // Function to open the login modal
  const handleGetStartedClick = () => {
    setOpenLoginModal(true);
  };

  // Function to handle the form submission for login
  const handleLoginFormSubmit = async (values: { email: string; password: string }) => {
    try {
      // Firebase authentication with email and password
      await signInWithEmailAndPassword(auth, values.email, values.password);
      alert('Login successful');
      handleCloseLoginModal();
      navigate("/HomeScreen")
    } catch (error: any) {
      // Handle authentication errors
      console.error('Firebase Authentication Error:', error);
      alert(error.message);
    }
  };
  

  const handelclickreg = () => {
    navigate('/register');

  }



  // Rendering the main component
  return (
    <div className='Main_Banner' style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerImage12})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '600px',
      position: 'relative',
    }}>
      {/* Header section */}
      <div className='Header' style={{}}>
        <Box sx={{ flexGrow: 1 }}>
          {/* Material-UI AppBar */}
          <AppBar position="static" style={{ backgroundColor: 'transparent' , boxShadow:'none'  }}>
            <Toolbar>
              {/* Netflix logo */}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" style={{ width: '130px', height: '38px', margin: '14px 0px 0px 50px' }} />
              </Typography>
              {/* Register button */}
              <Button style={{ backgroundColor: '#E50914', color: 'white' }} onClick={() => navigate('/register')}>
                Register
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>

      {/* Body section with banner content */}
      <div className='header_Body' style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '120px',
        flexDirection: 'column',
      }}>
        {/* Banner content */}
        <h2 style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '40px'
        }}>
          The Biggest Indian hit. Ready to watch here</h2>
        <h5 style={{
          color: 'white',
          marginTop: '-18px',
          fontSize: '20px',
          fontWeight: 'lighter',
        }}>
          Join today. Cancel anytime</h5>
        <p style={{ color: 'white', marginTop: '0px' }}>Ready to watch? Login here to enjoy movies</p>

        {/* "Login & Get Started" button */}

        <Button
          style={{
            width: '200px',
            textAlign: 'left',
            backgroundColor: '#E50914',
            color: 'white',
          }}
          onClick={handleGetStartedClick}
        >
          Login & Get Started &gt;
        </Button>
      </div>

      {/* Formik Form for sign in */}
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLoginFormSubmit}
      >
        <Form style={{
          display: openLoginModal ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
          padding: '20px',
          borderRadius: '5px',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '1',
          color:'white'
          
        }}>
          <div>
            <h4 style={{ fontSize: '20px' }}>Log In</h4>
            {/* Email input field */}
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              as={TextField}
              variant="outlined"
              fullWidth
              margin="normal"
              style ={{backgroundColor: '#A9A9A9'  }}
            />
          </div>
          <div style={{ marginLeft: '20px',  width:'270px' , paddingRight:'20px'}}>
            {/* Password input field */}
            <label htmlFor="password">Password:</label>
            <Field  type="password" id="password" name="password" as={TextField} variant="outlined" fullWidth margin="normal"  style ={{backgroundColor: '#A9A9A9' }} />
          </div>
          <div>
            {/* Login and Cancel buttons */}
            <Button type="submit" style={{ backgroundColor: '#E50914', color: 'white', marginTop: '10px' }}>
              Login
            </Button>
            <Button type="button" onClick={handleCloseLoginModal} style={{ marginTop: '10px' }}>
              Cancel
            </Button>
           
          </div>
        </Form>
      </Formik>
    </div>
  );
};

// Exporting the component
export default Header_logout;
