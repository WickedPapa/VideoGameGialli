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
import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.entities.VideoGame;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.AccountDTO;
import com.projectwork.videogamelover.view.AddGameDTO;
import com.projectwork.videogamelover.view.IdDTO;
import com.projectwork.videogamelover.view.InfoDTO;
import com.projectwork.videogamelover.view.UpdateAccountDTO;
import com.projectwork.videogamelover.view.UpdatePasswordDTO;
import com.projectwork.videogamelover.view.UserInfoDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class UserRestController {

	@Autowired // dependency injection, fornisce un'istanza della variabile successiva
	IAccountManager accountManager;
	@Autowired
	UserRepository userRepo;
	@Autowired
	VideoGameRepository vgRepo;

	@PostMapping("/user")
	public boolean createUser(@RequestBody AccountDTO dto) {
		int accountId = accountManager.createAccount(dto);
		if (accountId > 0) {
			User user = new User(accountId);
			userRepo.save(user);
			return true;
		}
		return false;
	}

	@GetMapping("/user")
	public List<UserInfoDTO> readAll() {
		List<UserInfoDTO> usersInfo = new LinkedList<>();
		for (User user : userRepo.findAll()) {
			AccountDTO account = accountManager.getAccount(user.getAccountId());
			UserInfoDTO userInfo = new UserInfoDTO(user.getId(), account.getUsername(), account.getName(),
					account.getSurname(), account.getEmail(), user.getRating(), user.getVideogames());
			usersInfo.add(userInfo);
		}
		return usersInfo;
	}

	@GetMapping("/user/this")
	public UserInfoDTO readThis(HttpSession session) {
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && obj instanceof User) {
			User user = (User) obj;
			AccountDTO accountDto = accountManager.getAccount(user.getAccountId());
			UserInfoDTO userInfo = new UserInfoDTO(user.getId(), accountDto.getUsername(), accountDto.getName(),
					accountDto.getSurname(), accountDto.getEmail(), user.getRating(), user.getVideogames());
			return userInfo;
		}
		return null;
	}

	@GetMapping("/user/{id}")
	public UserInfoDTO readOne(@PathVariable("id") int id) {
		Optional<User> opt = userRepo.findById(id);
		if (opt.isPresent()) {
			User user = opt.get();
			AccountDTO account = accountManager.getAccount(user.getAccountId());
			UserInfoDTO userInfo = new UserInfoDTO(user.getId(), account.getUsername(), account.getName(),
					account.getSurname(), account.getEmail(), user.getRating(), user.getVideogames());
			return userInfo;
		}
		return null;
	}

	@PutMapping("/user/games")
	public boolean updateUserGames(@RequestBody AddGameDTO dto, HttpSession session) {
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && ((obj instanceof User && ((User) obj).getId() == dto.getIdUser()))) {
			Optional<User> opt = userRepo.findById(dto.getIdUser());
			if (opt.isPresent()) {
				User user = opt.get();
				List<VideoGame> list = user.getVideogames();
				for (VideoGame videoGame : vgRepo.findAllById(dto.getVideogamesToPush())) {
					list.add(videoGame);
					userRepo.save(user);
					return true;
				}
			}
		}
		return false;
	}

	@GetMapping("/user/game/{gameId}")
	public boolean updateUserGame(@PathVariable int gameId, HttpSession session) {
		Optional<VideoGame> optGame = vgRepo.findById(gameId);
		if (optGame.isEmpty()) {
			return false;
		}
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && (obj instanceof User)) {
			User user = (User) obj;
			List<VideoGame> list = user.getVideogames();
			for(VideoGame vg : list) {
				if(vg.getId()==gameId) {
					return false;
				}
			}
			list.add(optGame.get());
			userRepo.save(user);
			return true;
		}
		return false;
	}

	@PutMapping("/user/psw")
	public boolean updateUserPassword(@RequestBody UpdatePasswordDTO dto, HttpSession session) {
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && (obj instanceof User)) {
			User user = (User) obj;
			return accountManager.changePassword(dto, user.getAccountId());
		}
		return false;
	}

	@PutMapping("/user/info")
	public boolean updateUserAccount(@RequestBody UpdateAccountDTO dto, HttpSession session) {
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && (obj instanceof User)) {
			User user = (User) obj;
			boolean test = accountManager.changeInfo(dto, user.getAccountId());
			if (test) {
				Object obj2 = session.getAttribute("info");
				if (obj2 instanceof InfoDTO) {
					InfoDTO info = (InfoDTO) obj2;
					if(dto.getUsername()!="") {
						info.setUsername(dto.getUsername());
					}
					if(dto.getEmail()!="") {
						info.setEmail(dto.getEmail());
					}
					session.setAttribute("info", info);
					return true;
				} else {
					return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}

	}

	@DeleteMapping("/user")
	public boolean deleteUser(@RequestBody int id, HttpSession session) {
		// TODO: cancellare gli annunci dell'utente oppure disabilitarli (esito =
		// chiuso)
		Object obj = session.getAttribute("logged");

		if (accountManager.isLogged()
				&& ((obj instanceof Admin) || (obj instanceof User && ((User) obj).getId() == id))) {
			Optional<User> opt = userRepo.findById(id);
			if (opt.isEmpty()) {
				return false;
			}
			User user = opt.get();
			accountManager.deleteAccount(user.getAccountId());
			userRepo.deleteById(id);
			return true;
		}
		return false;
	}
}
