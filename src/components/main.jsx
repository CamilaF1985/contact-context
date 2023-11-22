// src/components/main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContactosProvider } from '../store/store'; 
import Layout from '../layouts/Layout'; 
import '../assets/css/App.css';  

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContactosProvider>
        <Layout />
      </ContactosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);






