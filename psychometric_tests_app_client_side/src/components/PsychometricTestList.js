import ListItem from "./ListItem";

const PsychometricTestList = function({psychometricTests, onPsychometricTestClick}) {

    const psychometricTestsList = psychometricTests.map((psychometricTest) => {
        return <ListItem psychometricTest = {psychometricTest} onPsychometricTestClick= {onPsychometricTestClick}></ListItem>
    });

    return (
        <div>
            {psychometricTestsList}
        </div>
    );
}


export default PsychometricTestList;