package com.projectwork.videogamelover.controller;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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

import jakarta.servlet.http.HttpSession;

@RestController
public class ChatRestController {
	
	@Autowired
	ChatRepository chatRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	MessageRepository messageRepo;

	@GetMapping("/chat/{friendId}")
	public int findChat(HttpSession session, @PathVariable("friendId") int friendId){
		Optional<User> optfriend = userRepo.findById(friendId);
		Object obj = session.getAttribute("logged");
		if(optfriend.isEmpty() || obj == null || !(obj instanceof User)) {
			return -1;
		}
		User user = (User)obj;
		User friend = optfriend.get();
		Optional<Chat> optChat = chatRepo.findByUser1AndUser2(user, friend);
		if(optChat.isEmpty()) {
			optChat = chatRepo.findByUser1AndUser2(friend, user);
			if(optChat.isEmpty()) {
				Chat chat = chatRepo.save(new Chat(user, friend));
				return chat.getId();
			}
		}
		return optChat.get().getId();
	}
	
	@PostMapping("/chat")
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
		Timestamp time = Timestamp.valueOf(LocalDateTime.now());
		Message message = new Message(optUser.get(), time, dto.getText(), chat);
		message = messageRepo.save(message);
		return true;
	}
	
	@GetMapping("/chat/version/{chatId}")
	public int chatVersion(@PathVariable("chatId") int chatId) {
		Optional<Chat> optChat = chatRepo.findById(chatId);
		if(optChat.isEmpty()) {
			return -1;
		}
		return messageRepo.findByConversation(optChat.get()).size();
	}
	
	@GetMapping("/chat/conversation/{chatId}")
	public List<MessageDTO> getConversation(@PathVariable("chatId") int chatId){
		Optional<Chat> optChat = chatRepo.findById(chatId);
		if(optChat.isEmpty()) {
			return new LinkedList<>();
		}
		System.out.println("ciao");
		List<MessageDTO> conversation = new LinkedList<>();
		for(Message m : messageRepo.findByConversationOrderByTimestamp(optChat.get())) {
			conversation.add(new MessageDTO(m.getUser().getId(), m.getTimestamp(), m.getText()));
		}
		return conversation;
	}
}
