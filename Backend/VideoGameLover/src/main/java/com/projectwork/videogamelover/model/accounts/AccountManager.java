package com.projectwork.videogamelover.model.accounts;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;

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
		
		//TODO: da provare
		restTemplate.delete(url, id);
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
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/account/{id}";
		ResponseEntity<AccountDTO> response = restTemplate.getForEntity(url, AccountDTO.class, id);
		AccountDTO account = response.getBody();
		return account;
	}

}
