package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.VideoGame;

public interface VideoGameRepository extends CrudRepository<VideoGame, Integer> {

	Optional<VideoGame> findByName(String upperCase);

}
