package com.projectwork.videogamelover.view;

import com.projectwork.videogamelover.model.enums.AccountType;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class AccountDTO {
	private AccountType type;
	private String username;
	private String password;
	private String name;
	private String surname;
	private String email;
}
