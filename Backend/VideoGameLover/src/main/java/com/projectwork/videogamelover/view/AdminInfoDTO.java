package com.projectwork.videogamelover.view;

public class AdminInfoDTO implements IAccountInfoDTO {
	private int adminId;
	private String username;
	private String name;
	private String surname;
	private String email;
	
	
	public AdminInfoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public AdminInfoDTO(int adminId, String username, String name, String surname, String email) {
		super();
		this.adminId = adminId;
		this.username = username;
		this.name = name;
		this.surname = surname;
		this.email = email;
	}
	
	public int getAdminId() {
		return adminId;
	}
	
	public void setAdminId(int adminId) {
		this.adminId = adminId;
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
