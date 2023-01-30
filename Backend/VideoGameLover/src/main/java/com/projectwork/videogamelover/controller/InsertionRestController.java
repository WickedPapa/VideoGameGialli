package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.Insertion;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.repositories.InsertionRepository;
import com.projectwork.videogamelover.view.InsertionDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class InsertionRestController {
	
	@Autowired
	InsertionRepository insertionRepo;
	@Autowired
	IAccountManager accountManager;
	
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
			//TODO: 
		}
		
		return false;
	}
}
