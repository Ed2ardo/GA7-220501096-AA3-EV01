package com.parqueadero.ga7220501096aa3ev01.controllers;

import com.parqueadero.ga7220501096aa3ev01.models.Cliente;
import com.parqueadero.ga7220501096aa3ev01.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "http://localhost:5173")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> listarClientes() {
        return clienteService.obtenerClientes();
    }


    @PostMapping
    public Cliente guardarCliente(@RequestBody Cliente cliente) {
        return clienteService.guardarCliente(cliente);
    }

    @DeleteMapping("/{id}")
    public void eliminarCliente(@PathVariable Long id) {
        clienteService.eliminarCliente(id);
    }

    @GetMapping("/{id}")
    public Cliente obtenerClientePorId(@PathVariable Long id) {
        return clienteService.obtenerClientePorId(id);
    }

    @PutMapping("/{id}")
    public Cliente actualizarCliente(@PathVariable Long id, @RequestBody Cliente clienteActualizado) {
        Cliente cliente = clienteService.obtenerClientePorId(id);
        if (cliente != null) {
            cliente.setNombre(clienteActualizado.getNombre());
            cliente.setEmail(clienteActualizado.getEmail());
            cliente.setTelefono(clienteActualizado.getTelefono());
            return clienteService.guardarCliente(cliente);
        }
        return null; // Manejo de error adecuado si el cliente no existe
    }
}
