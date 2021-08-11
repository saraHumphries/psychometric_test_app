
import { useState } from "react";
import AnswersService from "../services/AnswersService";

const AnswerInput = function({endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

    const [answer, setAnswer] = useState({});
    const [response, setResponse] = useState(null);
   

    const onNextQuestionClick = function() {
        saveAnswer();
        moveToNextQuestion();
        clearAnswerBox();
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
            <input id='answer-box' type = 'number' onChange = {onChange}></input>
            {!endOfQuestions? <button onClick = {onNextQuestionClick}>Next question</button> :
                               <button >See your results</button> }
        </div>
    );
};

export default AnswerInput;