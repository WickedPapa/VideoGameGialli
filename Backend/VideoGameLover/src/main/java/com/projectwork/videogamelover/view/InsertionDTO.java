package com.projectwork.videogamelover.view;

import java.util.LinkedList;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class InsertionDTO {
	
	
	private String title;
	private String description;
	private int publisherId;
	private List<String> gallery = new LinkedList<>();
	private int tradeGameId;
	private	List<Integer> wishListIds = new LinkedList<>();
	
	public InsertionDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InsertionDTO(String title, String description, int publisherId, List<String> gallery, int tradeGameId,
			List<Integer> wishListIds) {
		super();
		this.title = title;
		this.description = description;
		this.publisherId = publisherId;
		this.gallery = gallery;
		this.tradeGameId = tradeGameId;
		this.wishListIds = wishListIds;
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

	public int getPublisherId() {
		return publisherId;
	}

	public void setPublisherId(int publisherId) {
		this.publisherId = publisherId;
	}

	public List<String> getGallery() {
		return gallery;
	}

	public void setGallery(List<String> gallery) {
		this.gallery = gallery;
	}

	public int getTradeGameId() {
		return tradeGameId;
	}

	public void setTradeGameId(int tradeGameId) {
		this.tradeGameId = tradeGameId;
	}

	public List<Integer> getWishListIds() {
		return wishListIds;
	}

	public void setWishListIds(List<Integer> wishListIds) {
		this.wishListIds = wishListIds;
	}
	
	
}
