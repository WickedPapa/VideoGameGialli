package com.projectwork.videogamelover.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.enums.AccountType;
import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.AdminInfoDTO;
import com.projectwork.videogamelover.view.IAccountInfoDTO;
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
	public LoggedDTO login(@RequestBody LoginDTO dto, HttpSession session) { // TODO non mandare dto.getpassword ma la password criptata
		LoggedDTO loggedDto = new LoggedDTO(false, null, null);
		if (accountManager.tryToLog(dto.getUsername(), dto.getPassword())) {
			int id = accountManager.getAccountId();
			Optional<User> optUser = userRepo.findByAccountId(id);
			Optional<Admin> optAdmin = adminRepo.findByAccountId(id);
			AccountDTO accountDto = accountManager.getAccount(id);
			if (accountDto != null) {
				if (optUser.isPresent()) {
					User user = optUser.get();
					session.setAttribute("logged", user);
					UserInfoDTO userInfoDto = new UserInfoDTO(
						user.getId(), 
						accountDto.getUsername(),
						accountDto.getName(), 
						accountDto.getSurname(), 
						accountDto.getEmail(), 
						user.getRating(),
						user.getVideogames());
					loggedDto = new LoggedDTO(true, AccountType.USER, userInfoDto);
				}else if (optAdmin.isPresent()) {
					Admin admin = optAdmin.get();
					session.setAttribute("logged", admin);
					AdminInfoDTO adminInfoDto = new AdminInfoDTO(
						admin.getId(), 
						accountDto.getUsername(),
						accountDto.getName(),
						accountDto.getSurname(), 
						accountDto.getEmail());
					loggedDto = new LoggedDTO(true, AccountType.ADMIN, adminInfoDto);
				}
			} 
		}
		return loggedDto;
	}
	
	
	//TODO: implementare getAccountId(), logout e islogged

}
