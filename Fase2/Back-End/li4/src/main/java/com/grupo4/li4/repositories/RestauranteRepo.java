package com.grupo4.li4.repositories;

import com.grupo4.li4.model.Cliente;
import com.grupo4.li4.model.Restaurante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RestauranteRepo extends JpaRepository<Restaurante, String> {
}
