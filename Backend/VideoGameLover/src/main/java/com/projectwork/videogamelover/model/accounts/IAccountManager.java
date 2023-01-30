package com.projectwork.videogamelover.model.accounts;


import com.projectwork.videogamelover.view.AccountDTO;


//JAVADOOOOOOOOOOOOOOOOOOOOOOOOC

public interface IAccountManager {
	Integer createAccount(AccountDTO dto);
	int getAccountId();
	AccountDTO getAccount(int id);
	void deleteAccount(int id);
	boolean logOut();
	boolean tryToLog(String username, String password);
	boolean isLogged();
}
