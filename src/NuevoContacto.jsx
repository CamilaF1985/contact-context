import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContactos } from './store';
import { validarNombre, validarEmail, validarTelefono, validarDireccion } from './validaciones';

const NuevoContacto = () => {
  const { guardarContacto } = useContactos();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleGuardar = async () => {
    try {
      await guardarContacto({
        full_name: nombre,
        email,
        phone: telefono,
        address: direccion,
      });

      navigate('/contactos');
    } catch (error) {
      console.error('Error al guardar el contacto:', error);
    }
  };

  const validarFormulario = () => {
    if (!validarNombre(nombre)) {
      alert('El nombre completo debe tener entre 10 y 30 caracteres.');
      return false;
    }

    if (!validarEmail(email)) {
      alert('Ingrese una dirección de correo electrónico válida.');
      return false;
    }

    if (!validarTelefono(telefono)) {
      alert('El teléfono debe tener al menos 9 dígitos numéricos.');
      return false;
    }

    if (!validarDireccion(direccion)) {
      alert('La dirección debe tener entre 10 y 30 caracteres.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      await handleGuardar();
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
          <button type="submit" className="btn btn-primary w-100">
            Guardar
          </button>
        </div>
      </form>

      <div>
        <Link to="/" className="text-decoration-none">Regresar a Inicio</Link>
      </div>
    </div>
  );
};

export default NuevoContacto;












