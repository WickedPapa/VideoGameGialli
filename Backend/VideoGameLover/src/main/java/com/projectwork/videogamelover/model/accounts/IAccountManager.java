package com.projectwork.videogamelover.model.accounts;

import com.projectwork.videogamelover.view.AccountDTO;

public interface IAccountManager {
	Integer createAccount(AccountDTO dto);
	boolean deleteAccount(int id);
	boolean logOut();
	boolean tryToLog(String username, String password);
	boolean isLogged();
	boolean isAdmin();
	boolean isUser();
}
