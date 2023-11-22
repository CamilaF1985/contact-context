export const validarNombre = (nombre) => {
    return nombre.length >= 10 && nombre.length <= 30;
};

export const validarEmail = (email) => {
    const emailParts = email.split('@');
    return emailParts.length === 2 && emailParts[1].includes('.com');
};

export const validarTelefono = (telefono) => {
    const numericCharacters = telefono.split('').filter(char => !isNaN(char));
    return numericCharacters.length >= 9;
};

export const validarDireccion = (direccion) => {
    return direccion.length >= 10 && direccion.length <= 30;
};
