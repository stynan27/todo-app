package com.seamus.rest.webservices.restfulwebservices.basic;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

// Comment-out Basic auth configuration (Use JWT OAuth2 instead)
//@Configuration
public class BasicAuthenticationSecurityConfiguration {
	
	//1: Response to preflight request doesn't pass access control check
	//2: basic auth
	
	// May need .requestMatchers() instead of antMatchers() below
	// antMatchers() enables preflight check for basic auth config.
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// Prevent requests (403), if not authorized.
		http.authorizeHttpRequests(
				auth -> auth
					//.requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
					.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
					// Disable security checks for H2 console
				    .requestMatchers(PathRequest.toH2Console()).permitAll()
					.anyRequest().authenticated()
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
