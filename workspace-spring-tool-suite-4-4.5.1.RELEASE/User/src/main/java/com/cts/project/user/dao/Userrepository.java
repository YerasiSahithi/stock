package com.cts.project.user.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.project.user.pojo.User;

public interface Userrepository extends  CrudRepository<User,Integer> {
	User findByUserNameAndPassword(String userName,String password);
	Optional<User> findByEmail(String email);
	
	User findByUserNameAndPasswordAndConfirmed(String userName,String password,String string);

}

