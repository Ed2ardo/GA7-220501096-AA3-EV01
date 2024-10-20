import React, { useState } from 'react';
import ClienteService from '../services/ClienteService';

const ClienteForm = ({ onClienteAdded }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado de recargar la página

        const nuevoCliente = { nombre, email, telefono };

        try {
            await ClienteService.agregarCliente(nuevoCliente); // Llamada al backend para agregar cliente
            onClienteAdded(); // Refresca la lista de clientes
            // Limpia los campos del formulario
            setNombre('');
            setEmail('');
            setTelefono('');
        } catch (error) {
            console.error('Error al agregar cliente:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />
            </div>
            <button type="submit">Agregar Cliente</button>
        </form>
    );
};

export default ClienteForm;
