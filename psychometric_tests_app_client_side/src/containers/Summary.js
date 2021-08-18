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
            <p>{psychometricTest.info}</p>
            <h4>Your total score is {calculateTotalScore()}</h4>
            <p>compare your score to the population data distribution</p>
            { totalScores && totalScores.length > 10?
            <div id='compare-to-population-totals-section'>
                <TotalSummaryChart totalScores = {totalScores} userTotal = {calculateTotalScore()}></TotalSummaryChart>
            </div> : null}
            <div id='question-charts-container' >{getListOfQuestions()}</div>
        </div>
    );
};

export default Summary;




