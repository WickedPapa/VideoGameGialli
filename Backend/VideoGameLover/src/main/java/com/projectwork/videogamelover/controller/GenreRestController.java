package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Console;
import com.projectwork.videogamelover.model.entities.Genre;
import com.projectwork.videogamelover.model.repositories.GenreRepository;

@RestController
public class GenreRestController {
	
	@Autowired
	GenreRepository genreRepo;
	
	@PostMapping("/genre")
	public boolean createGenre(
			@RequestBody
			String genreStr) {
		String genreStrfix = genreStr.substring(1, genreStr.length()-1);
		Optional<Genre> opt = genreRepo.findByGenre(genreStrfix.toUpperCase());
		if(opt.isPresent()) {
			return false;
		}
		genreRepo.save(new Genre(genreStrfix.toUpperCase()));
		return true;
	}
	
	@GetMapping("/genre")
	public List<Genre> readAll(){
		List<Genre> genres = new LinkedList<>();
		for(Genre genre : genreRepo.findAll()) {
			genres.add(genre);
		}
		return genres;
	}
}
