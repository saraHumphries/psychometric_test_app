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

import java.util.*;

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

    @PostMapping(value = "/psychometric_tests")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Test> postNewPsychometricTest(@RequestBody Test test) {
        testRepository.save(test);
        return new ResponseEntity<>(test, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/psychometric_tests/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity deletePsychometricTestById(@PathVariable Long id) {
        testRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.GONE);
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

    @GetMapping(value = "/psychometric_tests/{id}/total_scores")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity getTotalScores(@PathVariable Long id) {
        String[][] totalScores = testRepository.getAllTotalScoresByTestId(id);

        List<Integer> totalScoresList = new ArrayList<>();
        for (String[] line : totalScores) {
            Integer totalScore = Integer.parseInt(line[1]);

            totalScoresList.add(totalScore);
        }

        return new ResponseEntity(totalScoresList, HttpStatus.OK);
    }


    @GetMapping(value = "/questions")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Question>> getAllQuestionsbyCustomeParams(
            @RequestParam(name = "psychometric_test_id", required = false) Long psychometric_test_id
    ) {
        if(psychometric_test_id != null) {
            return new ResponseEntity<>(questionRepository.findQuestionsByTestId(psychometric_test_id), HttpStatus.OK);
        }
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
        if (test_id != null) {
            return new ResponseEntity<>(likertOptionRepository.findLikertOptionsByTestId(test_id), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(likertOptionRepository.findAll(), HttpStatus.OK);
        }
    }

    @GetMapping(value = "/likert_options/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Optional<LikertOption>> getLikertOptionById (@PathVariable Long id) {
        return new ResponseEntity<>(likertOptionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/likert_options")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<LikertOption> postLikertOption(@RequestBody LikertOption likertOption) {
        likertOptionRepository.save(likertOption);
        return new ResponseEntity<>(likertOption, HttpStatus.OK);
    }


}
