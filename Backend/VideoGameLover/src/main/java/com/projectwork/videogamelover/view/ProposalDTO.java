package com.projectwork.videogamelover.view;

import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.entities.VideoGame;

public class ProposalDTO {
	private int insertionId;
	private VideoGame tradeGame;
	private VideoGame wishGame;
	private User publisher;
	
	public ProposalDTO() {

	}

	
	public ProposalDTO(int insertionId, VideoGame tradeGame, VideoGame wishGame, User publisher) {
		super();
		this.insertionId = insertionId;
		this.tradeGame = tradeGame;
		this.wishGame = wishGame;
		this.publisher = publisher;
	}


	public int getInsertionId() {
		return insertionId;
	}


	public void setInsertionId(int insertionId) {
		this.insertionId = insertionId;
	}


	public VideoGame getTradeGame() {
		return tradeGame;
	}

	public void setTradeGame(VideoGame tradeGame) {
		this.tradeGame = tradeGame;
	}

	public VideoGame getWishGame() {
		return wishGame;
	}

	public void setWishGame(VideoGame wishGame) {
		this.wishGame = wishGame;
	}

	public User getPublisher() {
		return publisher;
	}

	public void setPublisher(User publisher) {
		this.publisher = publisher;
	}
	
	
	
	
}
