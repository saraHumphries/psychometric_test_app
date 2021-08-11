


const ListItem = function({psychometricTest, onPsychometricTestClick}) {

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    return (
        <div>
            <li key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</li>
        </div>

    );
};

export default ListItem;