package com.projectwork.videogamelover.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Image;
import com.projectwork.videogamelover.model.repositories.ImageRepository;

@RestController
public class ImageRestController {

	@Autowired
	ImageRepository imageRepo;
	
	@PostMapping("/image")
	public boolean createImage(
			@RequestBody
			String imageStr){
		String imageStrfix = imageStr.substring(1, imageStr.length()-1);
		Optional<Image> opt = imageRepo.findByLink(imageStrfix.toUpperCase());
		if(opt.isPresent()) {
			return false;
		}
		imageRepo.save(new Image(imageStrfix.toUpperCase()));
		return true;
	}
	
}
