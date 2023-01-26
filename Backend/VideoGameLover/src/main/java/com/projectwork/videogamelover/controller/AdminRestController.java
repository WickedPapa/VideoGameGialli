package com.projectwork.videogamelover.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.projectwork.videogamelover.model.accounts.IAccountManager;

@RestController
public class AdminRestController {
	
	@Autowired
	IAccountManager accountManager;
	
}
