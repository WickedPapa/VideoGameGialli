package com.projectwork.videogamelover.model.entities;

import com.projectwork.videogamelover.model.enums.Genre;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class VideoGame {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	private Genre genre;
	private int year;
	
	public VideoGame(int id, String name, Genre genre, int year) {
		this.id = id;
		this.name = name;
		this.genre = genre;
		this.year = year;
	}

	public VideoGame(String name, Genre genre, int year) {
		this.name = name;
		this.genre = genre;
		this.year = year;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Genre getGenre() {
		return genre;
	}

	public void setGenre(Genre genre) {
		this.genre = genre;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

}
