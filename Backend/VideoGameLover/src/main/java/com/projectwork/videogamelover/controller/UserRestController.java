package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.entities.VideoGame;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.AddGameDTO;
import com.projectwork.videogamelover.view.IdDTO;
import com.projectwork.videogamelover.view.UserInfoDTO;

@RestController
public class UserRestController {
	
	@Autowired //dependency injection, fornisce un'istanza della variabile successiva
	IAccountManager accountManager;
	@Autowired
	UserRepository userRepo;
	@Autowired
	VideoGameRepository vgRepo;
	
	@PostMapping("/user")
	public boolean createUser(
			@RequestBody
			AccountDTO dto) {
		int accountId = accountManager.createAccount(dto);
		if(accountId > 0) {
			User user = new User(accountId);
			userRepo.save(user);
			return true;
		}
		return false;
	}
	
	@GetMapping("/user")
	public List<UserInfoDTO> readAll(){
		List<UserInfoDTO> usersInfo = new LinkedList<>();
		for(User user : userRepo.findAll()) {
			AccountDTO account = accountManager.getAccount(user.getAccountId());
			UserInfoDTO userInfo = new UserInfoDTO(
					user.getId(),
					account.getUsername(),
					account.getName(),
					account.getSurname(),
					account.getEmail(),
					user.getRating(),
					user.getVideogames()
					);
			usersInfo.add(userInfo);
		}
		return usersInfo;
	}
	
	@GetMapping("/user/{id}")
	public UserInfoDTO readOne(
			@PathVariable("id")
			int id){
		Optional<User> opt = userRepo.findById(id);
		if(opt.isPresent()) {
			User user = opt.get();
			AccountDTO account = accountManager.getAccount(user.getAccountId());
			UserInfoDTO userInfo = new UserInfoDTO(
					user.getId(),
					account.getUsername(),
					account.getName(),
					account.getSurname(),
					account.getEmail(),
					user.getRating(),
					user.getVideogames()
					);
			return userInfo;
		}
		return null;
	}
	
	@PutMapping("/user")
	public boolean updateUser(
			@RequestBody
			AddGameDTO dto) {
		if(accountManager.isLogged()) {
			Optional<User> opt = userRepo.findById(dto.getIdUser());
			if(opt.isPresent()) {
				User user = opt.get();
				List<VideoGame> list = user.getVideogames();
				for(VideoGame videoGame : vgRepo.findAllById(dto.getVideogamesToPush())) {
					list.add(videoGame);
					userRepo.save(user);
					return true;
				}
			}
		}
		return false;
	}
	
	@DeleteMapping("/user")
	public boolean deleteUser(
			@RequestBody
			IdDTO dto) {
		//TODO: cancellare gli annunci dell'utente
		Optional<User> opt = userRepo.findById(dto.getId());
		if(opt.isEmpty()) {
			return false;
		}
		User user = opt.get();
		accountManager.deleteAccount(user.getAccountId());
		userRepo.deleteById(dto.getId());
		return true;
	}

	
}
