package com.projectwork.videogamelover.view;

import java.util.List;

import com.projectwork.videogamelover.model.entities.VideoGame;

public class UserInfoDTO implements IAccountInfoDTO {

	private int userId;
	private String username;
	private String name;
	private String surname;
	private String email;
	private int rating;
	private List<VideoGame> videogames;
	
	public UserInfoDTO() {
		
	}

	public UserInfoDTO(int userId, String username, String name, String surname, String email, int rating,
			List<VideoGame> videogames) {
		super();
		this.userId = userId;
		this.username = username;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.rating = rating;
		this.videogames = videogames;
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

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public List<VideoGame> getVideogames() {
		return videogames;
	}

	public void setVideogames(List<VideoGame> videogames) {
		this.videogames = videogames;
	}
	
}
