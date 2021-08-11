package com.codeclan.example.psychometric_tests_app.models.users;

import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
    private List<TestAttempt> test_attempts;

    public User(String name) {
        this.name = name;
        this.test_attempts = new ArrayList<>();
    }

    public User() {
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

    public List<TestAttempt> getTest_attempts() {
        return test_attempts;
    }

    public void setTest_attempts(List<TestAttempt> test_attempts) {
        this.test_attempts = test_attempts;
    }
}
