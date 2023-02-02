package com.projectwork.videogamelover.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Chat {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@ManyToOne
	private User user1;
	@ManyToOne
	private User user2;
	
	public Chat() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Chat(User user1, User user2) {
		super();
		this.user1 = user1;
		this.user2 = user2;
	}

	public Chat(int id, User user1, User user2) {
		super();
		this.id = id;
		this.user1 = user1;
		this.user2 = user2;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getUser1() {
		return user1;
	}
	public void setUser1(User user1) {
		this.user1 = user1;
	}
	public User getUser2() {
		return user2;
	}
	public void setUser2(User user2) {
		this.user2 = user2;
	}
}
