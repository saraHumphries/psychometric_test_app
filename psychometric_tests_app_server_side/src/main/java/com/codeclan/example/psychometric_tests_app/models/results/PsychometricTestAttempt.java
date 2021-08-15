package com.codeclan.example.psychometric_tests_app.models.results;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.PsychometricTest;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "test_attempts")
public class PsychometricTestAttempt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JsonBackReference(value = "user_test_attempts")

    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnoreProperties(value = "testAttempt")
    private User user;

    @ManyToOne
    @JsonIgnoreProperties(value = "testAttempts")
//    @JsonBackReference(value = "test_test_attempts")
    @JoinColumn(name = "test_id", nullable = false)
    private PsychometricTest psychometricTest;

    @OneToMany(mappedBy = "testAttempt", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "testAttempt")
    private List<Answer> answers;

    public PsychometricTestAttempt(User user, PsychometricTest psychometricTest) {
        this.user = user;
        this.psychometricTest = psychometricTest;
        this.answers = new ArrayList<>();
    }

    public PsychometricTestAttempt() {

        this.answers = new ArrayList<>();
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public PsychometricTest getTest() {
        return psychometricTest;
    }

    public void setTest(PsychometricTest psychometricTest) {
        this.psychometricTest = psychometricTest;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
