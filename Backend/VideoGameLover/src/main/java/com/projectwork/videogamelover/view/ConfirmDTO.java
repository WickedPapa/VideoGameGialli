package com.projectwork.videogamelover.view;

public class ConfirmDTO {
	private boolean logged;
	private boolean hasGame;
	
	public ConfirmDTO() {

	}

	public ConfirmDTO(boolean logged, boolean hasGame) {
		super();
		this.logged = logged;
		this.hasGame = hasGame;
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
	
	
	
	
}
