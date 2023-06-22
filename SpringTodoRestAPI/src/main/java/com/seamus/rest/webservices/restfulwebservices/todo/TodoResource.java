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

@RestController
public class TodoResource {
	
	private TodoService todoService;

	public TodoResource(TodoService todoService) {
		super();
		this.todoService = todoService;
	}


	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodos(@PathVariable String username) {
		return todoService.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo retrieveTodo(@PathVariable String username, 
			@PathVariable int id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, 
			@PathVariable int id) {
		todoService.deleteById(id);
		// Return a success status with custom response (noContent or some custom content)
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable String username, 
			@PathVariable int id, @RequestBody Todo todo) {
		// returns null/Void -> would be better if this returned the todo as well...
		todoService.updateTodo(todo);
		return todo;
	}
	
	
	@PostMapping("/users/{username}/todos")
	public Todo createTodo(@PathVariable String username, 
			@RequestBody Todo todo) {
		// returns null/Void -> would be better if this returned the todo as well...
		Todo createdTodo = todoService.addTodo(username, todo.getDescription(), 
				todo.getTargetDate(), todo.isDone() );
		return createdTodo;
	}
}
