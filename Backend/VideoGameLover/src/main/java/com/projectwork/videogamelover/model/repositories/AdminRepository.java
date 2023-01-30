package com.projectwork.videogamelover.model.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer>{

	Optional<Admin> findByAccountId(int id);

}
