package com.projectwork.videogamelover.view;

import com.projectwork.videogamelover.model.enums.Outcome;

public class UpdateInsertionDTO {
	private int insertionId;
	private boolean approved;
	private Outcome outcome;
	
	public UpdateInsertionDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UpdateInsertionDTO(int insertionId, boolean approved, Outcome outcome) {
		super();
		this.insertionId = insertionId;
		this.approved = approved;
		this.outcome = outcome;
	}

	public int getInsertionId() {
		return insertionId;
	}

	public void setInsertionId(int insertionId) {
		this.insertionId = insertionId;
	}

	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean approved) {
		this.approved = approved;
	}

	public Outcome getOutcome() {
		return outcome;
	}

	public void setOutcome(Outcome outcome) {
		this.outcome = outcome;
	}
	
	
}
