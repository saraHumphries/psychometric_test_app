
import { useState } from "react";
import {Link} from "react-router-dom";


const AnswerInput = function({saveAnswer, endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

    const [response, setResponse] = useState(null);
   

    const onNextQuestionClick = function() {
        saveAnswer(currentQuestion, response);
        if (!endOfQuestions) {
            moveToNextQuestion();
        }
        clearAnswerBox();
   };

    const onChange = function(evt) {
        setResponse(evt.target.value);
    };

    const clearAnswerBox = function() {
        const answerBox = document.querySelector('#answer-box');
        answerBox.value = '';
    };

    


    return (
        <div>
            <input id='answer-box' type = 'number' onChange = {onChange}></input>
            {!endOfQuestions? <button onClick = {onNextQuestionClick}>Next question</button> :
                               <Link to={{
                                   pathname: "/test_results",
                                   state: {testAttempt}
                                   }}><button onClick = {onNextQuestionClick}>Submit last answer</button> </Link> }
        </div>
    );
};

export default AnswerInput;