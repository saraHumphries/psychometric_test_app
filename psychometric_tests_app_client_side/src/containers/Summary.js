import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState, useEffect } from "react";
import SummaryQuestionBox from "../components/SummaryQuestionBox";
import { useLocation } from "react-router";
import TestAttemptService from "../services/TestAttemptsService";
import TotalSummaryChart from "../components/TotalSummaryChart";

const Summary = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttemptId;
    const psychometricTest = data.state.psychometricTest;
    const likertOptions = data.state.likertOptions;

    

    const [summaryResults, setSummaryResults] = useState(null);
    const [testAttempt, setTestAttempt] = useState(null);
    const [totalScores, setTotalScores] = useState(null); 

    useEffect(() => {
        PsychometricTestsService.getPsychometricTestsSummaries(psychometricTest.id)
            .then(res => setSummaryResults(res));
        TestAttemptService.getTestAttemptById(testAttemptId)
            .then(res => setTestAttempt(res));
        PsychometricTestsService.getPsychometricTestsTotalScores(psychometricTest.id)
            .then(res => setTotalScores(res));
    }, [testAttemptId]);

    const getQuestionSummary = function(questionId) {
        if(summaryResults) {
            return summaryResults[questionId];
        }
    };

    const calculateTotalScore = function() {
        if(testAttempt) {
            let totalScore = 0;
            for(let response of testAttempt.answers) {
                totalScore += response.response;
            };
            return totalScore;
        };
    };

    const calculateTotalPossibleScore = function() {
        if(psychometricTest) {
            const totalPossibleScore = psychometricTest.likertOptions.length * psychometricTest.questions.length
            return totalPossibleScore;
        };
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
                return <SummaryQuestionBox likertOptions = {likertOptions} getQuestionResponse = {getQuestionResponse} getQuestionSummary = {getQuestionSummary} question = {question} key = {question.id}></SummaryQuestionBox>
            });
            return listOfQuestions;
        };
    };

    


    return (
        <div>
            {psychometricTest? <h2>{psychometricTest.title} population data summary</h2>: null}
            <p>Some text about the scale</p>
            <h4>Your total score is {calculateTotalScore()} out of a possible {calculateTotalPossibleScore()}</h4>
            <TotalSummaryChart totalScores = {totalScores} userTotal = {calculateTotalScore()}></TotalSummaryChart>
            {getListOfQuestions()}
        </div>
    );
};

export default Summary;




