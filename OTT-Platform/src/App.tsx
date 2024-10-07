import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './components/Welcome Page/welcome';
import RegistrationForm from './components/register/register';
import HomeScreen from './components/homescreen_main/homescreen/homescreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/HomeScreen" element={<HomeScreen />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
