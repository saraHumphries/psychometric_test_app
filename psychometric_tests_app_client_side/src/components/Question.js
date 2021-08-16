import AnswerInput from "./AnswerInput";

const Question = function({likertOptions, psychometricTest, saveAnswer, currentQuestion, moveToNextQuestion, testAttempt, endOfQuestions}) {
    return (

        <div>
            {!endOfQuestions?
                <div>
                    <p>To what extent do you agree or disagree with the following statement?</p>
                    <h3>{currentQuestion.questionText}</h3>
                </div>
            : null}
            <AnswerInput likertOptions = {likertOptions} psychometricTest = {psychometricTest} saveAnswer = {saveAnswer} endOfQuestions = {endOfQuestions} testAttempt = {testAttempt} moveToNextQuestion = {moveToNextQuestion} currentQuestion = {currentQuestion}></AnswerInput>

            
        </div>
        
    );
};

export default Question;