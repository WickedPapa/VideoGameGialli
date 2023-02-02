package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Console;
import com.projectwork.videogamelover.model.entities.Genre;
import com.projectwork.videogamelover.model.entities.Image;
import com.projectwork.videogamelover.model.entities.User;
import com.projectwork.videogamelover.model.entities.VideoGame;
import com.projectwork.videogamelover.model.repositories.ConsoleRepository;
import com.projectwork.videogamelover.model.repositories.GenreRepository;
import com.projectwork.videogamelover.model.repositories.ImageRepository;
import com.projectwork.videogamelover.model.repositories.VideoGameRepository;
import com.projectwork.videogamelover.view.VideoGameDTO;

import jakarta.servlet.http.HttpSession;

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
	
	@PostMapping("/videogames")
	public boolean createVideoGame(
			@RequestBody
			VideoGameDTO dto) {
		Optional<VideoGame> opt = vgRepo.findByName(dto.getName().toUpperCase());
		if(opt.isPresent()) {
			return false;
		}
		
		List<Genre> genres = new LinkedList<>();
		for(String str : dto.getGenre()) {
			Optional<Genre> optGenre = genreRepo.findByGenre(str.toUpperCase());
			if(optGenre.isPresent()) {
				genres.add(optGenre.get());
			}else {
				return false;
			}
		}
		
		Console console;
		Optional<Console> optConsole = consoleRepo.findByConsole(dto.getConsole().toUpperCase());
			if(optConsole.isPresent()) {
				console= optConsole.get();
			}else {
				return false;
		}
	
		Image image;
		Optional<Image> optImage = imageRepo.findByLink(dto.getCover().toUpperCase());
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
		
		vgRepo.save(videoGame);
		return true;
	}
	
	@GetMapping("/videogames")
	public List<VideoGame> readAll(){
		List<VideoGame> videogames = new LinkedList<>();
		for(VideoGame videoGame : vgRepo.findAll()) {
			videogames.add(videoGame);
		}
		return videogames;
	}
	
	@GetMapping("/videogames/user")
	public List<VideoGame> readUserGames(HttpSession session){
		Object obj = session.getAttribute("logged");
		if(obj instanceof User) {
			return ((User)obj).getVideogames();
		}
		return new LinkedList<>();
	}
	
	@GetMapping("/videogames/{id}")
	public VideoGame readOne(
			@PathVariable
			int id){
		Optional<VideoGame> opt = vgRepo.findById(id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
	}
}
