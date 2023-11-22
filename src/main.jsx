// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContactosProvider } from './store'; // Ajusta la ruta según tu estructura
import Layout from './Layout';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ContactosProvider>
        <Layout />
      </ContactosProvider>
    </Router>
  </React.StrictMode>,
);



