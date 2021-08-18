


const ListItem = function({psychometricTest, onPsychometricTestClick}) {

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    return (
        <div className='list-of-tests'>
            <button className='test-button' key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</button>
            <p>{psychometricTest.info}</p>
        </div>

    );
};

export default ListItem;