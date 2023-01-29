package com.projectwork.videogamelover.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.view.IdDTO;

@RestController
public class AdminRestController {
	
	@Autowired
	IAccountManager accountManager;
	@Autowired
	AdminRepository adminRepo;
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/admin")
	public boolean createAdmin(
			@RequestBody
			IdDTO dto) {
		Optional<User> opt = userRepo.findById(dto.getId());
		System.out.println(dto.getId());
		if(opt.isEmpty()) {
			System.out.println(opt.isEmpty());
			return false;
		}
		User user = opt.get();
		Admin admin = new Admin(user.getAccountId());
		adminRepo.save(admin);
		userRepo.deleteById(dto.getId());
		return true;
	}
	
	
}
