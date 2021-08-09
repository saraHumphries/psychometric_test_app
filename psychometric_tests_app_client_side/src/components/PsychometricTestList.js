import PsychometricTest from "./PsychometricTest";

const PsychometricTestList = function({psychometricTests}) {

    const psychometricTestsList = psychometricTests.map((psychometricTest) => {
        return <li key = {psychometricTest.id}>{psychometricTest.title}</li>
    });

    return (
        <div>
            {psychometricTestsList}
            <PsychometricTest></PsychometricTest>
        </div>
    );
}


export default PsychometricTestList;