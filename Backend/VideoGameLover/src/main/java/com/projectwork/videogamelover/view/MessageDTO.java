package com.projectwork.videogamelover.view;

import java.sql.Timestamp;

public class MessageDTO {
	private int userId;
	private String username;
	private int rating;
	private Timestamp timestamp;
	private String text;
	
	public MessageDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MessageDTO(int userId, String username, int rating, Timestamp timestamp, String text) {
		super();
		this.userId = userId;
		this.username = username;
		this.rating = rating;
		this.timestamp = timestamp;
		this.text = text;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
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
