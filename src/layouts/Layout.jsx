import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import NuevoContacto from '../views/NuevoContacto';
import Contactos from '../views/Contactos';
import EditarContacto from '../views/EditarContacto';

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

