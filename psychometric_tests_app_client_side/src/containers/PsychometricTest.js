import { useEffect, useState } from "react";
import Question from "../components/Question";
import LikertOptionsService from "../services/LikertOptionsService";

const PsychometricTest = function({testAttempt, psychometricTest, saveAnswer}) {

    const findFirstQuestion = function() {
        let firstQuestion = null;
        for(let question of psychometricTest.questions) {
            if(question.ordering === 0) {
                firstQuestion = question;
            };
        };
        return firstQuestion;
    };    

    const[currentQuestion, setCurrentQuestion] = useState(findFirstQuestion());
    const [endOfQuestions, setEndOfQuestions] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(1);
    const [likertOptions, setLikertOptions] = useState(null);

    


    useEffect(() => {
        LikertOptionsService.getLikertOptionsForTest(psychometricTest.id)
            .then(res => setLikertOptions(res));
    }, []);


    const moveToNextQuestion = function() {
        const currentQuestionOrder = currentQuestion.ordering;
        const nextQuestionOrder = currentQuestionOrder + 1;
        let nextQuestion = null;
        // const currentQuestionIndex = psychometricTest.questions.indexOf(currentQuestion);
        // const nextQuestion = psychometricTest.questions[currentQuestionIndex+1];
        for(let question of psychometricTest.questions) {
            if (question.ordering === nextQuestionOrder) {
                nextQuestion = question;
            };
        };
        setCurrentQuestion(nextQuestion);
        setQuestionCounter(questionCounter+1);
        if (questionCounter >= psychometricTest.questions.length) {
            setEndOfQuestions(true);
        };
    };
 

    return (
        <div id='test-container'>
            <h2>{psychometricTest.title}</h2>
            {currentQuestion? <h3>Question {currentQuestion.ordering+1} of {psychometricTest.questions.length}</h3> : null}
            <Question likertOptions = {likertOptions} psychometricTest = {psychometricTest} saveAnswer= {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></Question>
        </div>
    );
}

export default PsychometricTest;