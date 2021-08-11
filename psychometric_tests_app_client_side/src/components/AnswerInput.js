
import { useState } from "react";
import {Link} from "react-router-dom";


const AnswerInput = function({saveAnswer, endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

    const onLikertButtonClick = function(evt) {
        saveAnswer(currentQuestion, evt.target.value);
        if (!endOfQuestions) {
            moveToNextQuestion();
        }
    };


    return (
        <div>
            <div id="likert-buttons">
                <button id="likert-button" value = '1' onClick = {onLikertButtonClick}>strongly disagree</button>
                <button id="likert-button" value = '2' onClick = {onLikertButtonClick}>disagree</button>
                <button id="likert-button" value = '3' onClick = {onLikertButtonClick}>neither disagree or agree</button>
                <button id="likert-button" value = '4' onClick = {onLikertButtonClick}>agree</button>
                <button id="likert-button" value = '5' onClick = {onLikertButtonClick}>strongly agree</button>
            </div>
        
            {/* <input id='answer-box' type = 'number' onChange = {onChange}></input> */}
            {!endOfQuestions? null :
                               <Link to={{
                                   pathname: "/test_results",
                                   state: {testAttempt}
                                   }}><button>Submit last answer</button> </Link> }
        </div>
    );
};

export default AnswerInput;