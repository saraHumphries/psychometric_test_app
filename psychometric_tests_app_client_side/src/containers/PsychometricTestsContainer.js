import { useState, useEffect } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";
import PsychometricTest from "./PsychometricTest";
import TestAttemptService from "../services/TestAttemptsService";
import UsersService from "../services/UsersService";
import AnswersService from "../services/AnswersService";




function PsychometricTestContainer() {

    

    const [psychometricTests, setPsychometricTests] = useState([]);
    const [selectedPsychometricTest, setSelectedPsychometricTest] = useState(null);
    const [user, setUser] = useState({});
    const [testAttempt, setTestAttempt] = useState({});
    
    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
            .then(res => setPsychometricTests(res));
        UsersService.postUser({
            "name": "anonymous"
        })
            .then(res => setUser(res));
    }, []);

   


    const onPsychometricTestClick = function(psychometricTest) {
        setSelectedPsychometricTest(psychometricTest);
        createUserTestAttempt(psychometricTest);
        const testList = document.getElementById('test-list');
        testList.style.display = 'none';
    }

    const createUserTestAttempt = function(psychometricTest) {
        const testAttempt = {
               user: {
                 id: user.id
               },
               test: {
                 id: psychometricTest.id
               }
             }
        TestAttemptService.postTestAttempt(testAttempt)
            .then(res => setTestAttempt(res));
        
    };

    const saveAnswer = function(currentQuestion, response) {
        let responseToSave = response;
        if(currentQuestion.reversed) {
            responseToSave = 6 - response;
        };
        const answerObject = {
            testAttempt: {
                id: testAttempt.id
            },
            question: {
                id: currentQuestion.id
            },
            response: responseToSave
        }
        AnswersService.postAnswer(answerObject);
    };

    const deletePsychometricTest = function(psychometricTestToDelete) {
        console.log("deleting");
        PsychometricTestsService.deletePsychometircTestById(psychometricTestToDelete.id)
            .then(() => PsychometricTestsService.getPsychometricTests())
            .then((res) => setPsychometricTests(res));
    };


    return (
        <div>
            <div id='test-list'>
            <h3>Select a scale to try, and see your result compared to general population data</h3>
                <div id='tests'>
                    <PsychometricTestList deletePsychometricTest={deletePsychometricTest} onPsychometricTestClick = {onPsychometricTestClick} psychometricTests = {psychometricTests}></PsychometricTestList>
                </div>
            </div>
            {selectedPsychometricTest ? <PsychometricTest saveAnswer = {saveAnswer} testAttempt = {testAttempt} psychometricTest = {selectedPsychometricTest}></PsychometricTest> : null}
        </div>  
    );
}

export default PsychometricTestContainer;