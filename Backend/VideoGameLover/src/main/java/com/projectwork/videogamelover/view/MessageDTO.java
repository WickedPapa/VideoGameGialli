package com.projectwork.videogamelover.view;

import java.sql.Timestamp;

public class MessageDTO {
	private int userId;
	private Timestamp timestamp;
	private String text;
	public MessageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MessageDTO(Timestamp timestamp, String text) {
		super();
		this.timestamp = timestamp;
		this.text = text;
	}
	
	public MessageDTO(int userId, Timestamp timestamp, String text) {
		super();
		this.userId = userId;
		this.timestamp = timestamp;
		this.text = text;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	
	
}
