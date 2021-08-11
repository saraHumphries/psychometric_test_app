package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.results.Answer;
import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.codeclan.example.psychometric_tests_app.repositories.AnswerRepository;
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

    @Autowired
    AnswerRepository answerRepository;



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

//    @PutMapping(value = "/test_attempts/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<TestAttempt> updateTestAttemptAnswers(@PathVariable Long id, @RequestBody TestAttempt testAttempt) {
//        TestAttempt foundTestAttempt = testAttemptRepository.findById(id).get();
//        foundTestAttempt.set;
//    }






    @GetMapping(value = "/answers")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Answer>> getAllAnswers() {
        return new ResponseEntity<>(answerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "answers/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<Answer>> getAAnswer(@PathVariable Long id) {
        return new ResponseEntity<>(answerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/answers")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Answer> postAnswer(@RequestBody Answer answer) {
        answerRepository.save(answer);
        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }




}
