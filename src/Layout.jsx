// Layout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import NuevoContacto from './NuevoContacto';
import Contactos from './Contactos';

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/nuevo-contacto" element={<NuevoContacto />} />
      </Routes>
    </div>
  );
};

export default Layout;
