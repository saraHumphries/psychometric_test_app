import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import QuestionsService from "../services/QuestionsService";

const CreateSummaryPage = function() {

    const data = useLocation();
    const newPsychometricTest = data.state.newPsychometricTest;

    const [questions, setQuestions] = useState([]);

    console.log(newPsychometricTest.id);
    console.log(questions);

    useEffect(() => {
        QuestionsService.getQuestionsByPsychometricTestId(newPsychometricTest.id)
            .then(res => setQuestions(res));
    },[]);

    const getLikertButtons = function() {
            newPsychometricTest.likertOptions.sort((a,b) => a.likertValue - b.likertValue);
            const likertButtons = newPsychometricTest.likertOptions.map((likertOption) => {
                return <button className='button' id={"likert-button" + likertOption.likertValue} value={likertOption.likertValue}>{likertOption.likertText}</button>
            });
            return likertButtons;
        
    };

    // const getQuestions = function() {
    //     questions.sort((a,b) => a.ordering - b.ordering);
    //     const questions = questions.map((question) => {
    //         return <div>
    //             <p>To what extent do you agree or disagree with the following statement?</p>
    //             <h3>{question.questionText}</h3>
    //             <div className='likert-buttons'>{getLikertButtons()}</div>
    //         </div>;
    //     });
    //     console.log(questions);
    //     return questions;
    // };

    return (
        <div>
            <h2>Your Summary</h2>
            {/* {getQuestions()} */}
        </div>
    );

};

export default CreateSummaryPage;