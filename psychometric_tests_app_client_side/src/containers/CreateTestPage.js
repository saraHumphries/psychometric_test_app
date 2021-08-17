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
        hideTitleForm();
        makeLikertInputsVisible();
    };

    const hideTitleForm = function() {
        const titleForm = document.getElementById('title-form');
        titleForm.style.display = 'none';
    };

    const makeLikertInputsVisible = function() {
        const likertInputs = document.getElementById('likert-options-section');
        likertInputs.style.display = 'block';
    };

    return (

        
            <div>
                <section id='title-form'>
                    <label htmlFor='test-title'>Test title</label>
                    <input type='text' id='test-title'></input>
                    <button id='submit-title-button' onClick={onTitleSubmit}>next</button>
                </section>

                {newPsychometricTest? <h2 id='title-set-title'>{newPsychometricTest.title}</h2>: null}

                <div id='likert-options-section'>
                    <div>
                        <p>Fill in what you want</p>
                    </div>
                    <section id='likert-options-form'>
                        <input className='likert_input' id='likert_option_1' type='text' placeholder='e.g strongly disagree'></input>
                        <input className='likert_input' id='likert_option_2' type='text' placeholder='e.g disgaree'></input>
                        <input className='likert_input' id='likert_option_3' type='text' placeholder='e.g neither'></input>
                        <input className='likert_input' id='likert_option_4' type='text' placeholder='e.g disagree'></input>
                        <input className='likert_input' id='likert_option_5' type='text' placeholder='e.g strongly disagree'></input>
                    </section>
                </div>
            </div>
        
    );
};

export default CreateTestPage;