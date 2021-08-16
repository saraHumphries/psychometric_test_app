package com.codeclan.example.psychometric_tests_app.models.psychometric_tests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "likert_options")
public class LikertOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "likert_text")
    private String likertText;

    @Column(name = "likert_value")
    private Integer likertValue;

    @ManyToOne
    @JoinColumn(name = "test_id", nullable = false)
    @JsonIgnoreProperties(value = "likertOptions")
    private Test test;

    public LikertOption(String likertText, Integer likertValue, Test test) {
        this.likertText = likertText;
        this.likertValue = likertValue;
        this.test = test;
    }

    public LikertOption() {
    }

    public String getLikertText() {
        return likertText;
    }

    public void setLikertText(String likertText) {
        this.likertText = likertText;
    }

    public Integer getLikertValue() {
        return likertValue;
    }

    public void setLikertValue(Integer likertValue) {
        this.likertValue = likertValue;
    }

    public Test getTest() {
        return test;
    }

    public void setTest(Test test) {
        this.test = test;
    }
}
