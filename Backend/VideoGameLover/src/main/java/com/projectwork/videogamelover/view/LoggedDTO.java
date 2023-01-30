package com.projectwork.videogamelover.view;

import com.projectwork.videogamelover.model.enums.AccountType;

public class LoggedDTO {
	private boolean logged;
	private AccountType accountType;
	private IAccountInfoDTO accountInfoDto;
	
	public LoggedDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public LoggedDTO(boolean logged, AccountType accountType, IAccountInfoDTO accountInfoDto) {
		super();
		this.logged = logged;
		this.accountType = accountType;
		this.accountInfoDto = accountInfoDto;
	}

	public boolean isLogged() {
		return logged;
	}

	public void setLogged(boolean logged) {
		this.logged = logged;
	}

	public AccountType getAccountType() {
		return accountType;
	}

	public void setAccountType(AccountType accountType) {
		this.accountType = accountType;
	}

	public IAccountInfoDTO getUserInfoDto() {
		return accountInfoDto;
	}

	public void setUserInfoDto(IAccountInfoDTO accountInfoDto) {
		this.accountInfoDto = accountInfoDto;
	}
	
	
}
