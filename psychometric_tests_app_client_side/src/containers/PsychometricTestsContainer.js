import { useState, useEffect } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";
import PsychometricTest from "./PsychometricTest";
import TestAttemptService from "../services/TestAttemptsService";



function PsychometricTestContainer() {

    const demoUser = {
        id: 1,
        name: "Sara"
    };

    const [psychometricTests, setPsychometricTests] = useState([]);
    const [selectedPsychometricTest, setSelectedPsychometricTest] = useState(null);
    const [user, setUser] = useState({});
    
    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
        .then(res => setPsychometricTests(res));
        setUser(demoUser);
    }, []);



    const onPsychometricTestClick = function(psychometricTest) {
        setSelectedPsychometricTest(psychometricTest);
        createUserTestAttempt(psychometricTest);
    }

    const createUserTestAttempt = function(psychometricTest) {
        const user = demoUser;
        const test = psychometricTest;
        const testAttempt = {user, test};
        TestAttemptService.postTestAttempt(testAttempt);
    };



    return (
        <div>
            <p>Pick a test to have a go at</p>
            <PsychometricTestList onPsychometricTestClick = {onPsychometricTestClick} psychometricTests = {psychometricTests}></PsychometricTestList>
            {selectedPsychometricTest ? <PsychometricTest psychometricTest = {selectedPsychometricTest}></PsychometricTest> : null}
        </div>  
    );
}

export default PsychometricTestContainer;