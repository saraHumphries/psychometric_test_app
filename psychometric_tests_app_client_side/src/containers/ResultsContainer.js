import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TestAttemptService from "../services/TestAttemptsService";
import Result from "../components/Result";

const ResultsContainer = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttempt.id;
    
    const [testAttempt, setTestAttempt] = useState(null);

    console.log("testAttempt", testAttempt);

    useEffect(() => {
        TestAttemptService.getTestAttemptById(testAttemptId)
            .then(res => setTestAttempt(res));
    }, []);

    const getResultItems = function() {
        if (testAttempt) {
            const resultItems = testAttempt.answers.map((answer) => {
                return <Result answer = {answer} key = {answer.id}></Result>
            });
            return resultItems;
        };
    };



    return (
        <div>
            {testAttempt? <h3>{testAttempt.user.name}, these are your results for {testAttempt.test.title}</h3> : null}
            <h4>{getResultItems()}</h4>
        </div>
    )
};

export default ResultsContainer;