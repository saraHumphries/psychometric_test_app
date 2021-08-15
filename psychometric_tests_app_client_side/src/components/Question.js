import AnswerInput from "./AnswerInput";

const Question = function({saveAnswer, currentQuestion, moveToNextQuestion, testAttempt, endOfQuestions}) {
    return (

        <div>
            {!endOfQuestions?
                <div>
                    <p>To what extent do you agree or disagree with the following statement?</p>
                    <h3>{currentQuestion.questionText}</h3>
                </div>
            : null}
            <AnswerInput saveAnswer = {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>

            
        </div>
        
    );
};

export default Question;