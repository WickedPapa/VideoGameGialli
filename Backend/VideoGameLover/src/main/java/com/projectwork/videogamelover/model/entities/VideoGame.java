package com.projectwork.videogamelover.model.entities;




import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

@Entity
public class VideoGame {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String name;
	@ManyToMany
	private List<Genre> genre;
	private int year;
	@ManyToOne
	private Console console;
	@OneToOne
	private Image cover;
	
	public VideoGame() {

	}

	public VideoGame(String name, List<Genre> genre, int year, Console console, Image cover) {
		super();
		this.name = name;
		this.genre = genre;
		this.year = year;
		this.console = console;
		this.cover = cover;
	}

	public VideoGame(int id, String name, List<Genre> genre, int year, Console console, Image cover) {
		super();
		this.id = id;
		this.name = name;
		this.genre = genre;
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

	public List<Genre> getGenre() {
		return genre;
	}

	public void setGenre(List<Genre> genre) {
		this.genre = genre;
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
