


const ListItem = function({psychometricTest, onPsychometricTestClick}) {

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    return (
        <div className='list-of-tests'>
            <button className='test-button' key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</button>
            <div>
                <p>{psychometricTest.info}</p>
                <p id='number-questions'>{psychometricTest.questions.length} questions</p>
            </div>
        </div>

    );
};

export default ListItem;