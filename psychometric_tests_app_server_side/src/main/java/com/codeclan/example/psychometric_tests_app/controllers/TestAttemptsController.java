package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.codeclan.example.psychometric_tests_app.repositories.TestAttemptRepository;
import org.aspectj.weaver.ast.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class TestAttemptsController {

    @Autowired
    TestAttemptRepository testAttemptRepository;



    @GetMapping(value = "/test_attempts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<TestAttempt>> getAllTestAttempts() {
        return new ResponseEntity<>(testAttemptRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "test_attempts/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<TestAttempt>> getTestAttempt(@PathVariable Long id) {
        return new ResponseEntity<>(testAttemptRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/test_attempts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<TestAttempt> postTestAttempt(@RequestBody TestAttempt testAttempt) {
        testAttemptRepository.save(testAttempt);
        return new ResponseEntity<>(testAttempt, HttpStatus.CREATED);
    }



}
