package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Image;

public interface ImageRepository extends CrudRepository<Image, Integer> {

	Optional<Image> findByLink(String cover);

}
