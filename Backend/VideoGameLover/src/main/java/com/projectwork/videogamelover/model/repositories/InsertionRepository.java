package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Insertion;

public interface InsertionRepository extends CrudRepository<Insertion, Integer>{

	Optional<Insertion> findByTitle(String title);

}
