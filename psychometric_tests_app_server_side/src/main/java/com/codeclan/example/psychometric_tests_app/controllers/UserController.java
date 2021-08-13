package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.codeclan.example.psychometric_tests_app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<User>> getUsersbyCustomQueryString(
            @RequestParam(name = "test_attempt_id", required = false) Long test_attempt_id
    ) {
        if(test_attempt_id != null) {
            return new ResponseEntity<>(userRepository.findUsersByTestAttemptsId(test_attempt_id), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
        }
    }

    @GetMapping(value= "/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<User>> getAUser(@PathVariable Long id) {
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }



}
