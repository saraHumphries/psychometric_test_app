import { useState, useEffect } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";
import PsychometricTest from "./PsychometricTest";
import TestAttemptService from "../services/TestAttemptsService";
import UsersService from "../services/UsersService";




function PsychometricTestContainer() {

    

    const [psychometricTests, setPsychometricTests] = useState([]);
    const [selectedPsychometricTest, setSelectedPsychometricTest] = useState(null);
    const [user, setUser] = useState({});
    const [testAttempt, setTestAttempt] = useState({});
    
    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
            .then(res => setPsychometricTests(res));
        UsersService.getUserById(1)
            .then(res => setUser(res));
    }, []);



    const onPsychometricTestClick = function(psychometricTest) {
        setSelectedPsychometricTest(psychometricTest);
        createUserTestAttempt(psychometricTest);
    }

    const createUserTestAttempt = function(psychometricTest) {
        const test = psychometricTest;
        const testAttempt = {user, test};
        TestAttemptService.postTestAttempt(testAttempt)
            .then(res => setTestAttempt(res));
        
    };



    return (
        <div>
            <p>Pick a test to have a go at</p>
            <PsychometricTestList onPsychometricTestClick = {onPsychometricTestClick} psychometricTests = {psychometricTests}></PsychometricTestList>
            {selectedPsychometricTest ? <PsychometricTest testAttempt = {testAttempt} psychometricTest = {selectedPsychometricTest}></PsychometricTest> : null}
        </div>  
    );
}

export default PsychometricTestContainer;