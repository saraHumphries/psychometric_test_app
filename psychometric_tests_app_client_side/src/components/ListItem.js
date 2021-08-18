import PsychometricTestContainer from "../containers/PsychometricTestsContainer";



const ListItem = function({psychometricTest, onPsychometricTestClick, deletePsychometricTest}) {

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
                <button onClick={onDeleteTestButton} id='delete-test-button'>delete</button>
            </div>
        </div>

    );
};

export default ListItem;