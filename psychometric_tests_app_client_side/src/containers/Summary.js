import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState, useEffect } from "react";
import SummaryQuestionBox from "../components/SummaryQuestionBox";

const Summary = function() {

    const [summaryResults, setSummaryResults] = useState(null);
    const [psychometricTest, setPsychometricTest] = useState(null); 

    useEffect(() => {
        PsychometricTestsService.getPsychometricTestsSummaries(2)
            .then(res => setSummaryResults(res));
        PsychometricTestsService.getPsychometricTestById(2)
            .then(res => setPsychometricTest(res));
    }, []);

    const getQuestionSummary = function(questionId) {
        return summaryResults[questionId];
    };


    const getListOfQuestions = function() {
        if(psychometricTest) {
            const listOfQuestions = psychometricTest.questions.map((question) => {
                return <SummaryQuestionBox getQuestionSummary = {getQuestionSummary} question = {question} key = {question.id}></SummaryQuestionBox>
            });
            return listOfQuestions;
        };
    };


    return (
        <div>
            {getListOfQuestions()}
        </div>
    );
};

export default Summary;





// {
//     1: {
//         responseCounts: {
//             1:,
//         }
//     }
// }


// [{
//     questionId: ,
//     responseCounts: {
//         1: 115,
//         2: 149
//     }
// },
// {
//     questionId: ,
//     responseCounts: {
//         1: ,
//         2
//     }
// }

// ]