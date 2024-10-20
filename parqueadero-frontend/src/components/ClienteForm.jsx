import React, { useState, useEffect } from 'react';
import ClienteService from '../services/ClienteService';

const ClienteForm = ({ onClienteAdded, clienteEditando, onClienteUpdated }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        if (clienteEditando) {
            // Si hay un cliente en edición, llena los campos con sus datos
            setNombre(clienteEditando.nombre);
            setEmail(clienteEditando.email);
            setTelefono(clienteEditando.telefono);
        } else {
            // Si no hay cliente en edición, limpia los campos
            setNombre('');
            setEmail('');
            setTelefono('');
        }
    }, [clienteEditando]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cliente = { nombre, email, telefono };

        try {
            if (clienteEditando) {
                // Actualizar cliente existente
                await ClienteService.actualizarCliente(clienteEditando.id, cliente);
                onClienteUpdated(); // Actualiza la lista tras editar
            } else {
                // Agregar nuevo cliente
                await ClienteService.agregarCliente(cliente);
                onClienteAdded(); // Actualiza la lista tras agregar
            }
        } catch (error) {
            console.error('Error al guardar cliente:', error);
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
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input
                    type="text"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>
            <button type="submit">
                {clienteEditando ? 'Actualizar Cliente' : 'Agregar Cliente'}
            </button>
        </form>
    );
};

export default ClienteForm;
