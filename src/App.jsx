import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Gestor de Contactos</h1>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <Link to="/contactos" className="btn btn-primary btn-lg w-100">
            Lista de Contactos
          </Link>
        </div>
        <div className="col-md-6">
          <Link to="/nuevo-contacto" className="btn btn-success btn-lg w-100">
            Añadir Nuevo Contacto
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
















