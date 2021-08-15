package com.codeclan.example.psychometric_tests_app.models.users;

import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnoreProperties(value = "user")
    private List<TestAttempt> testAttempts;

    public User(String name) {
        this.name = name;
        this.testAttempts = new ArrayList<>();
    }

    public User() {
        this.testAttempts = new ArrayList<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TestAttempt> getTestAttempts() {
        return testAttempts;
    }

    public void setTestAttempts(List<TestAttempt> testAttempts) {
        this.testAttempts = testAttempts;
    }
}
