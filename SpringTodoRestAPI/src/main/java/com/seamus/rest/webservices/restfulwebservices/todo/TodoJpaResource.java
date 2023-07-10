package com.seamus.rest.webservices.restfulwebservices.todo;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.seamus.rest.webservices.restfulwebservices.todo.repository.TodoRepository;

@RestController
public class TodoJpaResource {
	
	// NOTE: Better to use a todoService here as an intermediary 
	// rather than directly invoking the todoRepository
	private TodoRepository todoRepository;

	public TodoJpaResource(TodoRepository todoRepository) {
		super();
		this.todoRepository = todoRepository;
	}


	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username) {
		return todoRepository.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrieveTodo(@PathVariable String username, 
			@PathVariable int id) {
		return todoRepository.findById(id).get();
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, 
			@PathVariable int id) {
		todoRepository.deleteById(id);
		// Return a success status with custom response (noContent or some custom content)
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, 
			@PathVariable int id, @RequestBody Todo todo) {
		// returns null/Void -> would be better if this returned the todo as well...
		todoRepository.save(todo);
		return todo;
	}
	
	
	@PostMapping("/users/{username}/todos")
	public Todo createTodo(@PathVariable String username, 
			@RequestBody Todo todo) {
		// returns null/Void -> would be better if this returned the todo as well...
		// prevent update of existing Todo
		todo.setId(null);
		todo.setUsername(username);
		return todoRepository.save(todo);
	}
}
