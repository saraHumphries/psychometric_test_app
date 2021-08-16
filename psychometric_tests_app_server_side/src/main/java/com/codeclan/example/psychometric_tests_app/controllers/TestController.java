package com.codeclan.example.psychometric_tests_app.controllers;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.LikertOption;
import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Test;
import com.codeclan.example.psychometric_tests_app.repositories.LikertOptionRepository;
import com.codeclan.example.psychometric_tests_app.repositories.QuestionRepository;
import com.codeclan.example.psychometric_tests_app.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class TestController {

    @Autowired
    TestRepository testRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    LikertOptionRepository likertOptionRepository;

    @GetMapping(value = "/psychometric_tests")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Test>> getAllPsychometricTests() {
        return new ResponseEntity<>(testRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/psychometric_tests/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<Test>> getPsychometricTestById(@PathVariable Long id) {
        return new ResponseEntity<>(testRepository.findById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/psychometric_tests/{id}/summary")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getTestSummary(@PathVariable Long id) {

        String[][] summary = testRepository.findTestSummaryByTestId(id);

        Map<Integer, Map<Integer, Integer>> summaryMap = new HashMap<>();
        for (String[] line : summary) {
            Integer questionId = Integer.parseInt(line[2]);
            Integer response = Integer.parseInt(line[4]);
            Integer count = Integer.parseInt(line[5]);

            if(!summaryMap.containsKey(questionId)) {
                Map<Integer, Integer> responseCounts = new HashMap<>();
                responseCounts.put(response, count);
                summaryMap.put(questionId, responseCounts);
            }
            else {
                summaryMap.get(questionId).put(response, count);
            }

        }

        return new ResponseEntity(summaryMap, HttpStatus.OK);
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
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Question> postTestAttempt(@RequestBody Question question) {
        questionRepository.save(question);
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @GetMapping(value = "/likert_options")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<LikertOption>> getAllLikertOptionsByCustomParams(
            @RequestParam(name = "test_id", required = false) Long test_id
    ) {
        if(test_id != null) {
            return new ResponseEntity<>(likertOptionRepository.findLikertOptionsByTestId(test_id), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(likertOptionRepository.findAll(), HttpStatus.OK);
        }
    }





}
