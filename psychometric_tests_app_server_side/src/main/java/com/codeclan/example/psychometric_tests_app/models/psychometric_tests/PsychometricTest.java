package com.codeclan.example.psychometric_tests_app.models.psychometric_tests;

import com.codeclan.example.psychometric_tests_app.models.results.PsychometricTestAttempt;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tests")
public class PsychometricTest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @OneToMany(mappedBy = "test", fetch = FetchType.LAZY)
    @JsonManagedReference(value = "test_questions")
    private List<Question> questions;

    @OneToMany(mappedBy = "test", fetch = FetchType.LAZY)
    @JsonIgnore
//    @JsonManagedReference(value = "test_test_attempts")
    private List<PsychometricTestAttempt> psychometricTestAttempts;

    public PsychometricTest(String title) {
        this.title = title;
        this.questions = new ArrayList<>();
        this.psychometricTestAttempts = new ArrayList<>();
    }

    public PsychometricTest() {
        this.questions = new ArrayList<>();
        this.psychometricTestAttempts = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<PsychometricTestAttempt> getTestAttempts() {
        return psychometricTestAttempts;
    }

    public void setTestAttempts(List<PsychometricTestAttempt> psychometricTestAttempts) {
        this.psychometricTestAttempts = psychometricTestAttempts;
    }
}
