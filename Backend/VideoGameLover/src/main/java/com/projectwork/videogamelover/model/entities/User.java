package com.projectwork.videogamelover.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int rating = 0;
	private int accountId;
	
	public User(int accountId) {
		super();
		this.accountId = accountId;
	}

	public int getAccountId() {
		return accountId;
	}
}
