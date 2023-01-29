package com.projectwork.videogamelover.view;

import java.util.List;

public class AddGameDTO {
	private int idUser;
	private List<Integer> videogamesToPush;
	
	public AddGameDTO() {
		
	}

	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
	}

	public List<Integer> getVideogamesToPush() {
		return videogamesToPush;
	}

	public void setVideogamesToPush(List<Integer> videogamesToPush) {
		this.videogamesToPush = videogamesToPush;
	}
	
	
	
}

