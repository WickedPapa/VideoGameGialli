package com.projectwork.videogamelover.model.entities;

import java.sql.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import com.projectwork.videogamelover.model.enums.Outcome;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Insertion {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private boolean approved = false;
	private String title;
	private String description;
	@ManyToOne
	private User publisher;
	@ManyToMany
	private List<Image> gallery = new LinkedList<>();
	@ManyToOne
	private VideoGame tradeGame;
	@ManyToMany
	private	List<VideoGame> wishList = new LinkedList<>();
	private Date publicationDate = new Date(new java.util.Date().getTime());
	private Outcome outcome = Outcome.WIP;
	
	public Insertion() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Insertion(String title, String description, User publisher, List<Image> gallery, VideoGame tradeGame,
			List<VideoGame> wishList) {
		super();
		this.title = title;
		this.description = description;
		this.publisher = publisher;
		this.gallery = gallery;
		this.tradeGame = tradeGame;
		this.wishList = wishList;
	}



	public Insertion(int id, boolean approved, String title, String description, User publisher, List<Image> gallery,
			VideoGame tradeGame, List<VideoGame> wishList, Date publicationDate, Outcome outcome) {
		super();
		this.id = id;
		this.approved = approved;
		this.title = title;
		this.description = description;
		this.publisher = publisher;
		this.gallery = gallery;
		this.tradeGame = tradeGame;
		this.wishList = wishList;
		this.publicationDate = publicationDate;
		this.outcome = outcome;
	}

	public Insertion(boolean approved, String title, String description, User publisher, List<Image> gallery,
			VideoGame tradeGame, List<VideoGame> wishList, Date publicationDate, Outcome outcome) {
		super();
		this.approved = approved;
		this.title = title;
		this.description = description;
		this.publisher = publisher;
		this.gallery = gallery;
		this.tradeGame = tradeGame;
		this.wishList = wishList;
		this.publicationDate = publicationDate;
		this.outcome = outcome;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getPublisher() {
		return publisher;
	}

	public void setPublisher(User publisher) {
		this.publisher = publisher;
	}

	public List<Image> getGallery() {
		return gallery;
	}

	public void setGallery(List<Image> gallery) {
		this.gallery = gallery;
	}

	public VideoGame getTradeGame() {
		return tradeGame;
	}

	public void setTradeGame(VideoGame tradeGame) {
		this.tradeGame = tradeGame;
	}

	public List<VideoGame> getWishList() {
		return wishList;
	}

	public void setWishList(List<VideoGame> wishList) {
		this.wishList = wishList;
	}

	public Date getPublicationDate() {
		return publicationDate;
	}

	public void setPublicationDate(Date publicationDate) {
		this.publicationDate = publicationDate;
	}

	public Outcome getOutcome() {
		return outcome;
	}

	public void setOutcome(Outcome outcome) {
		this.outcome = outcome;
	}



	@Override
	public int hashCode() {
		return Objects.hash(approved, description, gallery, id, outcome, publicationDate, publisher, title, tradeGame,
				wishList);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Insertion other = (Insertion) obj;
		return approved == other.approved && Objects.equals(description, other.description)
				&& Objects.equals(gallery, other.gallery) && id == other.id && outcome == other.outcome
				&& Objects.equals(publicationDate, other.publicationDate) && Objects.equals(publisher, other.publisher)
				&& Objects.equals(title, other.title) && Objects.equals(tradeGame, other.tradeGame)
				&& Objects.equals(wishList, other.wishList);
	}

	@Override
	public String toString() {
		return "Insertion [id=" + id + ", approved=" + approved + ", title=" + title + ", description=" + description
				+ ", publisher=" + publisher + ", gallery=" + gallery + ", tradeGame=" + tradeGame + ", wishList="
				+ wishList + ", publicationDate=" + publicationDate + ", outcome=" + outcome + "]";
	}
}
