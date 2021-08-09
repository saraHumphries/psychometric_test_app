package com.codeclan.example.psychometric_tests_app.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "question_text")
    private String questionText;

    @ManyToOne
    @JsonIgnoreProperties(value = "questions")
    @JoinColumn(name = "test_id", nullable = false)
    private Test test;


    public Question(String questionText, Test test) {
        this.questionText = questionText;
        this.test = test;
    }

    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public Test getTest() {
        return test;
    }

    public void setTest(Test test) {
        this.test = test;
    }
}
