package com.projectwork.videogamelover;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.projectwork.videogamelover.controller.ChatRestController;
import com.projectwork.videogamelover.view.CreateMessageDTO;
import com.projectwork.videogamelover.view.MessageDTO;

import jakarta.servlet.http.HttpSession;

@SpringBootTest
public class ChatTest {
	
	@Autowired
	ChatRestController chatController;
	
	@Test
	public void test(HttpSession session) {		
		
		int idChat = chatController.findChat(session, 253);
		chatController.createMessage(new CreateMessageDTO(idChat, 252, "Ciao Mondo!"));
		chatController.createMessage(new CreateMessageDTO(idChat, 253, "Ciao a te!"));
		assertEquals(2, chatController.chatVersion(idChat));
		chatController.createMessage(new CreateMessageDTO(idChat, 252, "Ciao Mondoooo!"));
		chatController.createMessage(new CreateMessageDTO(idChat, 253, "Ciao!"));
		assertEquals(4, chatController.chatVersion(idChat));
		List<MessageDTO> messages = chatController.getConversation(idChat);
		assertEquals(4, messages.size());
		assertEquals("Ciao Mondo!", messages.get(0).getText());
		assertEquals(252, messages.get(2).getUserId());
		assertEquals("Ciao!", messages.get(3).getText());
		
	}
}
