
import { useState } from "react";

const AnswerInput = function({currentQuestion, moveToNextQuestion}) {

    const [answer, setAnswer] = useState({});

    const handleAnswerSubmit = function(event) {
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
            <form onSubmit = {handleAnswerSubmit}>
                <input type = 'number' onChange = {onChange}></input>
                <input type = 'submit'></input>
            </form>
        </div>
    );
};

export default AnswerInput;