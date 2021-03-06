
import {Link} from "react-router-dom";


const AnswerInput = function({likertOptions, psychometricTest, saveAnswer, endOfQuestions, currentQuestion, moveToNextQuestion, testAttempt}) {

    const onLikertButtonClick = function(evt) {
        saveAnswer(currentQuestion, evt.target.value);
        if (!endOfQuestions) {
            moveToNextQuestion();
        }
    };

    const testAttemptId = testAttempt.id;


    const getLikertButtons = function() {
        if(likertOptions) {
            likertOptions.sort((a,b) => a.likertValue - b.likertValue);
            const likertButtons = likertOptions.map((likertOption) => {
                return <button className='button' id={"likert-button" + likertOption.likertValue} value={likertOption.likertValue} onClick={onLikertButtonClick}>{likertOption.likertText}</button>
            });
            return likertButtons;
        };
    };


    return (
        <div>
            {!endOfQuestions? 
            <div className="likert-buttons">
                {getLikertButtons()}
            </div>
            : null}
        
            {endOfQuestions?
                               <div>
                                   <h3>See how your answers compare to the general popualtion data</h3>
                                   <Link to={{
                                       pathname: `/summary/${psychometricTest.title}`,
                                       state: {testAttemptId, psychometricTest, likertOptions}
                                       }}><button className='button' id='see-results-button'>See my results</button> </Link>
                               </div> : null}
        </div>
    );
};

export default AnswerInput;