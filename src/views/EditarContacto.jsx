import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useContactos } from '../store/store';

const EditarContacto = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { contactos, actualizarContacto } = useContactos();

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    useEffect(() => {
        const contactoEditar = contactos.find(contacto => contacto.id === parseInt(id, 10));

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

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditar();
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Editar contacto</h1>

            <form onSubmit={handleSubmit} noValidate>
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
                    <button type="submit" className="btn btn-primary w-100">Guardar Cambios</button>
                </div>
            </form>

            <div>
                <Link to="/contactos" className="text-decoration-none">Regresar a Contactos</Link>
            </div>

            <div>
                <Link to="/" className="text-decoration-none">Regresar a Inicio</Link>
            </div>
        </div>
    );
};

export default EditarContacto;








