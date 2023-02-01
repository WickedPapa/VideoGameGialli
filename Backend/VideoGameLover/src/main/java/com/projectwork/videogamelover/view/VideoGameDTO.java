package com.projectwork.videogamelover.view;

import java.util.List;

public class VideoGameDTO {
	private String name;
	private List<String> genre;
	private int year;
	private String console;
	private String cover;
	
	public VideoGameDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VideoGameDTO(String name, List<String> genre, int year, String console, String cover) {
		super();
		this.name = name;
		this.genre = genre;
		this.year = year;
		this.console = console;
		this.cover = cover;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<String> getGenre() {
		return genre;
	}

	public void setGenre(List<String> genre) {
		this.genre = genre;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getConsole() {
		return console;
	}

	public void setConsole(String console) {
		this.console = console;
	}

	public String getCover() {
		return cover;
	}

	public void setCover(String cover) {
		this.cover = cover;
	}
}
