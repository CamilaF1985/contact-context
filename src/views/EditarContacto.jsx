import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContactos } from '../store/store';
import {
    validarNombre,
    validarEmail,
    validarTelefono,
    validarDireccion,
} from '../assets/js/validaciones';

const EditarContacto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contactos, actualizarContacto } = useContactos();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [nombreError, setNombreError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [telefonoError, setTelefonoError] = useState('');
    const [direccionError, setDireccionError] = useState('');

    useEffect(() => {
        const contactoEditar = contactos.find(
            (contacto) => contacto.id === parseInt(id, 10)
        );

        if (contactoEditar) {
            setNombre(contactoEditar.full_name);
            setEmail(contactoEditar.email);
            setTelefono(contactoEditar.phone);
            setDireccion(contactoEditar.address);
        }
    }, [contactos, id]);

    const handleEditar = async () => {
        try {
            await actualizarContacto({
                id: parseInt(id, 10),
                full_name: nombre,
                email,
                phone: telefono,
                address: direccion,
            });

            navigate('/contactos');
        } catch (error) {
            console.error('Error al actualizar el contacto:', error);
        }
    };

    const validarCampo = (campo, valor) => {
        switch (campo) {
            case 'nombre':
                setNombreError(validarNombre(valor) ? '' : 'El nombre debe tener entre 10 y 30 caracteres');
                break;
            case 'email':
                setEmailError(validarEmail(valor) ? '' : 'Ingrese una dirección de correo electrónico válida');
                break;
            case 'telefono':
                setTelefonoError(validarTelefono(valor) ? '' : 'El teléfono debe tener al menos 9 dígitos numéricos');
                break;
            case 'direccion':
                setDireccionError(validarDireccion(valor) ? '' : 'La dirección debe tener entre 10 y 30 caracteres');
                break;
            default:
                break;
        }
    };

    const handleChange = (campo, valor) => {
        switch (campo) {
            case 'nombre':
                setNombre(valor);
                break;
            case 'email':
                setEmail(valor);
                break;
            case 'telefono':
                setTelefono(valor);
                break;
            case 'direccion':
                setDireccion(valor);
                break;
            default:
                break;
        }

        validarCampo(campo, valor);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const nombreValido = validarNombre(nombre);
        const emailValido = validarEmail(email);
        const telefonoValido = validarTelefono(telefono);
        const direccionValida = validarDireccion(direccion);

        setNombreError(nombreValido ? '' : 'El nombre debe tener entre 10 y 30 caracteres');
        setEmailError(emailValido ? '' : 'Ingrese una dirección de correo electrónico válida');
        setTelefonoError(telefonoValido ? '' : 'El teléfono debe tener al menos 9 dígitos numéricos');
        setDireccionError(direccionValida ? '' : 'La dirección debe tener entre 10 y 30 caracteres');

        if (nombreValido && emailValido && telefonoValido && direccionValida) {
            handleEditar();
        } else {
            alert('Por favor revise los campos');
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Editar contacto</h1>

            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre completo:
                    </label>
                    <input
                        type="text"
                        className={`form-control ${nombreError ? 'is-invalid' : ''}`}
                        id="nombre"
                        value={nombre}
                        onChange={(e) => handleChange('nombre', e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">{nombreError}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="email"
                        className={`form-control ${emailError ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">{emailError}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">
                        Teléfono:
                    </label>
                    <input
                        type="tel"
                        className={`form-control ${telefonoError ? 'is-invalid' : ''}`}
                        id="telefono"
                        value={telefono}
                        onChange={(e) => handleChange('telefono', e.target.value)}
                        pattern="[0-9]{9,}"
                        required
                    />
                    <div className="invalid-feedback">{telefonoError}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">
                        Dirección:
                    </label>
                    <input
                        type="text"
                        className={`form-control ${direccionError ? 'is-invalid' : ''}`}
                        id="direccion"
                        value={direccion}
                        onChange={(e) => handleChange('direccion', e.target.value)}
                        required
                    />
                    <div className="invalid-feedback">{direccionError}</div>
                </div>

                <div className="mb-3 text-center">
                    <button type="submit" className="btn btn-primary w-100">
                        Guardar Cambios
                    </button>
                </div>
            </form>

            <div>
                <Link to="/contactos" className="text-decoration-none">
                    Regresar a Contactos
                </Link>
            </div>

            <div>
                <Link to="/" className="text-decoration-none">
                    Regresar a Inicio
                </Link>
            </div>
        </div>
    );
};

export default EditarContacto;










