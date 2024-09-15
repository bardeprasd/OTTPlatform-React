import logo from './logo.svg';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FormBuilder from './components/FormBuilder';
import FeedbackDetail from './components/feedbackDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/feedback-detail" element={<FeedbackDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
