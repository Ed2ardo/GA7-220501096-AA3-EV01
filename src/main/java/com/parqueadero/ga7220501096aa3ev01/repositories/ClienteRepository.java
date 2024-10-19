package com.parqueadero.ga7220501096aa3ev01.repositories;

import com.parqueadero.ga7220501096aa3ev01.models.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


/**
 * Clase principal, ejecutar app
 */
@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
}
