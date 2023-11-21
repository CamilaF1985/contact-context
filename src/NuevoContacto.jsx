// NuevoContacto.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevoContacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleGuardar = () => {
    // Aquí puedes implementar la lógica para guardar el contacto
    // Puedes enviar los datos a un servidor, almacenarlos localmente, etc.
    console.log('Guardando contacto:', { nombre, email, telefono, direccion });
  };

  const validarFormulario = () => {
    if (nombre.length < 10 || nombre.length > 30) {
      alert('El nombre completo debe tener entre 10 y 30 caracteres.');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Ingrese una dirección de correo electrónico válida.');
      return false;
    }

    if (!/^[0-9]{9,}$/.test(telefono)) {
      alert('El teléfono debe tener al menos 9 dígitos numéricos.');
      return false;
    }

    if (direccion.length < 10 || direccion.length > 30) {
      alert('La dirección debe tener entre 10 y 30 caracteres.');
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      handleGuardar();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Añadir un nuevo contacto</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]{9,}"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary w-100">Guardar</button>
        </div>
      </form>

      <div>
        <Link to="/contactos" className="text-decoration-none">Regresar a Contactos</Link>
      </div>
    </div>
  );
};

export default NuevoContacto;


