import AnswerInput from "./AnswerInput";

const Question = function({saveAnswer, currentQuestion, moveToNextQuestion, testAttempt, endOfQuestions}) {
    return (

        <div>
            {!endOfQuestions?
                <h3>{currentQuestion.questionText}</h3>
            : null}
            <AnswerInput saveAnswer = {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>

            
        </div>
        
    );
};

export default Question;