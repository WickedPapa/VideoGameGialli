package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Insertion;
import com.projectwork.videogamelover.model.repositories.InsertionRepository;
import com.projectwork.videogamelover.view.InsertionDTO;

@RestController
public class InsertionRestController {
	
	@Autowired
	InsertionRepository insertionRepo;
	
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
			InsertionDTO dto){
		List<Insertion> insertionList = new LinkedList<>();
		for(Insertion insertion : insertionRepo.findAll()) {
			insertionList.add(insertion);
		}
		return false;
	}
}
