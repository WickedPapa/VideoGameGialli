package com.projectwork.videogamelover.model.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Admin{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int accountId;
	
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Admin(int accountId) {
		super();
		this.accountId = accountId;
	}

	public Admin(int id, int accountId) {
		super();
		this.id = id;
		this.accountId = accountId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

}
