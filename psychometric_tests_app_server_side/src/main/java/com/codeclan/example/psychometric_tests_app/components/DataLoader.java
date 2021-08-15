package com.codeclan.example.psychometric_tests_app.components;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.PsychometricTest;
import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.Question;
import com.codeclan.example.psychometric_tests_app.models.results.Answer;
import com.codeclan.example.psychometric_tests_app.models.results.PsychometricTestAttempt;
import com.codeclan.example.psychometric_tests_app.models.users.User;
import com.codeclan.example.psychometric_tests_app.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    PsychometricTestRepository psychometricTestRepository;

    @Autowired
    QuestionRepository questionRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PsychometricTestAttemptRepository psychometricTestAttemptRepository;

    @Autowired
    AnswerRepository answerRepository;




    public DataLoader() {
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {

        PsychometricTest selfEsteemScale = new PsychometricTest("Self-Esteem Scale");
        psychometricTestRepository.save(selfEsteemScale);

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

        PsychometricTest natureRelatednessScale = new PsychometricTest("Nature Relatedness Scale (NR-6)");
        psychometricTestRepository.save(natureRelatednessScale);

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




        List<List<String>> records = new ArrayList<>();
        try ( BufferedReader br = new BufferedReader(new FileReader("/Users/smhumphries/codeclan_work/project_spring/psychometric_test_app/psychometric_tests_app_server_side/src/main/java/com/codeclan/example/psychometric_tests_app/NRS_data"))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] values = line.split(",");

                User user = new User("population_data_point");
                userRepository.save(user);
                PsychometricTestAttempt psychometricTestAttempt = new PsychometricTestAttempt(user, natureRelatednessScale);
                psychometricTestAttemptRepository.save(psychometricTestAttempt);

                Answer q1Answer = new Answer(psychometricTestAttempt, question11, Integer.parseInt(values[0]));
                answerRepository.save(q1Answer);

                Answer q2Answer = new Answer(psychometricTestAttempt, question12, Integer.parseInt(values[1]));
                answerRepository.save(q2Answer);

                Answer q3Answer = new Answer(psychometricTestAttempt, question13, Integer.parseInt(values[2]));
                answerRepository.save(q3Answer);

                Answer q4Answer = new Answer(psychometricTestAttempt, question14, Integer.parseInt(values[3]));
                answerRepository.save(q4Answer);

                Answer q5Answer = new Answer(psychometricTestAttempt, question15, Integer.parseInt(values[4]));
                answerRepository.save(q5Answer);

                Answer q6Answer = new Answer(psychometricTestAttempt, question16, Integer.parseInt(values[5]));
                answerRepository.save(q6Answer);
                
            }
        }











    }
}
