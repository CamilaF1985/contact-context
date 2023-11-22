import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContactos } from '../store/store';

const Contacto = ({ contacto, isLast }) => {
    const { actualizarContacto, eliminarContacto } = useContactos();
    const [showModal, setShowModal] = useState(false);

    const handleEliminarContacto = () => {
        // Mostrar el modal de confirmación
        setShowModal(true);
    };

    const confirmarEliminarContacto = async () => {
        // Ocultar el modal de confirmación
        setShowModal(false);

        // Llamar a la función para eliminar el contacto
        await eliminarContacto(contacto.id);
        handleActualizarContacto();
    };

    const handleActualizarContacto = async () => {
        try {
            await actualizarContacto(contacto);
        } catch (error) {
            console.error('Error al actualizar el contacto:', error);
        }
    };

    return (
        <div className={`row ${isLast ? 'mb-2' : 'mb-1'}`}>
            <div className="col-md-2 d-flex align-items-center">
                <img src="https://placekitten.com/120/120" alt="Contacto" className="rounded-circle" />
            </div>

            <div className="col-md-4">
                <div className="mb-2">
                    <strong>{contacto.full_name}</strong>
                </div>
                <div className="mb-2 text-secondary">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                    {contacto.address}
                </div>
                <div className="mb-2 text-secondary">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    {contacto.phone}
                </div>
                <div className="text-secondary">
                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                    {contacto.email}
                </div>
            </div>

            <div className="col-md-6 text-end">
                <Link to={`/editar-contacto/${contacto.id}`}>
                    <FontAwesomeIcon icon={faEdit} className="me-2" style={{ cursor: 'pointer' }} />
                </Link>
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={handleEliminarContacto}
                    style={{ cursor: 'pointer' }}
                />
            </div>

            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar Eliminación</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                ¿Está seguro de que desea eliminar este contacto?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                                <button type="button" className="btn btn-danger" onClick={confirmarEliminarContacto}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isLast && (
                <div className="col-12 p-1">
                    <hr className="bg-secondary" />
                </div>
            )}
        </div>
    );
};

export default Contacto;







