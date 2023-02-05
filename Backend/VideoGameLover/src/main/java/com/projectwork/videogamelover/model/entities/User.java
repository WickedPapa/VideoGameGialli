package com.projectwork.videogamelover.model.entities;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;


@Entity
public class User{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int rating = 0;
	private int accountId;
	@ManyToMany
	private List<VideoGame> videogames = new LinkedList<>();
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(int accountId) {
		super();
		this.accountId = accountId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public List<VideoGame> getVideogames() {
		return videogames;
	}

	public void setVideogames(List<VideoGame> videogames) {
		this.videogames = videogames;
	}

	@Override
	public int hashCode() {
		return Objects.hash(accountId, id, rating, videogames);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		return accountId == other.accountId && id == other.id && rating == other.rating
				&& Objects.equals(videogames, other.videogames);
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", rating=" + rating + ", accountId=" + accountId + ", videogames=" + videogames
				+ "]";
	}
	
	

}
