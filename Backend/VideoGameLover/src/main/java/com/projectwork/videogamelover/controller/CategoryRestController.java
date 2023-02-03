package com.projectwork.videogamelover.controller;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.entities.Admin;
import com.projectwork.videogamelover.model.entities.Category;
import com.projectwork.videogamelover.model.entities.Insertion;
import com.projectwork.videogamelover.model.repositories.CategoryRepository;
import com.projectwork.videogamelover.model.repositories.InsertionRepository;
import com.projectwork.videogamelover.view.createCategoryDTO;

import jakarta.servlet.http.HttpSession;

@RestController
public class CategoryRestController {
	
	@Autowired
	CategoryRepository catRepo;
	@Autowired
	InsertionRepository insRepo;
	
	@PostMapping("/category")
		public int createCategory(@RequestBody createCategoryDTO dto, HttpSession session) {
		
		List<Insertion> category= new LinkedList<>();
		
		if( !(session.getAttribute("logged") instanceof Admin)) {
			return -1;
		}
		
		String description = dto.getDescription();
		
		if(description.equals("")||description==null) {
			return -1;
		}
		
		if(dto.getInsertionsTitle()==null) {
			return -1;
		}
		
		for( String title : dto.getInsertionsTitle()) {
			Optional<Insertion> optIns = insRepo.findByTitle(title);
			//if(optIns.isEmpty()) {
				//return -1;
			//}
			//else {
				Insertion ins = optIns.get();
				category.add(ins);		
			//}
		}
		
		Category cat = catRepo.save(new Category(description, category));
		
		
		return cat.getId();
		
	}
	
	@GetMapping("/category")
	public List<Category> getAllCategories(){
		
		List<Category> categories = new LinkedList<>();
		
		for(Category cat : catRepo.findAll()) {
			categories.add(cat);
		}
		
		return categories;
	}
	
	
}
