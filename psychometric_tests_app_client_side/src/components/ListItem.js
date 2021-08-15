


const ListItem = function({psychometricTest, onPsychometricTestClick}) {

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    return (
        <div>
            <button className='test-button' key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</button>
        </div>

    );
};

export default ListItem;