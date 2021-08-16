package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.LikertOption;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikertOptionRepository extends JpaRepository<LikertOption, Long> {

    List<LikertOption> findLikertOptionsByTestId(Long testId);

}
