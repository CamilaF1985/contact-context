export const validarNombre = (nombre) => {
    return nombre.length >= 10 && nombre.length <= 30;
};

export const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validarTelefono = (telefono) => {
    return /^[0-9]{9,}$/.test(telefono);
};

export const validarDireccion = (direccion) => {
    return direccion.length >= 10 && direccion.length <= 30;
};
