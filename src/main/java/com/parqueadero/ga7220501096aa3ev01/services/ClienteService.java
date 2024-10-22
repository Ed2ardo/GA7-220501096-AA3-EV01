package com.parqueadero.ga7220501096aa3ev01.services;

import com.parqueadero.ga7220501096aa3ev01.models.Cliente;
import com.parqueadero.ga7220501096aa3ev01.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    // Obtener todos los clientes
    public List<Cliente> obtenerClientes() {
        return clienteRepository.findAll();
    }

    // Guardar o actualizar un cliente
    public Cliente guardarCliente(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    // Eliminar un cliente por ID
    public void eliminarCliente(Long id) {
        clienteRepository.deleteById(id);
    }

    // Obtener un cliente por ID
    public Cliente obtenerClientePorId(Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        return cliente.orElse(null);  // Si no se encuentra, retorna null
    }


}


