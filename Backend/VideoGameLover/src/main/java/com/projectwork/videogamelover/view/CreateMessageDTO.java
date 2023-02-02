package com.projectwork.videogamelover.view;

public class CreateMessageDTO {
	
	private int chatId;
	private int userId;
	private String text;
	
	public CreateMessageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public CreateMessageDTO(int userId, String text) {
		super();
		this.userId = userId;
		this.text = text;
	}
	
	public CreateMessageDTO(int chatId, int userId, String text) {
		super();
		this.chatId = chatId;
		this.userId = userId;
		this.text = text;
	}
	public int getChatId() {
		return chatId;
	}
	public void setChatId(int chatId) {
		this.chatId = chatId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
}
