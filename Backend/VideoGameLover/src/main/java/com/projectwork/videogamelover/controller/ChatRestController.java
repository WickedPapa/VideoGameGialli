package com.projectwork.videogamelover.controller;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Chat;
import com.projectwork.videogamelover.model.entities.Message;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.repositories.ChatRepository;
import com.projectwork.videogamelover.model.repositories.MessageRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.CreateMessageDTO;
import com.projectwork.videogamelover.view.MessageDTO;

@RestController
public class ChatRestController {
	
	@Autowired
	ChatRepository chatRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	MessageRepository messageRepo;

	public int findChat(int userId1, int userId2){
		Optional<User> optUser1 = userRepo.findById(userId1);
		Optional<User> optUser2 = userRepo.findById(userId2);
		if(optUser1.isEmpty() || optUser2.isEmpty()) {
			return -1;
		}
		User user1 = optUser1.get();
		User user2 = optUser2.get();
		//List<Chat> chats = chatRepo.findByUser(user1);
		Optional<Chat> optChat = chatRepo.findByUser1AndUser2(user1, user2);
		if(optChat.isEmpty()) {
			Chat chat = chatRepo.save(new Chat(user1, user2));
			return chat.getId();
		}
		return optChat.get().getId();
	}
	
	public boolean createMessage(@RequestBody CreateMessageDTO dto) {
		Optional<User> optUser = userRepo.findById(dto.getUserId());
		if(optUser.isEmpty()) {
			return false;
		}
		Optional<Chat> optChat = chatRepo.findById(dto.getChatId());
		if(optChat.isEmpty()) {
			return false;
		}
		if(dto.getText().equals("") || dto.getText()==null) {
			return false;
		}
		Chat chat = optChat.get();
		Message message = new Message(optUser.get(), new Timestamp(new java.util.Date().getTime()), dto.getText(), chat);
		message = messageRepo.save(message);
		return true;
	}
	
	public int chatVersion(int chatId) {
		Optional<Chat> optChat = chatRepo.findById(chatId);
		if(optChat.isEmpty()) {
			return -1;
		}
		return messageRepo.findByConversation(optChat.get()).size();
	}
	
	public List<MessageDTO> getConversation(int chatId){
		Optional<Chat> optChat = chatRepo.findById(chatId);
		if(optChat.isEmpty()) {
			return new LinkedList<>();
		}
		List<MessageDTO> conversation = new LinkedList<>();
		for(Message m : messageRepo.findByConversation(optChat.get())) {
			conversation.add(new MessageDTO(m.getUser().getId(), m.getTimestamp(), m.getText()));
		}
		return conversation;
	}
}
