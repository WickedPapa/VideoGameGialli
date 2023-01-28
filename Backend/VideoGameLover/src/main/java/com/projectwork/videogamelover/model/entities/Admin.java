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
public class Admin{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int accountId;
	
	public Admin(int accountId) {
		super();
		this.accountId = accountId;
	}

}
