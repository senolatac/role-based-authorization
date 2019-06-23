package com.sha.serverusermanagement.service;

import com.sha.serverusermanagement.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    User findByUsername(String username);

    List<User> findAllUsers();
}
