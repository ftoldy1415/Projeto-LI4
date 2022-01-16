package com.grupo4.li4.repositories;

import com.grupo4.li4.model.Proprietario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProprietarioRepo extends JpaRepository<Proprietario,Integer> {

    @Query("FROM Proprietario WHERE email = ?1")
    Proprietario encontraPorEmail(String email);

}
