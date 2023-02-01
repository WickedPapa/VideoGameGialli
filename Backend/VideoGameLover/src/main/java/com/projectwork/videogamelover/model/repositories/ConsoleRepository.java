package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Console;

public interface ConsoleRepository extends CrudRepository<Console, Integer>{

	Optional<Console> findByConsole(String str);

}
