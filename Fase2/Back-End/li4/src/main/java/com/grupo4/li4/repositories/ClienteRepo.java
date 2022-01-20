package com.grupo4.li4.repositories;

import com.grupo4.li4.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClienteRepo extends JpaRepository<Cliente,Integer> {

    @Query("FROM Cliente WHERE email = ?1")
    Cliente encontraPorEmail(String email);


}
