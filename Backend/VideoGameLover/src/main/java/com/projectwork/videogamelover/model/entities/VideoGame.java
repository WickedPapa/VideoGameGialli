package com.projectwork.videogamelover.model.entities;




import java.util.List;

import com.projectwork.videogamelover.model.enums.Console;
import com.projectwork.videogamelover.model.enums.Genre;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class VideoGame {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	@ElementCollection(targetClass = Genre.class) 
	@CollectionTable(
			name = "videogame_genre", 
			joinColumns = @JoinColumn(name = "videogame_id")
			) 
	@Enumerated(EnumType.STRING) 
	@Column(name = "genre_names") 
	private List<Genre> genres;
	private int year;
	private Console console;
	@OneToOne
	private Image cover;
	
	public VideoGame() {
	
	}

	
	
	public VideoGame(String name, List<Genre> genres, int year, Console console, Image cover) {
		super();
		this.name = name;
		this.genres = genres;
		this.year = year;
		this.console = console;
		this.cover = cover;
	}



	public VideoGame(int id, String name, List<Genre> genres, int year, Console console, Image cover) {
		super();
		this.id = id;
		this.name = name;
		this.genres = genres;
		this.year = year;
		this.console = console;
		this.cover = cover;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public List<Genre> getGenres() {
		return genres;
	}



	public void setGenre(List<Genre> genres) {
		this.genres = genres;
	}



	public int getYear() {
		return year;
	}



	public void setYear(int year) {
		this.year = year;
	}



	public Console getConsole() {
		return console;
	}



	public void setConsole(Console console) {
		this.console = console;
	}



	public Image getCover() {
		return cover;
	}



	public void setCover(Image cover) {
		this.cover = cover;
	}
	
	
	
	

	

}
