
import {Link} from "react-router-dom";


const AnswerInput = function({psychometricTest, saveAnswer, endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

    const onLikertButtonClick = function(evt) {
        saveAnswer(currentQuestion, evt.target.value);
        if (!endOfQuestions) {
            moveToNextQuestion();
        }
    };

    const testAttemptId = testAttempt.id;



    return (
        <div>
            {!endOfQuestions? 
            <div id="likert-buttons">
                <button className='button' id="likert-button1" value = '1' onClick = {onLikertButtonClick}>disagree</button>
                <button className='button' id="likert-button2" value = '2' onClick = {onLikertButtonClick}>slightly disagree</button>
                <button className='button' id="likert-button3" value = '3' onClick = {onLikertButtonClick}>neither disagree or agree</button>
                <button className='button' id="likert-button4" value = '4' onClick = {onLikertButtonClick}>slightly agree</button>
                <button className='button' id="likert-button5" value = '5' onClick = {onLikertButtonClick}>agree</button>
            </div>
            : null}
        
            {endOfQuestions?
                               <Link to={{
                                   pathname: `/summary/${psychometricTest.title}`,
                                   state: {testAttemptId, psychometricTest}
                                   }}><button className='button' id='see-results-button'>See my results</button> </Link> : null}
        </div>
    );
};

export default AnswerInput;