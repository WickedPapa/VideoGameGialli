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
		Optional<Image> opt = imageRepo.findByLink(imageStr.toUpperCase());
		if(opt.isPresent()) {
			return false;
		}
		imageRepo.save(new Image(imageStr.toUpperCase()));
		return true;
	}
	
}
