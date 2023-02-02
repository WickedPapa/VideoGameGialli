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
import com.projectwork.videogamelover.model.repositories.ConsoleRepository;

@RestController
public class ConsoleRestController {

	@Autowired
	ConsoleRepository consoleRepo;
	
	@PostMapping("/console")
	public boolean createGenre(
			@RequestBody
			String consoleStr) {
		String consoleStrfix = consoleStr.substring(1, consoleStr.length()-1);
		Optional<Console> opt = consoleRepo.findByConsole(consoleStrfix.toUpperCase());
		if(opt.isPresent()) {
			return false;
		}
		consoleRepo.save(new Console(consoleStrfix.toUpperCase()));
		return true;
	}
	
	@GetMapping("/console")
	public List<Console> readAll(){
		List<Console> consoles = new LinkedList<>();
		for(Console console : consoleRepo.findAll()) {
			consoles.add(console);
		}
		return consoles;
	}
}
