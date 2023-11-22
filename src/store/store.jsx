import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ContactosContext = createContext();

const obtenerContactos = async (agendaSlug, setContactos, setError, setErrorMessage) => {
    try {
        const response = await axios.get(`https://playground.4geeks.com/apis/fake/contact/agenda/${agendaSlug}`);
        setContactos(response.data);
    } catch (error) {
        console.error('Error al obtener los contactos:', error);
        setError(true);
        setErrorMessage('Error al obtener los contactos. Verifica la conexión o la configuración de la API.');
    }
};

const ContactosProvider = ({ children }) => {
    const [contactos, setContactos] = useState([]);
    const [agendaSlug] = useState('cfabbroni');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        obtenerContactos(agendaSlug, setContactos, setError, setErrorMessage);
    }, [agendaSlug]);

    const guardarContacto = async (nuevoContacto) => {
        try {
            const response = await axios.post('https://playground.4geeks.com/apis/fake/contact/', {
                ...nuevoContacto,
                agenda_slug: agendaSlug,
            });
            setContactos([...contactos, response.data]);
            await obtenerContactos(agendaSlug, setContactos, setError, setErrorMessage);
        } catch (error) {
            console.error('Error al guardar el contacto:', error);
            setError(true);
            setErrorMessage('Error al guardar el contacto.');
        }
    };

    const actualizarContacto = async (contactoActualizado) => {
        try {
            const response = await axios.put(`https://playground.4geeks.com/apis/fake/contact/${contactoActualizado.id}`, {
                ...contactoActualizado,
                agenda_slug: agendaSlug,
            });

            setContactos(contactos.map(contacto =>
                contacto.id === contactoActualizado.id ? response.data : contacto
            ));
            await obtenerContactos(agendaSlug, setContactos, setError, setErrorMessage);
        } catch (error) {
            console.error('Error al actualizar el contacto:', error);
            setError(true);
            setErrorMessage('Error al actualizar el contacto.');
        }
    };

    const eliminarContacto = async (contactoId) => {
        try {
            await axios.delete(`https://playground.4geeks.com/apis/fake/contact/${contactoId}`);
            setContactos(contactos.filter(contacto => contacto.id !== contactoId));
        } catch (error) {
            console.error('Error al eliminar el contacto:', error);
            setError(true);
            setErrorMessage('Error al eliminar el contacto.');
        }
    };

    return (
        <ContactosContext.Provider value={{ contactos, agendaSlug, error, errorMessage, guardarContacto, actualizarContacto, eliminarContacto }}>
            {children}
        </ContactosContext.Provider>
    );
};

const useContactos = () => {
    const context = useContext(ContactosContext);
    if (!context) {
        throw new Error('useContactos debe ser utilizado dentro de un ContactosProvider');
    }
    return context;
};

export { ContactosProvider, useContactos, obtenerContactos };












