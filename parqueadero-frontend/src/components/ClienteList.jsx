import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import ClienteForm from './ClienteForm';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);
    const [clienteEditando, setClienteEditando] = useState(null);

    const cargarClientes = async () => {
        try {
            const response = await ClienteService.obtenerClientes();
            setClientes(response.data);
        } catch (error) {
            console.error('Error al obtener los clientes:', error);
        }
    };

    const handleEditarCliente = (cliente) => {
        setClienteEditando(cliente);
    };

    const handleEliminarCliente = async (id) => {
        try {
            await ClienteService.eliminarCliente(id);
            cargarClientes(); // Recargar la lista después de eliminar
        } catch (error) {
            console.error('Error al eliminar el cliente:', error);
        }
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>

            {/* Formulario para agregar o editar cliente */}
            <ClienteForm
                onClienteAdded={cargarClientes}
                clienteEditando={clienteEditando}
                onClienteUpdated={cargarClientes}
            />

            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id}>
                        {cliente.nombre} - {cliente.email} - {cliente.telefono}
                        <button onClick={() => handleEditarCliente(cliente)}>Editar</button>
                        <button onClick={() => handleEliminarCliente(cliente.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteList;
