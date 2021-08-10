
import { useState } from "react";

const AnswerInput = function({currentQuestion, moveToNextQuestion}) {

    const [answer, setAnswer] = useState({});
    const [reponse, setRessponse] = useState(null);

    const onNextQuestionClick = function() {
        const answer = {
                questionId : currentQuestion.id,
                response : reponse
            };
        setAnswer(answer);
        moveToNextQuestion();
        clearAnswerBox();
        
   };

    const onChange = function(evt) {
        setRessponse(evt.target.value);
    };

    const clearAnswerBox = function() {
        const answerBox = document.querySelector('#answer-box');
        answerBox.value = '';
    };


    return (
        <div>
            <div>Answers</div>
            <input id='answer-box' type = 'number' onChange = {onChange}></input>
            <button onClick = {onNextQuestionClick}>Next question</button>
        </div>
    );
};

export default AnswerInput;