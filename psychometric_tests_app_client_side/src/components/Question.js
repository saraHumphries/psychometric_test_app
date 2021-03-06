import AnswerInput from "./AnswerInput";

const Question = function({likertOptions, psychometricTest, saveAnswer, currentQuestion, moveToNextQuestion, testAttempt, endOfQuestions}) {
    return (

        <div id='whole-question'>
            {!endOfQuestions?
                <div>
                    <p>Pick an option that best represents how you feel about the following:</p>
                    <h3>{currentQuestion.questionText}</h3>
                </div>
            : null}
            <AnswerInput likertOptions = {likertOptions} psychometricTest = {psychometricTest} saveAnswer = {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>

            
        </div>
        
    );
};

export default Question;