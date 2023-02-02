package com.projectwork.videogamelover.model.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.projectwork.videogamelover.model.entities.Chat;
import com.projectwork.videogamelover.model.entities.Message;

public interface MessageRepository extends CrudRepository<Message, Integer> {
	List<Message> findByConversation(Chat conversation);
}
