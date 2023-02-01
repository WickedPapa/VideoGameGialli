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
import com.projectwork.videogamelover.model.entities.Image;
import com.projectwork.videogamelover.model.entities.VideoGame;
import com.projectwork.videogamelover.model.repositories.ConsoleRepository;
import com.projectwork.videogamelover.model.repositories.GenreRepository;
import com.projectwork.videogamelover.model.repositories.ImageRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.VideoGameDTO;

@RestController
public class VideoGameRestController {
	
	@Autowired
	VideoGameRepository vgRepo;
	@Autowired
	GenreRepository genreRepo;
	@Autowired
	ConsoleRepository consoleRepo;
	@Autowired
	ImageRepository imageRepo;
	
	@PostMapping("/videgame")
	public boolean createVideoGame(
			@RequestBody
			VideoGameDTO dto) {
		
		List<Genre> genres = new LinkedList<>();
		for(String str : dto.getGenre()) {
			Optional<Genre> optGenre = genreRepo.findAllByGenre(str);
			if(optGenre.isPresent()) {
				genres.add(optGenre.get());
			}else {
				return false;
			}
		}
		
		Console console;
		Optional<Console> optConsole = consoleRepo.findByConsole(dto.getConsole());
			if(optConsole.isPresent()) {
				console= optConsole.get();
			}else {
				return false;
			}
	
		Image image;
		Optional<Image> optImage = imageRepo.findByLink(dto.getCover());
		if(optImage.isPresent()) {
			image = optImage.get();
		}else {
			image = imageRepo.save(new Image(dto.getCover()));
		}
		
		VideoGame videoGame = new VideoGame(
				dto.getName().toUpperCase(),
				genres,
				dto.getYear(),
				console,
				image
				);
		if(vgRepo.save(videoGame)!=null) {
			return true;
		}
		return true;
	}
	
	@GetMapping("videogame")
	public List<VideoGame> readAll(){
		List<VideoGame> videogames = new LinkedList<>();
		for(VideoGame videoGame : vgRepo.findAll()) {
			videogames.add(videoGame);
		}
		return videogames;
	}
}
