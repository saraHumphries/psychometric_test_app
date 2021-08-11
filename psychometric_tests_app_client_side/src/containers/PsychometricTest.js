import { useState } from "react";
import Question from "../components/Question";

const PsychometricTest = function({testAttempt, psychometricTest}) {

    

    const[currentQuestion, setCurrentQuestion] = useState(psychometricTest.questions[0]);
    const [endOfQuestions, setEndOfQuestions] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(1);


    const moveToNextQuestion = function() {
        const currentQuestionIndex = psychometricTest.questions.indexOf(currentQuestion);
        const nextQuestion = psychometricTest.questions[currentQuestionIndex+1];
        setCurrentQuestion(nextQuestion);
        setQuestionCounter(questionCounter+1);
        if (questionCounter >= psychometricTest.questions.length-1) {
            setEndOfQuestions(true);
        }
    };


   

    

    

    return (
        <div>
            <div>{psychometricTest.title}</div>
            <Question endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></Question>
            
           
        </div>
    );
}

export default PsychometricTest;