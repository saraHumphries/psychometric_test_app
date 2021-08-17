import PsychometricTestsService from "../services/PsychometricTestsService";
import { useState } from "react";
import LikertOptionsService from "../services/LikertOptionsService";
import QuestionsService from "../services/QuestionsService";


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

    const makeQuestionInputsVisible = function() {
        const questionInputs = document.getElementById('question-input-section');
        questionInputs.style.display = 'block';
    };

    const makeLikertInputsVisible = function() {
        const likertInputs = document.getElementById('likert-options-section');
        likertInputs.style.display = 'block';
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
    };

    const updateLikerts = function(likertOption) {
        newPsychometricTest.likertOptions.push(likertOption);
        setNewPsychometricTest(newPsychometricTest);
    };

    const onQuestionFormSubmit = function(evt) {
        evt.preventDefault();
        const question1 = {
            ordering: 0,
            questionText: evt.target['question-input-1'].value,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        const question2 = {
            ordering: 1,
            questionText: evt.target['question-input-2'].value,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        const question3 = {
            ordering: 2,
            questionText: evt.target['question-input-3'].value,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        const question4 = {
            ordering: 3,
            questionText: evt.target['question-input-4'].value,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        const question5 = {
            ordering: 4,
            questionText: evt.target['question-input-5'].value,
            test: {
                id: newPsychometricTest.id
            },
            reversed: false
        };
        QuestionsService.postQuestion(question1)
            .then(() => updateQuestions(question1));
        QuestionsService.postQuestion(question2)
            .then(() => updateQuestions(question2));
        QuestionsService.postQuestion(question3)
            .then(() => updateQuestions(question3));
        QuestionsService.postQuestion(question4)
            .then(() => updateQuestions(question4));
        QuestionsService.postQuestion(question5)
            .then(() => updateQuestions(question5));
    };

    const updateQuestions = function(question) {
        newPsychometricTest.questions.push(question);
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
                        <p>Fill in what you want</p>
                        <form onSubmit={onLikertOptionsSubmit}>
                            <div id='likert-options-form'>
                                <input className='likert_input' id='likert_option_1' type='text' placeholder='e.g strongly disagree'></input>
                                <input className='likert_input' id='likert_option_2' type='text' placeholder='e.g disgaree'></input>
                                <input className='likert_input' id='likert_option_3' type='text' placeholder='e.g neither'></input>
                                <input className='likert_input' id='likert_option_4' type='text' placeholder='e.g disagree'></input>
                                <input className='likert_input' id='likert_option_5' type='text' placeholder='e.g strongly disagree'></input>
                            </div>
                            <input id='likert-next-button' type='submit' value='next'></input>
                        </form>
                </div>

                <div id='question-input-section'>
                    <p>choose your questions</p>
                    <form onSubmit={onQuestionFormSubmit}>
                        <div id='questions-form'>
                            <label htmlFor='question-input-1'>Question 1:</label>
                            <input className='question-input' id='question-input-1'></input>
                            <label htmlFor='question-input-2'>Question 2:</label>
                            <input className='question-input' id='question-input-2'></input>
                            <label htmlFor='question-input-3'>Question 3:</label>
                            <input className='question-input' id='question-input-3'></input>
                            <label htmlFor='question-input-4'>Question 4:</label>
                            <input className='question-input' id='question-input-4'></input>
                            <label htmlFor='question-input-5'>Question 5:</label>
                            <input className='question-input' id='question-input-5'></input>
                            <input type='submit' value='finish'></input>
                        </div>
                    </form>
                </div>
            </div>
        
    );
};

export default CreateTestPage;