import React, { useState, useEffect } from 'react';
import ClienteService from '../services/ClienteService';

const ClienteForm = ({ onClienteAdded, clienteEditando, onClienteUpdated }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        if (clienteEditando) {
            setNombre(clienteEditando.nombre);
            setEmail(clienteEditando.email);
            setTelefono(clienteEditando.telefono);
        }
    }, [clienteEditando]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cliente = { nombre, email, telefono };

        try {
            if (clienteEditando) {
                await ClienteService.actualizarCliente(clienteEditando.id, cliente);
                onClienteUpdated();
            } else {
                await ClienteService.agregarCliente(cliente);
                onClienteAdded();
            }

            setNombre('');
            setEmail('');
            setTelefono('');
        } catch (error) {
            console.error('Error al guardar cliente:', error);
        }
    };

    return (
        <form className="cliente-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre:</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Teléfono:</label>
                <input
                    type="text"
                    className="form-control"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn-submit">
                {clienteEditando ? 'Actualizar Cliente' : 'Agregar Cliente'}
            </button>
        </form>
    );
};

export default ClienteForm;
