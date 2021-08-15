package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.PsychometricTest;
import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import com.codeclan.example.psychometric_tests_app.repositories.QuestionRepository;
import com.codeclan.example.psychometric_tests_app.repositories.PsychometricTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TestController {

    @Autowired
    PsychometricTestRepository psychometricTestRepository;

    @Autowired
    QuestionRepository questionRepository;

    @GetMapping(value = "/psychometric_tests")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<PsychometricTest>> getAllPsychometricTests() {
        return new ResponseEntity<>(psychometricTestRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/questions")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Question>> getAllQuestions() {
        return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/questions/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<Question>> getAQuestion(@PathVariable Long id) {
        return new ResponseEntity<>(questionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/questions")
    public ResponseEntity<Question> postTestAttempt(@RequestBody Question question) {
        questionRepository.save(question);
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }


}
