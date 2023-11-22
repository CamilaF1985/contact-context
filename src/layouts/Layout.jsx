import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../Views/App';
import NuevoContacto from '../Views/NuevoContacto';
import Contactos from '../Views/Contactos';
import EditarContacto from '../Views/EditarContacto';

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contactos" element={<Contactos />} />
        <Route path="/nuevo-contacto" element={<NuevoContacto />} />
        <Route path="/editar-contacto/:id" element={<EditarContacto />} />
      </Routes>
    </div>
  );
};

export default Layout;

