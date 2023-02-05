package com.projectwork.videogamelover.model.entities;

import java.sql.Timestamp;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Message {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne
	private User user;
	private Timestamp timestamp;
	private String text;
	@ManyToOne
	private Chat conversation;
	
	public Message() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Message(User user, Timestamp timestamp, String text, Chat conversation) {
		super();
		this.user = user;
		this.timestamp = timestamp;
		this.text = text;
		this.conversation = conversation;
	}

	public Message(int id, User user, Timestamp timestamp, String text, Chat conversation) {
		super();
		this.id = id;
		this.user = user;
		this.timestamp = timestamp;
		this.text = text;
		this.conversation = conversation;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
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

	public Chat getConversation() {
		return conversation;
	}

	public void setConversation(Chat conversation) {
		this.conversation = conversation;
	}

	@Override
	public int hashCode() {
		return Objects.hash(conversation, id, text, timestamp, user);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Message other = (Message) obj;
		return Objects.equals(conversation, other.conversation) && id == other.id && Objects.equals(text, other.text)
				&& Objects.equals(timestamp, other.timestamp) && Objects.equals(user, other.user);
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", user=" + user + ", timestamp=" + timestamp + ", text=" + text
				+ ", conversation=" + conversation + "]";
	}
}
