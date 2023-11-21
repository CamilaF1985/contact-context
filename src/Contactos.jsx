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
            <Link to="/nuevo-contacto" className="btn btn-success float-end mb-3">
                Añadir Nuevo Contacto
            </Link>

            {/* Lista de contactos */}
            {contactos.map((contacto, index) => (
                <div key={index} className="mb-3 border border-light">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <strong>{contacto.nombre}</strong>
                        <div>
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                            <FontAwesomeIcon icon={faTrash} />
                        </div>
                    </div>
                    <div>
                        <img src="https://placekitten.com/180/180" alt="Contacto" className="rounded-circle" />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                        {contacto.direccion}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="me-2" />
                        {contacto.telefono}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                        {contacto.email}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Contactos;



