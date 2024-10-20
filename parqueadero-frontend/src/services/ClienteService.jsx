import axios from 'axios';

const API_URL = "http://localhost:8080/clientes"; // URL del backend

const ClienteService = {
    obtenerClientes: () => {
        return axios.get(API_URL);
    },

    agregarCliente: (cliente) => {
        return axios.post(API_URL, cliente);
    },
};

export default ClienteService;
