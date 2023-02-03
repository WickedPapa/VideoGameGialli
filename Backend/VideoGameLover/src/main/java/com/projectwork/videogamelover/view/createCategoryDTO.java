package com.projectwork.videogamelover.view;

import java.util.List;

public class createCategoryDTO {

	private String description;
	private List<String> insertionsTitle;

	public createCategoryDTO() {
	}

	public createCategoryDTO(String description, List<String> insertionsTitle) {
		super();
		this.description = description;
		this.insertionsTitle = insertionsTitle;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<String> getInsertionsTitle() {
		return insertionsTitle;
	}

	public void setInsertionsTitle(List<String> insertionsTitle) {
		this.insertionsTitle = insertionsTitle;
	}
	

	
	
	
}
