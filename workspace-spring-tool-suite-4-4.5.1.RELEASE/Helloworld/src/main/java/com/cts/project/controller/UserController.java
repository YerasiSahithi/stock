package com.cts.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

import com.cts.project.dao.UserRepository;
import com.cts.project.pojo.User;
@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
@RequestMapping("/getAllUser")
	public Iterable<User> getAllUser() {
	return userRepository.findAll();

}
@PostMapping("/saveUser")
public User saveUser(@RequestBody User user) {
	System.out.println(user);
	userRepository.save(user);

	return user;
}
@PutMapping("/UpdateUser/{username}")
public User UpdateUser(@RequestBody User user, @PathVariable("username") String username) {
	System.out.println(user);
	userRepository.save(user);
	user.setUsername(username);
	return user;
}

}
