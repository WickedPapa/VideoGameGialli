package com.projectwork.videogamelover.model.accounts;

import java.security.MessageDigest;
import java.util.List;

import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.UpdateAccountDTO;
import com.projectwork.videogamelover.view.UpdatePasswordDTO;

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
		if(session.getAttribute("logged")!=null) {
			try {
				session.removeAttribute("logged");
				return true;
			}catch(IllegalStateException e) {
				return false;
			}
		}
		return false;
	}

	@Override
	public boolean tryToLog(String username, String password) {
		String encPassword = encryptPassword(password);
		return (username.equals("WickedPapa")&&encPassword.equals(encryptPassword("ciao")));
	}

	@Override
	public boolean isLogged() {
		return (session.getAttribute("logged")!=null);
	}

	@Override
	public AccountDTO getAccount(int id) {
		AccountDTO account = new AccountDTO("Pierino"+id, "agvzz"+id, "Piero"+id, "Trovato"+id, "piero.trovato@ciao.it"+id);
		return account;
	}

	@Override
	public int getAccountId() {
		return 6;
	}
	
	private String encryptPassword(String password) {
		try {
			MessageDigest m = MessageDigest.getInstance("MD5");

			/* Add plain-text password bytes to digest using MD5 update() method. */
			m.update(password.getBytes());

			/* Convert the hash value into bytes */
			byte[] bytes = m.digest();

			/*
			 * The bytes array has bytes in decimal form. Converting it into hexadecimal
			 * format.
			 */
			StringBuilder s = new StringBuilder();
			for (int i = 0; i < bytes.length; i++) {
				s.append(Integer.toString((bytes[i] & 0xff) + 0x100, 16).substring(1));
			}

			/* Complete hashed password in hexadecimal format */
			String encryptedpassword = s.toString();

			return encryptedpassword;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "";
	}

	@Override
	public boolean changePassword(UpdatePasswordDTO dto, int accountId) {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean changeInfo(UpdateAccountDTO dto, int accountId) {
		// TODO Auto-generated method stub
		return true;
	}
	
}
