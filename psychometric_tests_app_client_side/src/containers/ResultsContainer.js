import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TestAttemptService from "../services/TestAttemptsService";

const ResultsContainer = function() {

    const data = useLocation();
    const testAttemptId = data.state.testAttempt.id;
    
    const [testAttempt, setTestAttempt] = useState({});

    useEffect(() => {
        TestAttemptService.getTestAttemptById(testAttemptId)
            .then(res => setTestAttempt(res));
    });



    return (
        <div>
            <p>{testAttemptId}</p>
        </div>
    )
};

export default ResultsContainer;