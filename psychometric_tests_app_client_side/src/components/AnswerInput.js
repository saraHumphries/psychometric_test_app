
import { useState } from "react";
import AnswersService from "../services/AnswersService";
import {Link} from "react-router-dom";


const AnswerInput = function({endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

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
                               <Link to="/results"><button >See your results</button> </Link> }
        </div>
    );
};

export default AnswerInput;