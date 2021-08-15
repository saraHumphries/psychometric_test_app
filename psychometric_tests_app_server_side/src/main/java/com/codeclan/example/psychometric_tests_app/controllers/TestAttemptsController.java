package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.results.Answer;
import com.codeclan.example.psychometric_tests_app.models.results.PsychometricTestAttempt;
import com.codeclan.example.psychometric_tests_app.repositories.AnswerRepository;
import com.codeclan.example.psychometric_tests_app.repositories.PsychometricTestAttemptRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TestAttemptsController {

    @Autowired
    PsychometricTestAttemptRepository psychometricTestAttemptRepository;

    @Autowired
    AnswerRepository answerRepository;



    @GetMapping(value = "/test_attempts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<PsychometricTestAttempt>> getAllTestAttempts() {
        return new ResponseEntity<>(psychometricTestAttemptRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "test_attempts/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<PsychometricTestAttempt>> getTestAttempt(@PathVariable Long id) {
        return new ResponseEntity<>(psychometricTestAttemptRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/test_attempts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<PsychometricTestAttempt> postTestAttempt(@RequestBody PsychometricTestAttempt psychometricTestAttempt) {
        psychometricTestAttemptRepository.save(psychometricTestAttempt);
        return new ResponseEntity<>(psychometricTestAttempt, HttpStatus.CREATED);
    }

    
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
