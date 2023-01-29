package com.projectwork.videogamelover.model.accounts;

import java.util.List;

import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;

import jakarta.servlet.http.HttpSession;

public class DummyAccountManager implements IAccountManager{
	
	private HttpSession session;
	private UserRepository userRepo;
	private AdminRepository adminRepo;
	private int index = 0;
	
	
	public DummyAccountManager(HttpSession session, UserRepository userRepo, AdminRepository adminRepo) {
		super();
		this.session = session;
		this.userRepo = userRepo;
		this.adminRepo = adminRepo;
	}

	@Override
	public Integer createAccount(AccountDTO dto) {
		index++;
		return index;
	}

	@Override
	public void deleteAccount(int accountId) {
		
	}

	@Override
	public boolean logOut() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean tryToLog(String username, String password) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isLogged() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAdmin() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isUser() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public AccountDTO getAccount(int id) {
		AccountDTO account = new AccountDTO("Pierino"+id, "agvzz"+id, "Piero"+id, "Trovato"+id, "piero.trovato@ciao.it"+id);
		return account;
	}

	
}
