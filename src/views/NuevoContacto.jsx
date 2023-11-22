import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContactos } from '../store/store';
import { validarNombre, validarEmail, validarTelefono, validarDireccion } from '../assets/js/validaciones';

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

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Añadir un nuevo contacto</h1>

      <form noValidate>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre completo:</label>
          <input
            type="text"
            className={`form-control ${nombre.length > 0 && !validarNombre(nombre) ? 'is-invalid' : ''}`}
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <div className="invalid-feedback">El nombre completo debe tener entre 10 y 30 caracteres.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${email.length > 0 && !validarEmail(email) ? 'is-invalid' : ''}`}
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="invalid-feedback">Ingrese una dirección de correo electrónico válida.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono:</label>
          <input
            type="tel"
            className={`form-control ${telefono.length > 0 && !validarTelefono(telefono) ? 'is-invalid' : ''}`}
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            pattern="[0-9]{9,}"
            required
          />
          <div className="invalid-feedback">El teléfono debe tener al menos 9 dígitos numéricos.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <input
            type="text"
            className={`form-control ${direccion.length > 0 && !validarDireccion(direccion) ? 'is-invalid' : ''}`}
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
          <div className="invalid-feedback">La dirección debe tener entre 10 y 30 caracteres.</div>
        </div>

        <div className="mb-3 text-center">
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={() => {
              if (
                validarNombre(nombre) &&
                validarEmail(email) &&
                validarTelefono(telefono) &&
                validarDireccion(direccion)
              ) {
                handleGuardar();
              } else {
                alert('Por favor revise los campos');
              }
            }}
          >
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

















