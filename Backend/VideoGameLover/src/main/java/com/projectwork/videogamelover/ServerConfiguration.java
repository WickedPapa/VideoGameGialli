package com.projectwork.videogamelover;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.projectwork.videogamelover.model.accounts.AccountManager;
import com.projectwork.videogamelover.model.accounts.IAccountManager;
import com.projectwork.videogamelover.model.repositories.AdminRepository;
import com.projectwork.videogamelover.model.repositories.UserRepository;

import jakarta.servlet.http.HttpSession;

@Configuration
public class ServerConfiguration {
	
	@Bean
	IAccountManager getAccountManager(
			HttpSession session,
			AdminRepository adminRepo,
			UserRepository userRepo) {
		//return new DummyAccountManager(session, userRepo, adminRepo);
		return new AccountManager(session, userRepo, adminRepo);
	}
}
