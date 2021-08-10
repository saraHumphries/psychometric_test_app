import AnswerInput from "./AnswerInput";

const Question = function({currentQuestion}) {
    return (
        <div>
            <h3>{currentQuestion.questionText}</h3>
            <AnswerInput currentQuestion = {currentQuestion}></AnswerInput>
        </div>
        
    );
};

export default Question;