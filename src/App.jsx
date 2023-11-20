// Contactos.jsx
import React from 'react';

const Contactos = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Gestor de Contactos</h1>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <a href="#" className="btn btn-primary btn-lg w-100">Lista de Contactos</a>
        </div>
        <div className="col-md-6">
          <a href="#" className="btn btn-success btn-lg w-100">Añadir Nuevo Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Contactos;

