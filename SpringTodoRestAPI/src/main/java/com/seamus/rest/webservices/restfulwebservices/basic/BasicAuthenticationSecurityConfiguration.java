package com.seamus.rest.webservices.restfulwebservices.basic;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.websocket.Session;


@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//Filter chain
	// Default: Authenticate ALL requests
	// instead use basic auth
	// disable CSRF (want CSRF if we have session mgmt)
	// statelesss rest API
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// Prevent requests (403), if not authorized.
		http.authorizeHttpRequests(
				auth -> auth.anyRequest().authenticated()
				);
		// Enable basic authentication
		http.httpBasic(Customizer.withDefaults());
		
		// Enable stateless sessions
		http.sessionManagement(
				session -> session.sessionCreationPolicy
				(SessionCreationPolicy.STATELESS)
		);
		
		http.csrf().disable();
		
		return http.build();
	}
}
