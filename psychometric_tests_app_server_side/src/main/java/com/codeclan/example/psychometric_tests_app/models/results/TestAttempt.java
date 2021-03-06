package com.codeclan.example.psychometric_tests_app.models.results;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Test;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "test_attempts")
public class TestAttempt {

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
    private Test test;

    @OneToMany(mappedBy = "testAttempt", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties(value = "testAttempt")
    private List<Answer> answers;

    public TestAttempt(User user, Test test) {
        this.user = user;
        this.test = test;
        this.answers = new ArrayList<>();
    }

    public TestAttempt() {

        this.answers = new ArrayList<>();
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
