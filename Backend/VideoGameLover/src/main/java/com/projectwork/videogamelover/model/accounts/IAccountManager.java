package com.projectwork.videogamelover.model.accounts;


import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.UpdateAccountDTO;
import com.projectwork.videogamelover.view.UpdatePasswordDTO;


//JAVADOOOOOOOOOOOOOOOOOOOOOOOOC

public interface IAccountManager {
	Integer createAccount(AccountDTO dto);
	int getAccountId();
	AccountDTO getAccount(int id);
	void deleteAccount(int id);
	boolean logOut();
	boolean tryToLog(String username, String password);
	boolean isLogged();
	boolean changePassword(UpdatePasswordDTO dto, int accountId);
	boolean changeInfo(UpdateAccountDTO dto, int accountId);
}
