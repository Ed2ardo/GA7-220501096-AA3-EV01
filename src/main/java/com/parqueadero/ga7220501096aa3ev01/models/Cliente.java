package com.parqueadero.ga7220501096aa3ev01.models;

import jakarta.persistence.*;

/**
 * Creación de ORM - bbdd
 * metodos set y get para consultar y alterar campos
 */

@Entity
@Table(name = "clientes")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

 //   @Column(name = "apellido")
 //   private String apellido;
    @Column(name = "email")
    private String email;

    @Column(name = "telefono")
    private String telefono;


    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

   // public String getApellido() { return apellido; }
   // public void setApellido(String apellido) { this.apellido = apellido; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
