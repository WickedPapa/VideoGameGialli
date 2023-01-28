package com.projectwork.videogamelover.model.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.VideoGame;

public interface VideoGameRepository extends CrudRepository<VideoGame, Integer> {

}
