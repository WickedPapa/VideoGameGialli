package com.projectwork.videogamelover.view;

public class LoginDTO {
	private String username;
	private String password;
	
	public LoginDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public LoginDTO(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}
	
	public String getUsername() {
		return username;
	}
	
	public void setSurname(String username) {
		this.username = username;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
