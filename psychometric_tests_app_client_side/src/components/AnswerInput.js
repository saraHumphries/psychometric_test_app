
import { useState } from "react";

const AnswerInput = function({currentQuestion}) {

    const [answer, setAnswer] = useState({});

    // const handleAnswerSubmit = function(event) {
    //     event.preventDefault();
    //     const answer = {
    //         questionId : currentQuestion.id,
    //         response : event.target.value
    //     }
    //     setAnswer(answer);
    // };

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
            <form>
                <input type = 'number' onChange = {onChange}></input>
                <input type = 'submit'></input>
            </form>
        </div>
    );
};

export default AnswerInput;