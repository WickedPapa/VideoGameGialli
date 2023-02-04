package com.projectwork.videogamelover.view;

public class ConfirmDTO {
	private boolean thisIsYou;
	private boolean logged;
	private boolean hasGame;
	private boolean alreadyHave;
	
	public ConfirmDTO() {

	}

	public ConfirmDTO(boolean thisIsYou, boolean logged, boolean hasGame, boolean alreadyHave) {
		super();
		this.thisIsYou = thisIsYou;
		this.logged = logged;
		this.hasGame = hasGame;
		this.alreadyHave = alreadyHave;
	}

	public boolean isThisIsYou() {
		return thisIsYou;
	}

	public void setThisIsYou(boolean thisIsYou) {
		this.thisIsYou = thisIsYou;
	}

	public boolean isLogged() {
		return logged;
	}

	public void setLogged(boolean logged) {
		this.logged = logged;
	}

	public boolean isHasGame() {
		return hasGame;
	}

	public void setHasGame(boolean hasGame) {
		this.hasGame = hasGame;
	}

	public boolean isAlreadyHave() {
		return alreadyHave;
	}

	public void setAlreadyHave(boolean alreadyHave) {
		this.alreadyHave = alreadyHave;
	}

	
	

	
	
	
	
	
}
