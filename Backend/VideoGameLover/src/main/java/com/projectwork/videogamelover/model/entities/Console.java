package com.projectwork.videogamelover.model.entities;

import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Console {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(unique = true)
	private String console;

	public Console() {
		super();
	}

	public Console(String console) {
		super();
		this.console = console;
	}

	public Console(int id, String console) {
		super();
		this.id = id;
		this.console = console;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getConsole() {
		return console;
	}

	public void setConsole(String console) {
		this.console = console;
	}

	@Override
	public int hashCode() {
		return Objects.hash(console, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Console other = (Console) obj;
		return Objects.equals(console, other.console) && id == other.id;
	}

	@Override
	public String toString() {
		return "Console [id=" + id + ", console=" + console + "]";
	}
	
	
	
}
