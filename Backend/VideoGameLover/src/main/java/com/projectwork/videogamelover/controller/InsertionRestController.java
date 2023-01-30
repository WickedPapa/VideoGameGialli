package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
import com.projectwork.videogamelover.model.repositories.InsertionRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.InsertionDTO;
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
	
	@GetMapping("/insertion")
	public List<Insertion> readAllInsertions(){
		List<Insertion> insertionList = new LinkedList<>();
		for(Insertion insertion : insertionRepo.findAll()) {
			insertionList.add(insertion);
		}
		return insertionList;
	}
	
	@PostMapping("/insertion")
	public boolean createOne(
			@RequestBody
			InsertionDTO dto,
			HttpSession session){
		Object obj = session.getAttribute("logged");
		if(accountManager.isLogged() && ((obj instanceof User && ((User)obj).getId() == dto.getPublisherId() ))) {
			Optional<User> optUser = userRepo.findById(dto.getPublisherId());
			Optional<VideoGame> optTradeGame = vgRepo.findById(dto.getTradeGameId());
			List<VideoGame> wishList = new LinkedList<>();
//			for(int id : dto.getWishListIds()) {
//				Optional<VideoGame> optWishGame = vgRepo.findById(id);
//				if(optWishGame.isPresent()) {
//					wishList.add(optWishGame.get());
//				}else {
//					return false;
//				}
//			}
			for(int i = 0; i<3; i++) {
				Optional<VideoGame> optWishGame = vgRepo.findById(dto.getWishListIds().get(i));
				if(optWishGame.isPresent()) {
					wishList.add(optWishGame.get());
				}else {
					return false;
				}
			}
			if(optUser.isPresent() && optTradeGame.isPresent()) {
				List<Image> gallery = new LinkedList<>();
				for(String imageLink : dto.getGallery()) {
					Image img = new Image(imageLink);
					gallery.add(img);
				}
				Insertion insertion = new Insertion(
						dto.getTitle(), 
						dto.getDescription(), 
						optUser.get(), 
						gallery,
						optTradeGame.get(),
						wishList
						);
				insertionRepo.save(insertion);
				return true;
			}
		}
		return false;
	}
	
	@PutMapping("/insertion")
	public boolean updateInsertion(@RequestBody UpdateInsertionDTO dto,HttpSession session) {
		if(accountManager.isLogged() && session.getAttribute("logged") instanceof Admin) {
			Optional<Insertion> opt = insertionRepo.findById(dto.getInsertionId());
			if(opt.isPresent()) {
				Insertion insertion = opt.get();
				insertion.setApproved(dto.isApproved());
				insertion.setOutcome(dto.getOutcome());
				insertionRepo.save(insertion);
				return true;
			}
		}
		return false;
	}
	
	//TODO: delete, readOne(forse)
}
