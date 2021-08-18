package com.codeclan.example.psychometric_tests_app.components;

import com.codeclan.example.psychometric_tests_app.models.psychometric_tests.LikertOption;
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

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.*;

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

    @Autowired
    LikertOptionRepository likertOptionRepository;




    public DataLoader() {
    }


    @Override
    public void run(ApplicationArguments args) throws Exception {




        Test considerationOfFutureConsequencesScale = new Test("Consideration of Future Consequences Scale", "Strathman, A., Gleicher, F., Boninger, D. S., & Edwards, C. S. (2013) . Considerations of Future Consequences (CFC Scale) . Measurement Instrument Database for the Social Science.");
        testRepository.save(considerationOfFutureConsequencesScale);
        LikertOption likertOption1 = new LikertOption("extremely uncharacteristic", 1, considerationOfFutureConsequencesScale);
        likertOptionRepository.save(likertOption1);
        LikertOption likertOption2 = new LikertOption("somewhat uncharacteristic", 2, considerationOfFutureConsequencesScale);
        likertOptionRepository.save(likertOption2);
        LikertOption likertOption3 = new LikertOption("uncertain", 3, considerationOfFutureConsequencesScale);
        likertOptionRepository.save(likertOption3);
        LikertOption likertOption4 = new LikertOption("somewhat characteristic", 4, considerationOfFutureConsequencesScale);
        likertOptionRepository.save(likertOption4);
        LikertOption likertOption5 = new LikertOption("extremely characteristic", 5, considerationOfFutureConsequencesScale);
        likertOptionRepository.save(likertOption5);




        Question question12 = new Question(0, "I consider how things might be in the future, and try to influence those things with my day to day behaviour", false, considerationOfFutureConsequencesScale);
        questionRepository.save(question12);
        Question question13 = new Question(1, "Often I engage in a particular behavior in order to achieve outcomes that may not result for many years", false, considerationOfFutureConsequencesScale);
        questionRepository.save(question13);
        Question question14 = new Question(2, "I only act to satisfy immediate concerns, figuring the future will take care of itself", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question14);
        Question question15 = new Question(3, "My behaviour is only influenced by the immediate (i.e., a matter of days or weeks) outcomes of my actions", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question15);
        Question question16 = new Question(4, "My convenience is a big factor in the decisions I make or the actions I take", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question16);
        Question question17 = new Question(5, "I am willing to sacrifice my immediate happiness or well-being in order to achieve future outcomes", false, considerationOfFutureConsequencesScale);
        questionRepository.save(question17);
        Question question18 = new Question(6, "I think it is important to take warnings about negative outcomes seriously even if the negative outcome will not occur for many years", false, considerationOfFutureConsequencesScale);
        questionRepository.save(question18);
        Question question19 = new Question(7, "I think it is more important to perform a behaviour with important distant consequences than a behaviour with less-important immediate consequences", false, considerationOfFutureConsequencesScale);
        questionRepository.save(question19);
        Question question20 = new Question(8, "I generally ignore warnings about possible future problems because I think the problems will be resolved before they reach crisis level", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question20);
        Question question21 = new Question(9, "I think that sacrificing now is usually unnecessary since future outcomes can be dealt with at a later time", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question21);
        Question question22 = new Question(10, "I only act to satisfy immediate concerns, figuring that I will take care of future problems that may occur at a later date", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question22);
        Question question23 = new Question(11, "Since my day to day work has specific outcomes, it is more important to me than behavior that has distant outcomes", true, considerationOfFutureConsequencesScale);
        questionRepository.save(question23);


        Test natureRelatednessScale = new Test("Nature Relatedness Scale (NR-6)", "Nisbet, E. & Zelenski, J. (2013) The NR-6: a new brief measure of nature relatedness. Frontiers of Psychology");
        testRepository.save(natureRelatednessScale);
        LikertOption likertOption6 = new LikertOption("disagree", 1, natureRelatednessScale);
        likertOptionRepository.save(likertOption6);
        LikertOption likertOption7 = new LikertOption("slightly disagree", 2, natureRelatednessScale);
        likertOptionRepository.save(likertOption7);
        LikertOption likertOption8 = new LikertOption("neither agree nor disagree", 3, natureRelatednessScale);
        likertOptionRepository.save(likertOption8);
        LikertOption likertOption9 = new LikertOption("slightly agree", 4, natureRelatednessScale);
        likertOptionRepository.save(likertOption9);
        LikertOption likertOption10 = new LikertOption("agree", 5, natureRelatednessScale);
        likertOptionRepository.save(likertOption10);

        Question question1 = new Question(0, "My ideal vacation spot would be a remote, wilderness area.", false, natureRelatednessScale);
        questionRepository.save(question1);
        Question question2 = new Question(1, "I always think about how my actions affect the environment.", false, natureRelatednessScale);
        questionRepository.save(question2);
        Question question3 = new Question(2, "My connection to nature and the environment is a part of my spirituality.", false, natureRelatednessScale);
        questionRepository.save(question3);
        Question question4 = new Question(3, "I take notice of wildlife wherever I am.", false, natureRelatednessScale);
        questionRepository.save(question4);
        Question question5 = new Question(4, "My relationship to nature is an important part of who I am.", false, natureRelatednessScale);
        questionRepository.save(question5);
        Question question6 = new Question(5, "I feel very connected to all living things and the earth.", false, natureRelatednessScale);
        questionRepository.save(question6);


        try ( BufferedReader brNRS = new BufferedReader(new FileReader("/Users/smhumphries/codeclan_work/project_spring/psychometric_test_app/psychometric_tests_app_server_side/src/main/java/com/codeclan/example/psychometric_tests_app/NRS_data"))) {
            String lineNRS;
            while ((lineNRS = brNRS.readLine()) != null) {
                String[] values = lineNRS.split(",");

                User user = new User("population_data_point");
                userRepository.save(user);
                TestAttempt testAttempt = new TestAttempt(user, natureRelatednessScale);
                testAttemptRepository.save(testAttempt);

                Answer q1Answer = new Answer(testAttempt, question1, Integer.parseInt(values[0]));
                answerRepository.save(q1Answer);

                Answer q2Answer = new Answer(testAttempt, question2, Integer.parseInt(values[1]));
                answerRepository.save(q2Answer);

                Answer q3Answer = new Answer(testAttempt, question3, Integer.parseInt(values[2]));
                answerRepository.save(q3Answer);

                Answer q4Answer = new Answer(testAttempt, question4, Integer.parseInt(values[3]));
                answerRepository.save(q4Answer);

                Answer q5Answer = new Answer(testAttempt, question5, Integer.parseInt(values[4]));
                answerRepository.save(q5Answer);

                Answer q6Answer = new Answer(testAttempt, question6, Integer.parseInt(values[5]));
                answerRepository.save(q6Answer);
                
            }
        }


        try ( BufferedReader brCFCS = new BufferedReader(new FileReader("/Users/smhumphries/codeclan_work/project_spring/psychometric_test_app/psychometric_tests_app_server_side/src/main/java/com/codeclan/example/psychometric_tests_app/CFCS_data.csv"))) {
            String lineCFCS;
            while ((lineCFCS = brCFCS.readLine()) != null) {
                String[] values = lineCFCS.split(",");

                User user = new User("population_data_point");
                userRepository.save(user);
                TestAttempt testAttempt = new TestAttempt(user, considerationOfFutureConsequencesScale);
                testAttemptRepository.save(testAttempt);

                Answer q1Answer = new Answer(testAttempt, question12, Integer.parseInt(values[0]));
                answerRepository.save(q1Answer);

                Answer q2Answer = new Answer(testAttempt, question13, Integer.parseInt(values[1]));
                answerRepository.save(q2Answer);

                Answer q3Answer = new Answer(testAttempt, question14, Integer.parseInt(values[2]));
                answerRepository.save(q3Answer);

                Answer q4Answer = new Answer(testAttempt, question15, Integer.parseInt(values[3]));
                answerRepository.save(q4Answer);

                Answer q5Answer = new Answer(testAttempt, question16, Integer.parseInt(values[4]));
                answerRepository.save(q5Answer);

                Answer q6Answer = new Answer(testAttempt, question17, Integer.parseInt(values[5]));
                answerRepository.save(q6Answer);

                Answer q7Answer = new Answer(testAttempt, question18, Integer.parseInt(values[6]));
                answerRepository.save(q7Answer);

                Answer q8Answer = new Answer(testAttempt, question19, Integer.parseInt(values[7]));
                answerRepository.save(q8Answer);

                Answer q9Answer = new Answer(testAttempt, question20, Integer.parseInt(values[8]));
                answerRepository.save(q9Answer);

                Answer q10Answer = new Answer(testAttempt, question21, Integer.parseInt(values[9]));
                answerRepository.save(q10Answer);

                Answer q11Answer = new Answer(testAttempt, question22, Integer.parseInt(values[10]));
                answerRepository.save(q11Answer);

                Answer q12Answer = new Answer(testAttempt, question23, Integer.parseInt(values[11]));
                answerRepository.save(q12Answer);

            }
        }

    }
}
