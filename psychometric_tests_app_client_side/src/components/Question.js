import AnswerInput from "./AnswerInput";

const Question = function({currentQuestion, moveToNextQuestion}) {
    return (
        <div>
            <h3>{currentQuestion.questionText}</h3>
            <AnswerInput moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>
        </div>
        
    );
};

export default Question;