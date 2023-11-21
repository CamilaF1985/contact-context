// Contactos.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Contactos = () => {
    // Estado con valores genéricos
    const [contactos, setContactos] = React.useState([
        {
            id: 1,
            nombre: 'John Doe',
            direccion: '123 Main St',
            telefono: '555-1234',
            email: 'john@example.com'
        },
        {
            id: 2,
            nombre: 'Jane Doe',
            direccion: '456 Oak St',
            telefono: '555-5678',
            email: 'jane@example.com'
        }
    ]);

    return (
        <div className="container mt-5">
            {/* Botón para agregar nuevo contacto */}
            <div className="row mb-3">
                <div className="col text-end">
                    <Link to="/nuevo-contacto" className="btn btn-success">
                        Añadir Nuevo Contacto
                    </Link>
                </div>
            </div>

            {/* Borde exterior con clase personalizada */}
            <div className="border border-secondary rounded p-2 border-custom">
                {/* Lista de contactos */}
                {contactos.map((contacto, index) => (
                    <div key={index} className="row mb-3">
                        {/* Columna para la foto */}
                        <div className="col-md-2 d-flex align-items-center">
                            <img src="https://placekitten.com/120/120" alt="Contacto" className="rounded-circle" />
                        </div>

                        {/* Columna para la información del contacto */}
                        <div className="col-md-6">
                            <div className="mb-2">
                                <strong>{contacto.nombre}</strong>
                            </div>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                                {contacto.direccion}
                            </div>
                            <div className="mb-2">
                                <FontAwesomeIcon icon={faPhone} className="me-2" />
                                {contacto.telefono}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                {contacto.email}
                            </div>
                        </div>

                        {/* Columna para editar y eliminar */}
                        <div className="col-md-4 text-end">
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>

                        {/* Línea horizontal */}
                        {index < contactos.length - 1 && (
                            <div className="col-12 p-1">
                                <hr className="bg-secondary" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contactos;



