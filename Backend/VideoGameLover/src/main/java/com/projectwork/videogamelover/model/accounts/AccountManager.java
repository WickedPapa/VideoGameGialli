package com.projectwork.videogamelover.model.accounts;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.enums.AccountType;
import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.InfoDTO;
import com.projectwork.videogamelover.view.LoginDTO;
import com.projectwork.videogamelover.view.UpdateAccountDTO;
import com.projectwork.videogamelover.view.UpdatePasswordDTO;

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
		String url = "http://localhost:8080/accounts";
		ResponseEntity<Integer> response = restTemplate.postForEntity(url, dto, Integer.class);
		int id = response.getBody(); // ritorna l'id dell'account o -1 se non è riuscito a crearlo o esiste già
		return id;
	}

	@Override
	public void deleteAccount(int id) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/accounts/{id}";
		restTemplate.delete(url, id);
	}

	@Override
	public boolean logOut() {
		try {
			session.removeAttribute("logged");
			return true;
		} catch (IllegalStateException e) {
			return false;
		}
	}

	@Override
	public boolean tryToLog(String username, String password) {
		LoginDTO loginDto = new LoginDTO(username, password);
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/accounts/login";
		ResponseEntity<Integer> response = restTemplate.postForEntity(url, loginDto, Integer.class);
		if (response.getBody() >= 0) {
			Optional<Admin> optAdmin = adminRepo.findByAccountId(response.getBody());
			Optional<User> optUser = userRepo.findByAccountId(response.getBody());

			if (optUser.isPresent()) {
				AccountDTO account = getAccount(response.getBody());

				InfoDTO infoDto = new InfoDTO(account.getUsername(), account.getName(), account.getSurname(),
						account.getEmail());

				session.setAttribute("logged", optUser.get());
				session.setAttribute("type", AccountType.USER);
				session.setAttribute("info", infoDto);

				return true;

			}

			else if (optAdmin.isPresent()) {
				AccountDTO account = getAccount(response.getBody());

				InfoDTO info = new InfoDTO(account.getUsername(), account.getName(), account.getSurname(),
						account.getEmail());

				session.setAttribute("logged", optAdmin.get());
				session.setAttribute("type", AccountType.ADMIN);
				session.setAttribute("info", info);

				return true;
			}
		}
		return false;
	}

	@Override
	public boolean isLogged() {
		return (session.getAttribute("logged") != null);
	}

	@Override
	public AccountDTO getAccount(int accountId) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/accounts/account/{accounId}";
		ResponseEntity<AccountDTO> response = restTemplate.getForEntity(url, AccountDTO.class, accountId);
		AccountDTO account = response.getBody();
		return account;
	}

	@Override
	public int getAccountId() {
		Object obj = session.getAttribute("logged");

		if (obj instanceof Admin) {
			return ((Admin) obj).getAccountId();
		} else if (obj instanceof User) {
			return ((User) obj).getAccountId();
		} else {
			return -1;
		}
	}

	@Override
	public boolean changePassword(UpdatePasswordDTO dto, int accountId) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/accounts/updatePsw/{id}";
		try {
			restTemplate.put(url, dto, accountId);
			return true;
		} catch (RestClientException e) {
			return false;
		}
	}

	@Override
	public boolean changeInfo(UpdateAccountDTO dto, int accountId) {
		RestTemplate restTemplate = new RestTemplate();
		String url = "http://localhost:8080/accounts/updateInfo/{id}";
		try {
			restTemplate.put(url, dto, accountId);
			return true;
		} catch (RestClientException e) {
			return false;
		}
	}
}
