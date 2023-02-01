package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Genre;

public interface GenreRepository extends CrudRepository<Genre, Integer>{

	Optional<Genre> findAllByGenre(String str);

	Optional<Genre> findByGenre(String upperCase);

}
