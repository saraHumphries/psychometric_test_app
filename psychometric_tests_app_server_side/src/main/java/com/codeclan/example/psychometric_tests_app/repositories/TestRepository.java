package com.codeclan.example.psychometric_tests_app.repositories;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Test;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TestRepository extends JpaRepository<Test, Long> {


    @Query(value = "select t.id, t.title, q.id as question_id, q.question_text, a.response, count(a.id) as response_count from tests t\n" +
            "\n" +
            "join questions q on q.test_id = t.id\n" +
            "join answers a on a.question_id = q.id\n" +
            "\n" +
            "where t.id = ?1\n" +
            "group by t.id, t.title, q.id, q.question_text, a.response", nativeQuery = true)
    String[][] findTestSummaryByTestId(Long testId);
}
