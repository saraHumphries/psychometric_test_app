import ChartDisplay from "./ChartDisplay";


const SummaryQuestionBox = function({question, getQuestionSummary}) {

    const questionSummary = getQuestionSummary(question.id);



    return (
        <div>
            <h3>{question.questionText}</h3>
            <ChartDisplay questionSummary = {questionSummary}></ChartDisplay>
        </div>
    );
};

export default SummaryQuestionBox;