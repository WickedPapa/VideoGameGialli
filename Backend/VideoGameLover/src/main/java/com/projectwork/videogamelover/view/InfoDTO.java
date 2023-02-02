package com.projectwork.videogamelover.view;

public class InfoDTO {
	private String username;
	private String name;
	private String surname;
	private String email;
	
	
	
	
	public InfoDTO(String username, String name, String surname, String email) {
		super();
		this.username = username;
		this.name = name;
		this.surname = surname;
		this.email = email;
	}
	public InfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}	
}
