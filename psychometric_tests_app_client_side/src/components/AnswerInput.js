
import { useState } from "react";
import AnswersService from "../services/AnswersService";

const AnswerInput = function({currentQuestion, moveToNextQuestion, testAttempt}) {

    const [answer, setAnswer] = useState({});
    const [response, setResponse] = useState(null);

    const onNextQuestionClick = function() {
        const answer = {
                questionId : currentQuestion.id,
                response : response
            };
        setAnswer(answer);
        moveToNextQuestion();
        clearAnswerBox();
        saveAnswer(answer);
        
   };

    const onChange = function(evt) {
        setResponse(evt.target.value);
    };

    const clearAnswerBox = function() {
        const answerBox = document.querySelector('#answer-box');
        answerBox.value = '';
    };

    const saveAnswer = function() {
        const answerObject = {testAttempt, currentQuestion, response}
        AnswersService.postAnswer(answerObject);
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