import AnswerInput from "./AnswerInput";

const Question = function({currentQuestion, moveToNextQuestion, testAttempt}) {
    return (
        <div>
            <h3>{currentQuestion.questionText}</h3>
            <AnswerInput testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>
        </div>
        
    );
};

export default Question;