package com.codeclan.example.psychometric_tests_app.components;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Test;
import com.codeclan.example.psychometric_tests_app.models.results.Answer;
import com.codeclan.example.psychometric_tests_app.models.results.TestAttempt;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.codeclan.example.psychometric_tests_app.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TestRepository testRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TestAttemptRepository testAttemptRepository;

    @Autowired
    AnswerRepository answerRepository;


    public DataLoader() {
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {

        Test selfEsteemScale = new Test("Self-Esteem Scale");
        testRepository.save(selfEsteemScale);

        Question question1 = new Question(0, "I feel that I am a person of worth, at least on an equal plane with others.", selfEsteemScale);
        questionRepository.save(question1);
        Question question2 = new Question(1, "I feel that I have a number of good qualities.", selfEsteemScale);
        questionRepository.save(question2);
        Question question3 = new Question(2, "All in all, I am inclined to feel that I am a failure.", selfEsteemScale);
        questionRepository.save(question3);
        Question question4 = new Question(3, "I am able to do things as well as most other people.", selfEsteemScale);
        questionRepository.save(question4);
        Question question5 = new Question(4, "I feel I do not have much to be proud of.", selfEsteemScale);
        questionRepository.save(question5);
        Question question6 = new Question(5, "I take a positive attitude toward myself.", selfEsteemScale);
        questionRepository.save(question6);
        Question question7 = new Question(6, "On the whole, I am satisfied with myself.", selfEsteemScale);
        questionRepository.save(question7);
        Question question8 = new Question(7, "I wish I could have more respect for myself.", selfEsteemScale);
        questionRepository.save(question8);
        Question question9 = new Question(8, "I certainly feel useless at times.", selfEsteemScale);
        questionRepository.save(question9);
        Question question10 = new Question(9, "At times I think I am no good at all.", selfEsteemScale);
        questionRepository.save(question10);

        Test natureRelatednessScale = new Test("Nature Relatedness Scale (NR-6)");
        testRepository.save(natureRelatednessScale);

        Question question11 = new Question(0, "My ideal vacation spot would be a remote, wilderness area.", natureRelatednessScale);
        questionRepository.save(question11);
        Question question12 = new Question(1, "I always think about how my actions affect the environment.", natureRelatednessScale);
        questionRepository.save(question12);
        Question question13 = new Question(2, "My connection to nature and the environment is a part of my spirituality.", natureRelatednessScale);
        questionRepository.save(question13);
        Question question14 = new Question(3, "I take notice of wildlife wherever I am.", natureRelatednessScale);
        questionRepository.save(question14);
        Question question15 = new Question(4, "My relationship to nature is an important part of who I am.", natureRelatednessScale);
        questionRepository.save(question15);
        Question question16 = new Question(5, "I feel very connected to all living things and the earth.", natureRelatednessScale);
        questionRepository.save(question16);

        User user1 = new User("Sara");
        userRepository.save(user1);
        User user2 = new User("Alex");
        userRepository.save(user2);

        TestAttempt testAttempt1 = new TestAttempt(user1, natureRelatednessScale);
        testAttemptRepository.save(testAttempt1);

        Answer answer1 = new Answer(testAttempt1, question11, 2);
        answerRepository.save(answer1);
        Answer answer2 = new Answer(testAttempt1, question12, 3);
        answerRepository.save(answer2);
        Answer answer3 = new Answer(testAttempt1, question13, 3);
        answerRepository.save(answer3);
        Answer answer4 = new Answer(testAttempt1, question14, 2);
        answerRepository.save(answer4);
        Answer answer5 = new Answer(testAttempt1, question15, 5);
        answerRepository.save(answer5);
        Answer answer6 = new Answer(testAttempt1, question16, 1);
        answerRepository.save(answer6);




    }
}
