package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {

	Optional<User> findByAccountId(int id);

}
