package com.seamus.rest.webservices.restfulwebservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class RestfulWebServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestfulWebServicesApplication.class, args);
	}
	
	
	// Allow Cross Origin Requests
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				// Enable EVERY mapping (endpoint)
				registry.addMapping("/**")
					// With ALL request types: GET, PUT, POST
					.allowedMethods("*")
					// For specified hostname/origin
					.allowedOrigins("http://localhost:3000");
			}
		};
	}

}
