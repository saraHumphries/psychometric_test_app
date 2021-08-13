package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    public List<User> findUsersByTestAttemptsId(Long TestAttemptId);

}
