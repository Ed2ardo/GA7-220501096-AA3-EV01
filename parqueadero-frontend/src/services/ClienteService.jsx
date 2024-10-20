import axios from 'axios';

const API_URL = 'http://localhost:8080/clientes';

const ClienteService = {
    obtenerClientes: () => {
        return axios.get(API_URL);
    },

    agregarCliente: (cliente) => {
        return axios.post(API_URL, cliente);
    },

    actualizarCliente: (id, cliente) => {
        return axios.put(`${API_URL}/${id}`, cliente);
    },

    eliminarCliente: (id) => {
        return axios.delete(`${API_URL}/${id}`);
    }
};

export default ClienteService;

