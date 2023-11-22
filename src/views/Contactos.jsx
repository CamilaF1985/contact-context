import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contacto from './Contacto';
import { useContactos } from '../store/store';

const Contactos = () => {
    const { contactos, actualizarContacto, eliminarContacto } = useContactos();

    useEffect(() => {
    }, []);

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col text-end">
                    <Link to="/nuevo-contacto" className="btn btn-success">
                        Añadir Nuevo Contacto
                    </Link>
                </div>
            </div>

            <div className="border rounded p-2 my-custom-border">
                {contactos.map((contacto, index) => (
                    <Contacto
                        key={index}
                        contacto={contacto}
                        isLast={index === contactos.length - 1}
                        actualizarContacto={actualizarContacto}
                        eliminarContacto={eliminarContacto}
                    />
                ))}
            </div>
            <div>
                <Link to="/" className="text-decoration-none">Regresar a Inicio</Link>
            </div>
        </div>
    );
};

export default Contactos;






















