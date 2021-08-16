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
        if(summaryResults) {
            return summaryResults[questionId];
        }
        
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
            {psychometricTest? <h2>{psychometricTest.title} population data summary</h2>: null}
            <p>Some text about the scale</p>
            {getListOfQuestions()}
        </div>
    );
};

export default Summary;




