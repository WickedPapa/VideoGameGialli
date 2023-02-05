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
import com.projectwork.videogamelover.model.entities.Image;
import com.projectwork.videogamelover.model.entities.Insertion;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.entities.VideoGame;
import com.projectwork.videogamelover.model.enums.Outcome;
import com.projectwork.videogamelover.model.repositories.ImageRepository;
import com.projectwork.videogamelover.model.repositories.InsertionRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.ConfirmDTO;
import com.projectwork.videogamelover.view.InsertionDTO;
import com.projectwork.videogamelover.view.ProposalDTO;
import com.projectwork.videogamelover.view.UpdateInsertionDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class InsertionRestController {

	@Autowired
	InsertionRepository insertionRepo;
	@Autowired
	IAccountManager accountManager;
	@Autowired
	UserRepository userRepo;
	@Autowired
	VideoGameRepository vgRepo;
	@Autowired
	ImageRepository imgRepo;

	@GetMapping("/insertion")
	public List<Insertion> readAllInsertions() {
		List<Insertion> insertionList = new LinkedList<>();
		for (Insertion insertion : insertionRepo.findAll()) {
			insertionList.add(insertion);
		}
		return insertionList;
	}

	@PostMapping("/insertion")
	public boolean createOne(@RequestBody InsertionDTO dto, HttpSession session) {
		if (dto.getTitle().equals("") || dto.getTitle() == null || dto.getDescription().equals("")
				|| dto.getDescription() == null || dto.getGallery() == null || dto.getWishListIds() == null
				|| dto.getTradeGameId() == 0) {
			return false;
		}
		Object obj = session.getAttribute("logged");
		if (accountManager.isLogged() && (obj instanceof User)) {
			User user = (User) obj;
			Optional<VideoGame> optTradeGame = vgRepo.findById(dto.getTradeGameId());
			List<VideoGame> wishList = new LinkedList<>();
			for (int i = 0; i < 3; i++) {
				Optional<VideoGame> optWishGame = vgRepo.findById(dto.getWishListIds().get(i));
				if (optWishGame.isPresent()) {
					wishList.add(optWishGame.get());
				} else {
					return false;
				}
			}
			if (optTradeGame.isPresent()) {
				List<Image> gallery = new LinkedList<>();
				for (String imageLink : dto.getGallery()) {
					Image img = new Image(imageLink);
					imgRepo.save(img);
					gallery.add(img);
				}
				Insertion insertion = new Insertion(dto.getTitle(), dto.getDescription(), user, gallery,
						optTradeGame.get(), wishList);
				insertionRepo.save(insertion);
				return true;
			}
		}
		return false;
	}

	@PutMapping("/insertion")
	public boolean updateInsertion(@RequestBody UpdateInsertionDTO dto, HttpSession session) {
		if (accountManager.isLogged() && session.getAttribute("logged") instanceof Admin) {
			Optional<Insertion> opt = insertionRepo.findById(dto.getInsertionId());
			if (opt.isPresent()) {
				Insertion insertion = opt.get();
				insertion.setApproved(dto.isApproved());
				insertion.setOutcome(dto.getOutcome());
				insertionRepo.save(insertion);
				return true;
			}
		}
		return false;
	}

	@PostMapping("/insertion/confirm")
	public ConfirmDTO createOne(@RequestBody ProposalDTO dto, HttpSession session) {

		ConfirmDTO confirmDto = new ConfirmDTO();

		if (!(accountManager.isLogged()) || !(session.getAttribute("logged") instanceof User)) {
			confirmDto.setLogged(false);
			return confirmDto;
		}
		confirmDto.setLogged(true);

		User buyer = (User) session.getAttribute("logged");

		if (buyer.getId() == dto.getPublisher().getId()) {
			confirmDto.setThisIsYou(false);
			return confirmDto;
		}
		confirmDto.setThisIsYou(true);

		confirmDto.setHasGame(false);
		for (VideoGame game : buyer.getVideogames()) {
			if (game.getName().equals(dto.getWishGame().getName())) {
				confirmDto.setHasGame(true);
				
			}
		}
		if(!confirmDto.isHasGame()) {
			return confirmDto;
		}

		
		confirmDto.setAlreadyHave(false);
		for (VideoGame game : buyer.getVideogames()) {
			if (game.getName().equals(dto.getTradeGame().getName())) {
				confirmDto.setAlreadyHave(true);
				return confirmDto;
			}
		}
		
		VideoGame trade = dto.getTradeGame();
		VideoGame wish = dto.getWishGame();
		User publisher = dto.getPublisher();
		publisher.getVideogames().add(wish);
		buyer.getVideogames().add(trade);
		publisher.setRating((publisher.getRating())+1);
		buyer.setRating((buyer.getRating())+1);
		int index = 0;
		for (int i =0; i<publisher.getVideogames().size(); i++) {
			if(publisher.getVideogames().get(i).getId() == trade.getId()) {
				index = i;
			}
		}
		publisher.getVideogames().remove(index);
		
		for (int i =0; i<buyer.getVideogames().size(); i++) {
			if(buyer.getVideogames().get(i).getId() == wish.getId()) {
				index = i;
			}
		}
		buyer.getVideogames().remove(index);
		System.out.println(buyer);
		buyer = userRepo.save(buyer);
		System.out.println(buyer);
		System.out.println(publisher);
		userRepo.save(publisher);
		System.out.println(publisher);
		//dovremmo aggiornare la sessione del publisher (se fosse loggato al momento dello scambio)
		session.setAttribute("logged", buyer);
		Optional<Insertion> opt = insertionRepo.findById(dto.getInsertionId());
		if(opt.isPresent()) {
			Insertion ins = opt.get();
			ins.setOutcome(Outcome.SUCCESSFUL);
			insertionRepo.save(ins);
		}
		return confirmDto;
	}

	@GetMapping("/insertion/{id}")
	public boolean setStatus(@PathVariable int id) {
		Optional<Insertion> opt = insertionRepo.findById(id);
		if(opt.isPresent()) {
			Insertion ins = opt.get();
			if(ins.isApproved()){
				ins.setApproved(false);
				insertionRepo.save(ins);
				return false;
			}else {
				ins.setApproved(true);
				insertionRepo.save(ins);
				return true;
			}
		}
		return false;
	}
}
