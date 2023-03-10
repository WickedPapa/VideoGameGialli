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

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.Chat;
import com.projectwork.videogamelover.model.entities.Message;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.repositories.ChatRepository;
import com.projectwork.videogamelover.model.repositories.MessageRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.CreateMessageDTO;
import com.projectwork.videogamelover.view.MessageDTO;
import com.projectwork.videogamelover.view.UserChatsDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class ChatRestController {
	
	@Autowired
	ChatRepository chatRepo;
	@Autowired
	UserRepository userRepo;
	@Autowired
	MessageRepository messageRepo;
	@Autowired
	IAccountManager accountManager;
	
	@GetMapping("/chat/{friendId}")
	public int findChat(HttpSession session, @PathVariable("friendId") int friendId){
		Optional<User> optfriend = userRepo.findById(friendId);
		Object obj = session.getAttribute("logged");
		if(!(optfriend.isPresent()) || obj == null || !(obj instanceof User)) {
			return -1;
		}
		User user = (User)obj;
		User friend = optfriend.get();
		Optional<Chat> optChat = chatRepo.findByUser1AndUser2(user, friend);
		if(!optChat.isPresent()) {
			optChat = chatRepo.findByUser1AndUser2(friend, user);
			if(!optChat.isPresent()) {
				Chat chat = chatRepo.save(new Chat(user, friend));
				return chat.getId();
			}
		}
		return optChat.get().getId();
	}
	
	//Da controllare da lucidi
	@GetMapping("/chat/one/{idChat}")
	public Chat findOneChat(HttpSession session, @PathVariable("idChat") int idChat){
		Optional<Chat> optChat = chatRepo.findById(idChat);
		if(!optChat.isPresent()) {
			return null;
		}
		return optChat.get();
	}
	
	@PostMapping("/chat")
	public boolean createMessage(@RequestBody CreateMessageDTO dto) {
		Optional<User> optUser = userRepo.findById(dto.getUserId());
		if(!optUser.isPresent()) {
			return false;
		}
		Optional<Chat> optChat = chatRepo.findById(dto.getChatId());
		if(!optChat.isPresent()) {
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
		if(!optChat.isPresent()) {
			return -1;
		}
		return messageRepo.findByConversation(optChat.get()).size();
	}
	
	@GetMapping("/chat/conversation/{chatId}")
	public List<MessageDTO> getConversation(@PathVariable("chatId") int chatId){
		Optional<Chat> optChat = chatRepo.findById(chatId);
		if(!optChat.isPresent()) {
			return new LinkedList<>();
		}
		List<MessageDTO> conversation = new LinkedList<>();
		
		for(Message m : messageRepo.findByConversationOrderByTimestamp(optChat.get())) {
			conversation.add(new MessageDTO(
					m.getUser().getId(),
					accountManager.getAccount(m.getUser().getAccountId()).getUsername(),
					m.getUser().getRating(), 
					m.getTimestamp(), m.getText()));
		}
		return conversation;
	}
	
	@GetMapping("/chat/allUserChat")
	public UserChatsDTO getAllUserChat(HttpSession session){
		List<Integer> chatIds = new LinkedList<>();
		Object obj = session.getAttribute("logged");
		if(obj instanceof User) {
			User user = (User)obj;
			List<Chat> chats = chatRepo.findAllByUser1OrUser2(user, user);
			for(Chat chat : chats) {
				chatIds.add(chat.getId());
			}
			UserChatsDTO dto = new UserChatsDTO(user.getId(), chatIds);
			return dto;
		}
		return null;
	}
}
