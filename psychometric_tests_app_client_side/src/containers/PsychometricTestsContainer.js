import { useState, useEffect } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";
import PsychometricTest from "../components/PsychometricTest";


function PsychometricTestContainer() {

    const [psychometricTests, setPsychometricTests] = useState([]);
    const [selectedPsychometricTest, setSelectedPsychometricTest] = useState([]);
    
    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
        .then(res => setPsychometricTests(res));
    }, []);

    const onPsychometricTestClick = function(psychometricTest) {
        setSelectedPsychometricTest(psychometricTest);
    }



    return (
        <div>
            Container
            <PsychometricTestList onPsychometricTestClick = {onPsychometricTestClick} psychometricTests = {psychometricTests}></PsychometricTestList>
            <PsychometricTest psychometricTest = {selectedPsychometricTest}></PsychometricTest>
        </div>  
    );
}

export default PsychometricTestContainer;