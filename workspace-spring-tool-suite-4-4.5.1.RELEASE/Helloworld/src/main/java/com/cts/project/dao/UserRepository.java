package com.cts.project.dao;

import com.cts.project.pojo.User;

public interface UserRepository {

	Iterable<User> findAll();

}
