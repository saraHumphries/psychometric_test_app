import ListItem from "./ListItem";

const PsychometricTestList = function({psychometricTests, onPsychometricTestClick}) {

    const psychometricTestsList = psychometricTests.map((psychometricTest) => {
        return <div id='tests'>
            <ListItem key = {psychometricTest.id} psychometricTest = {psychometricTest} onPsychometricTestClick= {onPsychometricTestClick}></ListItem>
        </div>
    });

    return (
        <div id='tests'>
            {psychometricTestsList}
        </div>
    );
}


export default PsychometricTestList;