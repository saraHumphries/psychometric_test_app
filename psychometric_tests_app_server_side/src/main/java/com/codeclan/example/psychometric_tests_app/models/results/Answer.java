package com.codeclan.example.psychometric_tests_app.models.results;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne

    @JoinColumn(name = "test_attempt_id", nullable = false)
    private TestAttempt testAttempt;

    @ManyToOne
    @JsonIgnoreProperties(value = "answers")
//    @JsonBackReference(value = "question_answers")
    @JoinColumn(name = "question_id")
    private Question question;

    @Column(name = "response")
    private int response;

    public Answer(TestAttempt testAttempt, Question question, int response) {
        this.testAttempt = testAttempt;
        this.question = question;
        this.response = response;
    }

    public Answer() {
    }

    public TestAttempt getTestAttempt() {
        return testAttempt;
    }

    public void setTestAttempt(TestAttempt testAttempt) {
        this.testAttempt = testAttempt;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public int getResponse() {
        return response;
    }

    public void setResponse(int response) {
        this.response = response;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
