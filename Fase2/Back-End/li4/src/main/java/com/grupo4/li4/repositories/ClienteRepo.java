package com.grupo4.li4.repositories;

import com.grupo4.li4.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepo extends JpaRepository<Cliente,String> {
}
