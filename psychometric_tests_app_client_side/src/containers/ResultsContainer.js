import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TestAttemptService from "../services/TestAttemptsService";
import Result from "../components/Result";
import UsersService from "../services/UsersService";

const ResultsContainer = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttempt.id;
    
    const [testAttempt, setTestAttempt] = useState(null);
    const [user, setUser] = useState(null);

    

    useEffect(() => {
        TestAttemptService.getTestAttemptById(testAttemptId)
            .then(res => setTestAttempt(res));
        UsersService.getUserByTestAttemptId(testAttemptId)
            .then(res => setUser(res[0]));
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
            {user && testAttempt? <h3>These are your results for {testAttempt.test.title}</h3> : null}
            <h4>{getResultItems()}</h4>
        </div>
    )
};

export default ResultsContainer;