package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.results.PsychometricTestAttempt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PsychometricTestAttemptRepository extends JpaRepository<PsychometricTestAttempt, Long> {
}
