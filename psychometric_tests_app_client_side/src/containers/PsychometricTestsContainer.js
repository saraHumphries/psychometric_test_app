import { useState, useEffect } from "react";
import PsychometricTestsService from "../services/PsychometricTestsService";
import PsychometricTestList from "../components/PsychometricTestList";


function PsychometricTestContainer() {

    const [psychometricTests, setPsychometricTests] = useState([]);

    useEffect(() => {
        PsychometricTestsService.getPsychometricTests()
        .then(res => setPsychometricTests(res));
    }, []);



    return (
        <div>
            Container
            <PsychometricTestList psychometricTests = {psychometricTests}></PsychometricTestList>
        </div>  
    );
}

export default PsychometricTestContainer;