import ChartDisplay from "./ChartDisplay";


const SummaryQuestionBox = function({question, getQuestionSummary, getQuestionResponse}) {

    const questionSummary = getQuestionSummary(question.id);



    return (
        <div>
            <h3>{question.questionText}</h3>
            <h4>Your answer was {getQuestionResponse(question.ordering)}</h4>
            <ChartDisplay questionSummary = {questionSummary}></ChartDisplay>
        </div>
    );
};

export default SummaryQuestionBox;