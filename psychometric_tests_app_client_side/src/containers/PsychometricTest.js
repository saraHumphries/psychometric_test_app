import { useState } from "react";
import Question from "../components/Question";

const PsychometricTest = function({testAttempt, psychometricTest, saveAnswer}) {

    

    const[currentQuestion, setCurrentQuestion] = useState(psychometricTest.questions[0]);
    const [endOfQuestions, setEndOfQuestions] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(1);


    const moveToNextQuestion = function() {
        const currentQuestionIndex = psychometricTest.questions.indexOf(currentQuestion);
        const nextQuestion = psychometricTest.questions[currentQuestionIndex+1];
        setCurrentQuestion(nextQuestion);
        setQuestionCounter(questionCounter+1);
        if (questionCounter >= psychometricTest.questions.length) {
            setEndOfQuestions(true);
        }
    };
 

    return (
        <div>
            <h2>{psychometricTest.title}</h2>
            {currentQuestion? <h3>Question {currentQuestion.ordering+1} of {psychometricTest.questions.length}</h3> : null}
            <Question psychometricTest = {psychometricTest} saveAnswer= {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></Question>
        </div>
    );
}

export default PsychometricTest;