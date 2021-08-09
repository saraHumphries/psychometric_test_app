import { useEffect, useState } from "react";
import Question from "../components/Question";

const PsychometricTest = function({psychometricTest}) {

    const[currentQuestion, setCurrentQuestion] = useState(psychometricTest.questions[0]);

    useEffect(() => {
        setCurrentQuestion(psychometricTest.questions[0]);
    });

    const QuestionList = psychometricTest.questions.map((question) => {
        return <Question question = {question}></Question>
    });

    return (
        <div>
            <div>{psychometricTest.title}</div>
            {currentQuestion.questionText}
            {/* {QuestionList} */}
        </div>
    );
}

export default PsychometricTest;