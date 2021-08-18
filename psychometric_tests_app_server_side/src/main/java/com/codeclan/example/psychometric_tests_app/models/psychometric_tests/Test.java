package com.codeclan.example.psychometric_tests_app.models.psychometric_tests;

import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "tests")
public class Test {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "info")
    private String info;

    @OneToMany(mappedBy = "test", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonManagedReference(value = "test_questions")
    private List<Question> questions;

    @OneToMany(mappedBy = "test", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnore
//    @JsonManagedReference(value = "test_test_attempts")
    private List<TestAttempt> testAttempts;

    @OneToMany(mappedBy = "test", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = "test")
    private List<LikertOption> likertOptions;

    public Test(String title, String info) {
        this.title = title;
        this.info = info;
        this.likertOptions = new ArrayList<>();
        this.questions = new ArrayList<>();
        this.testAttempts = new ArrayList<>();
    }

    public Test() {
        this.likertOptions = new ArrayList<>();
        this.questions = new ArrayList<>();
        this.testAttempts = new ArrayList<>();
    }

    public List<LikertOption> getLikertOptions() {
        return likertOptions;
    }

    public void setLikertOptions(List<LikertOption> likertOptions) {
        this.likertOptions = likertOptions;
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

    public List<TestAttempt> getTestAttempts() {
        return testAttempts;
    }

    public void setTestAttempts(List<TestAttempt> testAttempts) {
        this.testAttempts = testAttempts;
    }

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }
}
