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
            cargarClientes();
        } catch (error) {
            console.error('Error al eliminar el cliente:', error);
        }
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    return (
        <>
            <header>
                <h1>Gestión de Parqueaderos</h1>
            </header>

            <div className="sidebar">
                <a href="#">Registros</a>
                <a href="#">Estadísticas</a>
                <a href="#">Reportes</a>
                <a href="#">Cuenta</a>
            </div>

            <div className="container">
                <div className="cliente-container">
                    <h2>Clientes</h2>

                    <ClienteForm
                        onClienteAdded={cargarClientes}
                        clienteEditando={clienteEditando}
                        onClienteUpdated={cargarClientes}
                    />

                    <div className="cliente-list">
                        {clientes.map((cliente) => (
                            <div key={cliente.id} className="cliente-card">
                                <span>{cliente.nombre} - {cliente.email} - {cliente.telefono}</span>
                                <div className="action-buttons">
                                    <button className="edit" onClick={() => handleEditarCliente(cliente)}>Editar</button>
                                    <button className="delete" onClick={() => handleEliminarCliente(cliente.id)}>Eliminar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer>
                <p>Gestión de Parqueaderos &copy; 2024</p>
            </footer>
        </>
    );
};

export default ClienteList;
