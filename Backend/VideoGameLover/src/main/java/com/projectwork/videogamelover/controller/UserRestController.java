package com.projectwork.videogamelover.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.AccountDTO;

@RestController
public class UserRestController {
	
	@Autowired
	IAccountManager accountManager;
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/account")
	public boolean createAccount(
			@RequestBody
			AccountDTO dto) {
		int id = accountManager.createAccount(dto);
		if(id > 0) {
			User user = new User(id);
			userRepo.save(user);
			return true;
		}
		return false;
	}
	
	@DeleteMapping("/account")
	public boolean deleteAccount(
			@RequestBody
			int id) {
		Optional<User> opt = userRepo.findById(id);
		if(opt.isEmpty()) {
			return false;
		}
		User user = opt.get();
		boolean control = accountManager.deleteAccount(user.getAccountId());
		if(control) {
			userRepo.deleteById(id);
			return true;
		}
		return false;
	}
	
}
