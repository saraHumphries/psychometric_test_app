package com.codeclan.example.psychometric_tests_app.models.psychometric_tests;

import com.codeclan.example.psychometric_tests_app.models.results.Answer;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "questions")
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "ordering")
    private Integer ordering;


    @Column(name = "question_text")
    private String questionText;

    @ManyToOne
    @JsonBackReference(value = "test_questions")
    @JoinColumn(name = "test_id", nullable = false)
    private Test test;

    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    @JsonIgnoreProperties
//    @JsonManagedReference(value = "question_answers")
    private List<Answer> answers;


    public Question(Integer ordering, String questionText, Test test) {
        this.ordering = ordering;
        this.questionText = questionText;
        this.test = test;
        this.answers = new ArrayList<>();
    }

    public Question() {
        this.answers = new ArrayList<>();
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

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Integer getOrdering() {
        return ordering;
    }

    public void setOrdering(Integer ordering) {
        this.ordering = ordering;
    }
}
