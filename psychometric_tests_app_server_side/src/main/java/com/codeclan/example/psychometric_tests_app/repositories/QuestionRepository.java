package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {


}
