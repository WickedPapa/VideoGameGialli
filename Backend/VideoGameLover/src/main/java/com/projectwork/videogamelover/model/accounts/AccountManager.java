package com.projectwork.videogamelover.model.accounts;

import java.security.MessageDigest;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.LoginDTO;

import jakarta.servlet.http.HttpSession;

public class AccountManager implements IAccountManager {

	private HttpSession session;
	private UserRepository userRepo;
	private AdminRepository adminRepo;

	public AccountManager(HttpSession session, UserRepository userRepo, AdminRepository adminRepo) {
		super();
		this.session = session;
		this.userRepo = userRepo;
		this.adminRepo = adminRepo;
	}

	@Override
	public Integer createAccount(AccountDTO dto) {
		String encPassword = encryptPassword(dto.getPassword());
		dto.setPassword(encPassword);
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account";
		ResponseEntity<Integer> response = restTemplate.postForEntity(url, dto, Integer.class);
		int id = response.getBody(); // ritorna l'id dell'account o -1 se non è riuscito a crearlo o esiste già
		return id;
	}

	@Override
	public void deleteAccount(int id) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account/{id}";
		// TODO: solo l'admin può
		// TODO: da provare
		restTemplate.delete(url, id);
	}

	@Override
	public boolean logOut() {
		// TODO: da parlarne domani
		// TODO: dobbiamo dare contezza?
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/logout";
		ResponseEntity<Boolean> response = restTemplate.getForEntity(url, Boolean.class);
		if(response.getBody()) {
			try {
				session.removeAttribute("logged");
				return true;
			} catch (IllegalStateException e) {
				return false;
			}
		}
		return false;
	}

	@Override
	public boolean tryToLog(String username, String password) {
		String encPassword = encryptPassword(password);
		LoginDTO loginDto = new LoginDTO(username, encPassword);
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account";
		ResponseEntity<Boolean> response = restTemplate.postForEntity(url, loginDto, Boolean.class);
		return response.getBody();
	}

	@Override
	public boolean isLogged() {
		return (session.getAttribute("logged") != null);
	}

	@Override
	public AccountDTO getAccount(int id) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account/{id}";
		ResponseEntity<AccountDTO> response = restTemplate.getForEntity(url, AccountDTO.class, id);
		AccountDTO account = response.getBody();
		return account;
	}

	@Override
	public int getAccountId() {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account/";
		ResponseEntity<Integer> response = restTemplate.getForEntity(url, Integer.class);
		return response.getBody();
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

}
