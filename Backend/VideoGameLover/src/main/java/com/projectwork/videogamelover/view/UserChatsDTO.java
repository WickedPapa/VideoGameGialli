package com.projectwork.videogamelover.view;

import java.util.List;

public class UserChatsDTO {
	private int userId;
	private List<Integer> chatIds;
	public UserChatsDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserChatsDTO(int userId, List<Integer> chatIds) {
		super();
		this.userId = userId;
		this.chatIds = chatIds;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public List<Integer> getChatIds() {
		return chatIds;
	}
	public void setChatIds(List<Integer> chatIds) {
		this.chatIds = chatIds;
	}
	
	
}
