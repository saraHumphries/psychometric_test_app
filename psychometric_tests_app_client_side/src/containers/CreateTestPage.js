import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState } from "react";
import LikertOptionsService from "../services/LikertOptionsService";
import QuestionsService from "../services/QuestionsService";
import { Link } from "react-router-dom";


const CreateTestPage = function() {

    const [newPsychometricTest, setNewPsychometricTest] = useState(null);
    const [listOfQuestions, setListOfQuestions] = useState([]);

    const onTitleSubmit = function() {
        const title = document.getElementById('test-title').value;
        const currentDate = new Date();
        const psychometricTestToPost = {
            title: title,
            info: `Custom-made scale created ${currentDate}`
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

    const hideAllFormsSection = function() {
        const allFormsSection = document.getElementById('all-forms-section');
        allFormsSection.style.display = 'none';
    };

    const hideLikertNextButton = function() {
        const likertNextButton = document.getElementById('likert-next-button');
        likertNextButton.style.display = 'none';
    };

    const hideLikertText = function() {
        const likertText = document.getElementById('likert-options-text');
        likertText.style.display = 'none'
    };

    const makeQuestionInputsVisible = function() {
        const questionInputs = document.getElementById('question-input-section');
        questionInputs.style.display = 'block';
    };

    const makeLikertInputsVisible = function() {
        const likertInputs = document.getElementById('likert-options-section');
        likertInputs.style.display = 'block';
    };

    const MakeEndTextVisible = function() {
        const endText = document.getElementById('end-text');
        endText.style.display = 'block';
    };


    const onLikertOptionsSubmit = function(evt) {
        evt.preventDefault();

        const likertOption1 = {
            likertText: evt.target['likert_option_1'].value,
            likertValue: 1,
            test: {
                id: newPsychometricTest.id
            }
        };
        const likertOption2 = {
            likertText: evt.target['likert_option_2'].value,
            likertValue: 2,
            test: {
                id: newPsychometricTest.id
            }
        };
        const likertOption3 = {
            likertText: evt.target['likert_option_3'].value,
            likertValue: 3,
            test: {
                id: newPsychometricTest.id
            }
        };
        const likertOption4 = {
            likertText: evt.target['likert_option_4'].value,
            likertValue: 4,
            test: {
                id: newPsychometricTest.id
            }
        };
        const likertOption5 = {
            likertText: evt.target['likert_option_5'].value,
            likertValue: 5,
            test: {
                id: newPsychometricTest.id
            }
        };
        LikertOptionsService.postLikertOption(likertOption1)
            .then(() => updateLikerts(likertOption1));
        LikertOptionsService.postLikertOption(likertOption2)
            .then(() => updateLikerts(likertOption2));
        LikertOptionsService.postLikertOption(likertOption3)
            .then(() => updateLikerts(likertOption3));
        LikertOptionsService.postLikertOption(likertOption4)
            .then(() => updateLikerts(likertOption4));
        LikertOptionsService.postLikertOption(likertOption5)
            .then(() => updateLikerts(likertOption5));
        makeQuestionInputsVisible();
        hideLikertText();
        hideLikertNextButton();
    };

    const updateLikerts = function(likertOption) {
        newPsychometricTest.likertOptions.push(likertOption);
        setNewPsychometricTest(newPsychometricTest);
    };

    let numberOfQuestions = 1;

    const addAnotherQuestionInput = function() {
        const previousQuestionText = document.getElementById(`question-input-${numberOfQuestions}`).value;
        addQuestionToTest(previousQuestionText);

        const questionsForm = document.getElementById('questions-form');
        const newInputLabel = document.createElement('label');
        newInputLabel.htmlFor = `question-input-${numberOfQuestions+1}`;
        newInputLabel.textContent = `Question ${numberOfQuestions+1}`;
        const newInputBox = document.createElement('input');
        newInputBox.id = `question-input-${numberOfQuestions+1}`;
        newInputBox.className = 'question-input';
    
        questionsForm.appendChild(newInputLabel);
        questionsForm.appendChild(newInputBox);

        numberOfQuestions += 1;
    };

    const addQuestionToTest = function(questionText) {
        const questionToAdd = {
            ordering: numberOfQuestions-1,
            questionText: questionText,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        QuestionsService.postQuestion(questionToAdd)
             .then(() => updateQuestions(questionToAdd));

    };

    const onQuestionFormSubmit = function(evt) {
        evt.preventDefault();
        const previousQuestionText = document.getElementById(`question-input-${numberOfQuestions}`).value;
        addQuestionToTest(previousQuestionText);
        hideAllFormsSection();
        MakeEndTextVisible();
    };

    const updateQuestions = function(question) {
        newPsychometricTest.questions.push(question);
    };


    return (
            <div id='whole-create-page'>
                {newPsychometricTest ? <div id='end-text'>
                    <h1>Your scale "{newPsychometricTest.title}"" has been created</h1>
                    <Link to={{
                                        pathname: '/create_new_test/summary',
                                        state: {newPsychometricTest}
                                    }}><button>Click here to see a summary</button></Link>
                </div> : null}
                <div id='all-forms-section'>
                    <section id='title-form'>
                    <h1>Create a custom scale:</h1>
                        <p>Firstly, give a title to your scale</p>
                        <label htmlFor='test-title'>Test title</label>
                        <input type='text' id='test-title'></input>
                        <button id='submit-title-button' onClick={onTitleSubmit}>next</button>
                    </section>
                    {newPsychometricTest? <h1 id='title-set-title'>{newPsychometricTest.title}</h1>: null}
                    <div id='likert-options-section'>
                            <div id='likert-options-text'>
                                <p>Next, choose your answer options:</p>
                                <p>Type in the options that you'd like</p>
                            </div>
                            <form onSubmit={onLikertOptionsSubmit}>
                                <div id='likert-options-form'>
                                    <input className='likert_input' id='likert_option_1' type='text' placeholder='e.g strongly disagree' required></input>
                                    <input className='likert_input' id='likert_option_2' type='text' placeholder='e.g disgaree' required></input>
                                    <input className='likert_input' id='likert_option_3' type='text' placeholder='e.g neither' required></input>
                                    <input className='likert_input' id='likert_option_4' type='text' placeholder='e.g disagree' required></input>
                                    <input className='likert_input' id='likert_option_5' type='text' placeholder='e.g strongly disagree' required></input>
                                </div>
                                <input className='next-button' id='likert-next-button' type='submit' value='next'></input>
                            </form>
                    </div>
                    
                    <div id='question-input-section'>
                        <p>Next, write your questions</p>
                        <form onSubmit={onQuestionFormSubmit}>
                            <div>
                                <div id='questions-form'>
                                    <label htmlFor='question-input-1'>Question 1:</label>
                                    <div className = 'input-delete-div'>
                                        <input className='question-input' id='question-input-1' required></input>
                                    </div>
                                    
                                </div> 
                                <input type='submit' className='next-button' value='Save custom scale' id='submit-questions-button'></input>
                             
                            </div>
                        </form>
                        <button id='add-question-button' onClick={addAnotherQuestionInput}>Add another question</button>
                    </div>
                </div> 
            </div>
        
    );
};

export default CreateTestPage;