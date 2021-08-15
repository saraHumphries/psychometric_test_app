package com.codeclan.example.psychometric_tests_app;

import com.codeclan.example.psychometric_tests_app.repositories.AnswerRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class PsychometricTestsAppApplicationTests {

	@Autowired
	AnswerRepository answerRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canGetAnswersByQuestionId() {
		
	}

}
