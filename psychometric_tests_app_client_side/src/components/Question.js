import AnswerInput from "./AnswerInput";

const Question = function({saveAnswer, currentQuestion, moveToNextQuestion, testAttempt, endOfQuestions}) {
    return (
        <div>
            <h3>{currentQuestion.questionText}</h3>
            <AnswerInput saveAnswer = {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>
        </div>
        
    );
};

export default Question;