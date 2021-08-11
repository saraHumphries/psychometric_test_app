import { useEffect, useState } from "react";
import Question from "../components/Question";

const PsychometricTest = function({psychometricTest, testAttempt}) {

    const[currentQuestion, setCurrentQuestion] = useState(psychometricTest.questions[0]);
    const [endOfQuestions, setEndOfQuestions] = useState(false);
    const [questionCounter, setQuestionCounter] = useState(1);


    const moveToNextQuestion = function() {
        const currentQuestionIndex = psychometricTest.questions.indexOf(currentQuestion);
        const nextQuestion = psychometricTest.questions[currentQuestionIndex+1];
        setCurrentQuestion(nextQuestion);
        setQuestionCounter(questionCounter+1);
        console.log("questionCounter", questionCounter);
        console.log("test length", psychometricTest.questions.length);
        console.log("boolean", endOfQuestions);
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