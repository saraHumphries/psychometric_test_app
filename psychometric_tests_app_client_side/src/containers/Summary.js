import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState, useEffect } from "react";
import SummaryQuestionBox from "../components/SummaryQuestionBox";
import { useLocation } from "react-router";
import TestAttemptService from "../services/TestAttemptsService";

const Summary = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttemptId;
    const psychometricTest = data.state.psychometricTest;

    

    const [summaryResults, setSummaryResults] = useState(null);
    const [testAttempt, setTestAttempt] = useState(null); 

    useEffect(() => {
        PsychometricTestsService.getPsychometricTestsSummaries(psychometricTest.id)
            .then(res => setSummaryResults(res));
        TestAttemptService.getTestAttemptById(testAttemptId)
            .then(res => setTestAttempt(res));
    }, [testAttemptId]);

    const getQuestionSummary = function(questionId) {
        if(summaryResults) {
            return summaryResults[questionId];
        }
        
    };


        
    

    const getQuestionResponse = function(questionOrdering) {
        if(testAttempt) {
            let responseInt;
            responseInt = testAttempt.answers[`${questionOrdering}`].response;

            return responseInt;
        };
    };


    const getListOfQuestions = function() {
        if(psychometricTest) {
            const listOfQuestions = psychometricTest.questions.map((question) => {
                return <SummaryQuestionBox getQuestionResponse = {getQuestionResponse} getQuestionSummary = {getQuestionSummary} question = {question} key = {question.id}></SummaryQuestionBox>
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




