package com.projectwork.videogamelover.model.repositories;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
