package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepository extends JpaRepository<Test, Long> {
}
