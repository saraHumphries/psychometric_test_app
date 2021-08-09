package com.codeclan.example.psychometric_tests_app.components;

import com.codeclan.example.psychometric_tests_app.models.Question;
import com.codeclan.example.psychometric_tests_app.models.Test;
import com.codeclan.example.psychometric_tests_app.repositories.QuestionRepository;
import com.codeclan.example.psychometric_tests_app.repositories.TestRepository;
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

    public DataLoader() {
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {

        Test selfEsteemScale = new Test("Self-Esteem Scale");
        testRepository.save(selfEsteemScale);

        Question question1 = new Question("I feel that I am a person of worth, at least on an equal plane with others.", selfEsteemScale);
        questionRepository.save(question1);
        Question question2 = new Question("I feel that I have a number of good qualities.", selfEsteemScale);
        questionRepository.save(question2);
        Question question3 = new Question("All in all, I am inclined to feel that I am a failure.", selfEsteemScale);
        questionRepository.save(question3);
        Question question4 = new Question("I am able to do things as well as most other people.", selfEsteemScale);
        questionRepository.save(question4);
        Question question5 = new Question("I feel I do not have much to be proud of.", selfEsteemScale);
        questionRepository.save(question5);
        Question question6 = new Question("I take a positive attitude toward myself.", selfEsteemScale);
        questionRepository.save(question6);
        Question question7 = new Question("On the whole, I am satisfied with myself.", selfEsteemScale);
        questionRepository.save(question7);
        Question question8 = new Question("I wish I could have more respect for myself.", selfEsteemScale);
        questionRepository.save(question8);
        Question question9 = new Question("I certainly feel useless at times.", selfEsteemScale);
        questionRepository.save(question9);
        Question question10 = new Question("At times I think I am no good at all.", selfEsteemScale);
        questionRepository.save(question10);

        Test natureRelatednessScale = new Test("Nature Relatedness Scale (NR-6)");
        testRepository.save(natureRelatednessScale);

        Question question11 = new Question("My ideal vacation spot would be a remote, wilderness area.", natureRelatednessScale);
        questionRepository.save(question11);
        Question question12 = new Question("I always think about how my actions affect the environment.", natureRelatednessScale);
        questionRepository.save(question12);
        Question question13 = new Question("My connection to nature and the environment is a part of my spirituality.", natureRelatednessScale);
        questionRepository.save(question13);
        Question question14 = new Question("I take notice of wildlife wherever I am.", natureRelatednessScale);
        questionRepository.save(question14);
        Question question15 = new Question("My relationship to nature is an important part of who I am.", natureRelatednessScale);
        questionRepository.save(question15);
        Question question16 = new Question("I feel very connected to all living things and the earth.", natureRelatednessScale);
        questionRepository.save(question16);




    }
}
