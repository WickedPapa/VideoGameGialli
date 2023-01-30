package com.projectwork.videogamelover.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Genre {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String genre;
	
	public Genre() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Genre(int id, String genre) {
		super();
		this.id = id;
		this.genre = genre;
	}

	public Genre(String genre) {
		super();
		this.genre = genre;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}
	
	
	
	
	
}
