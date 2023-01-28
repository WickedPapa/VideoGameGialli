package com.projectwork.videogamelover.model.accounts;

import java.util.List;

import com.projectwork.videogamelover.view.AccountDTO;

public interface IAccountManager {
	Integer createAccount(AccountDTO dto);
	AccountDTO getAccount(int id);
	void deleteAccount(int id);
	boolean logOut();
	boolean tryToLog(String username, String password);
	boolean isLogged();
	boolean isAdmin();
	boolean isUser();
}
