import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState } from "react";


const CreateTestPage = function() {

    const [newPsychometricTest, setNewPsychometricTest] = useState({});

    const onTitleSubmit = function() {
        const title = document.getElementById('test-title').value;
        const psychometricTestToPost = {
            title: title
        };
        PsychometricTestsService.postPsychometricTest(psychometricTestToPost)
            .then(res => setNewPsychometricTest(res));
    };

    return (

        
            <div>
                <label htmlFor='test-title'>Test title</label>
                <input type='text' id='test-title'></input>
                <button id='submit-title-button' onClick={onTitleSubmit}>next</button>
            </div>
        
    );
};

export default CreateTestPage;