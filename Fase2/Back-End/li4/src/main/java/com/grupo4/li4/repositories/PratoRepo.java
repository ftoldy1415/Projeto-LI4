package com.grupo4.li4.repositories;

import com.grupo4.li4.model.Prato;
import com.grupo4.li4.model.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PratoRepo extends JpaRepository<Prato, Integer> {
}
