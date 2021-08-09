
const ListItem = function({psychometricTest, onPsychometricTestClick}) {

    const handleClick = function() {
        onPsychometricTestClick(psychometricTest);
    };

    return (
        <li key = {psychometricTest.id} onClick={handleClick}>{psychometricTest.title}</li>
    );
};

export default ListItem;