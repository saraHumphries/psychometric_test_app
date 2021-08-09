import Question from "./Question";

const PsychometricTest = function({psychometricTest}) {

    const QuestionList = psychometricTest.questions.map((question) => {
        return <Question question = {question}></Question>
    });

    return (
        <div>
            <div>{psychometricTest.title}</div>
            {QuestionList}
        </div>
    );
}

export default PsychometricTest;