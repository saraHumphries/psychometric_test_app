import { useEffect, useState } from "react";
import PsychometricTestContainer from "../containers/PsychometricTestsContainer";
import PsychometricTestsService from "../services/PsychometricTestsService";


const ListItem = function({psychometricTest, onPsychometricTestClick, deletePsychometricTest}) {

    const [sumDataPoints, setSumDataPoints] = useState(0);

    useEffect(() => {
        PsychometricTestsService.getPsychometricTestsTotalScores(psychometricTest.id)
            .then(res => setSumDataPoints(res.length));
    }, []);

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    const onDeleteTestButton = function() {
        deletePsychometricTest(psychometricTest);
    };

    return (
        <div className='list-of-tests'>
            <button className='test-button' key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</button>
            <div>
                <p>{psychometricTest.info}</p>
                <p id='number-questions'>{psychometricTest.questions.length} questions</p>
                {sumDataPoints? <p id='number-of-datapoints'>{sumDataPoints} datapoints</p>: null}
                <button onClick={onDeleteTestButton} id='delete-test-button'>delete</button>
            </div>
        </div>

    );
};

export default ListItem;