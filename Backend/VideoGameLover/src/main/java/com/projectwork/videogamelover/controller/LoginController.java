package com.projectwork.videogamelover.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.enums.AccountType;
import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AdminInfoDTO;
import com.projectwork.videogamelover.view.InfoDTO;
import com.projectwork.videogamelover.view.LoggedDTO;
import com.projectwork.videogamelover.view.LoginDTO;
import com.projectwork.videogamelover.view.UserInfoDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class LoginController {

	@Autowired
	IAccountManager accountManager;
	@Autowired
	UserRepository userRepo;
	@Autowired
	AdminRepository adminRepo;

	@PostMapping("/login")
	public LoggedDTO login(@RequestBody LoginDTO dto, HttpSession session) {
		LoggedDTO loggedDto = new LoggedDTO(false, null, null);
		if (accountManager.tryToLog(dto.getUsername(), dto.getPassword())) {
			InfoDTO info = (InfoDTO) session.getAttribute("info");
			if (session.getAttribute("type") == AccountType.USER) {
				User user = (User) session.getAttribute("logged");
				UserInfoDTO userInfoDto = new UserInfoDTO(user.getId(), info.getUsername(), info.getName(),
						info.getSurname(), info.getEmail(), user.getRating(), user.getVideogames());
				loggedDto = new LoggedDTO(true, AccountType.USER, userInfoDto);
			} else if (session.getAttribute("type") == AccountType.ADMIN) {
				Admin admin = (Admin) session.getAttribute("logged");
				AdminInfoDTO adminInfoDto = new AdminInfoDTO(admin.getId(), info.getUsername(), info.getName(),
						info.getSurname(), info.getEmail());
				loggedDto = new LoggedDTO(true, AccountType.ADMIN, adminInfoDto);
			}
		}
		return loggedDto;
	}

	@GetMapping("/logout")
	public boolean logout(HttpSession session) {
		return accountManager.logOut();
	}

	@GetMapping("/isLogged")
	public boolean isLogged(HttpSession session) {
		return accountManager.isLogged();
	}
	
	@GetMapping("/whoIsLogged")
	public AccountType whoIsLogged(HttpSession session) {
		if(accountManager.isLogged()) {
			return (AccountType)session.getAttribute("type");
		}
		return AccountType.GUEST;
	}
	
	@GetMapping("/userInfo")
	public UserInfoDTO getUserInfo(HttpSession session) {
		InfoDTO info = (InfoDTO) session.getAttribute("info");
		User user = (User) session.getAttribute("logged");
		return new UserInfoDTO(user.getId(), info.getUsername(), info.getName(),
				info.getSurname(), info.getEmail(), user.getRating(), user.getVideogames());
		
	}
	
	@GetMapping("/adminInfo")
	public AdminInfoDTO getAdminInfo(HttpSession session) {
		InfoDTO info = (InfoDTO) session.getAttribute("info");
		Admin admin = (Admin) session.getAttribute("logged");
		return new AdminInfoDTO(admin.getId(), info.getUsername(), info.getName(),
				info.getSurname(), info.getEmail());
		
	}
	
	
	
	
	
}
