package com.projectwork.videogamelover.model.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Videogame;

public interface VideogameRepository extends CrudRepository<Videogame, Integer> {

}
