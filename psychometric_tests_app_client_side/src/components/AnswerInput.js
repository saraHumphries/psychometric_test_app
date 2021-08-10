
import { useState } from "react";

const AnswerInput = function({currentQuestion, moveToNextQuestion}) {

    const [answer, setAnswer] = useState({});

    const onNextQuestionClick = function() {
        moveToNextQuestion();

   };

    const onChange = function(evt) {
        const answer = {
            questionId : currentQuestion.id,
            response : evt.target.value
        };
        setAnswer(answer);
    };


    return (
        <div>
            <div>Answers</div>
            <input type = 'number' onChange = {onChange}></input>
            <button onClick = {onNextQuestionClick}>Next question</button>
        </div>
    );
};

export default AnswerInput;