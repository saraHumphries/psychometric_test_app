import { useEffect, useState } from "react";
import Question from "../components/Question";

const PsychometricTest = function({psychometricTest}) {

    const[currentQuestion, setCurrentQuestion] = useState(psychometricTest.questions[0]);

    const moveToNextQuestion = function() {
        const currentQuestionIndex = psychometricTest.questions.indexOf(currentQuestion);
        const nextQuestion = psychometricTest.questions[currentQuestionIndex+1];
        setCurrentQuestion(nextQuestion);
    };

    

    

    return (
        <div>
            <div>{psychometricTest.title}</div>
            <Question moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></Question>
            
           
        </div>
    );
}

export default PsychometricTest;