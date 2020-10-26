package io.trello.trelloapp;

import io.trello.trelloapp.authentication.User;
import io.trello.trelloapp.authentication.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class TrelloCloneApp {

  @Value("${client.instance.local}")
  private String apiDev;

	public static void main(String[] args) {
		SpringApplication.run(TrelloCloneApp.class, args);
	}

	@Autowired
	private UserRepository repository;

	@PostConstruct
	public void initUsers() {
		List<User> users = Stream.of(
				new User("user1", "pwd1"),
				new User("user2", "pwd2"),
				new User("user3", "pwd3")
		).collect(Collectors.toList());
		repository.saveAll(users);
	}


	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins(apiDev).allowedMethods("*");
			}
		};
	}
}
