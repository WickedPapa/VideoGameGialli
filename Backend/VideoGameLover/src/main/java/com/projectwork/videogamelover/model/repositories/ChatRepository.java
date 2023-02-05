package com.projectwork.videogamelover.model.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Chat;
import com.projectwork.videogamelover.model.entities.User;

public interface ChatRepository extends CrudRepository<Chat, Integer> {

	List<Chat> findAllByUser1OrUser2(User user, User user2);

	Optional<Chat> findByUser1AndUser2(User user, User friend);

	

}
