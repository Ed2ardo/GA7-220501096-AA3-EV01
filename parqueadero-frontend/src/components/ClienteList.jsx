import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import ClienteForm from './ClienteForm';

const ClienteList = () => {
    const [clientes, setClientes] = useState([]);

    const cargarClientes = async () => {
        try {
            const response = await ClienteService.obtenerClientes();
            setClientes(response.data);
        } catch (error) {
            console.error('Error al obtener los clientes:', error);
        }
    };

    useEffect(() => {
        cargarClientes();
    }, []);

    return (
        <div>
            <h1>Lista de Clientes</h1>

            {/* Formulario para agregar nuevo cliente */}
            <ClienteForm onClienteAdded={cargarClientes} />

            <ul>
                {clientes.map((cliente) => (
                    <li key={cliente.id}>
                        {cliente.nombre} - {cliente.email} - {cliente.telefono}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClienteList;
