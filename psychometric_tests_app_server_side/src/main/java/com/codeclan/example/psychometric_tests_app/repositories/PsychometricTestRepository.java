package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.PsychometricTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PsychometricTestRepository extends JpaRepository<PsychometricTest, Long> {
}
