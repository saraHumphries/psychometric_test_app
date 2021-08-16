import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState, useEffect } from "react";
import SummaryQuestionBox from "../components/SummaryQuestionBox";
import { useLocation } from "react-router";
import TestAttemptService from "../services/TestAttemptsService";

const Summary = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttemptId;

    

    const [summaryResults, setSummaryResults] = useState(null);
    const [psychometricTest, setPsychometricTest] = useState(null);
    const [testAttempt, setTestAttempt] = useState(null); 

    useEffect(() => {
        PsychometricTestsService.getPsychometricTestsSummaries(2)
            .then(res => setSummaryResults(res));
        PsychometricTestsService.getPsychometricTestById(2)
            .then(res => setPsychometricTest(res));
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
            let response;
            response = testAttempt.answers[`${questionOrdering}`].response;
            return response;
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




